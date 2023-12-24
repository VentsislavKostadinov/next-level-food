import { S3 } from '@aws-sdk/client-s3'
import sql from 'better-sqlite3'
import slugify from 'slugify'

//@ts-ignore
const s3 = new S3({
    region: 'eu-central-1',
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    },
})

const db = sql('meals.db')

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug: string) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export const saveMeal = async (meal: any) => {
    meal.slug = slugify(meal.title, { lower: true })

    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`

    console.log('before try block')

    try {
        const bufferedImage = await meal.image.arrayBuffer()

        s3.putObject({
            Bucket: 'ventsislav-kostadinov-next-food-level',
            Key: fileName,
            Body: Buffer.from(bufferedImage),
            ContentType: meal.image.type,
        })

        console.log('after try block')

        meal.image = fileName

        db.prepare(
            `
        INSERT INTO meals
          (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
      `,
        ).run(meal)
    } catch (e: any) {
        console.log(e)
    }
}
