'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { ImagePickerProps } from '@/app/model/image-picker'
import Image from 'next/image'
import classes from './image-picker.module.scss'

const ImagePicker = ({ label, name }: ImagePickerProps) => {
    const [pickedImage, setPickedImage] = useState<string>('')
    const imageInput = useRef(null)

    const handlePickClick = () => {
        const currentImageInput = imageInput.current as any
        currentImageInput.click()
    }

    const handleImageChange = (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        let file = null
        if ('files' in event.target) {
            file = event.target.files?.[0]
        } else {
            return
        }

        console.log(file)

        const fileReader = new FileReader()

        fileReader.onload = () => {
            const result = fileReader.result as string
            setPickedImage(result)
        }

        fileReader.readAsDataURL(file as Blob)
        console.log(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    onChange={handleImageChange}
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                >
                    Pick an Image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker
