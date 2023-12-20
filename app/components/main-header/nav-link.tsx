'use client'
import { NavLinkProps } from '@/app/model/nav-link-props'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classes from './nav-link.module.scss'

const NavLink = ({ href, children }: NavLinkProps) => {
    const path = usePathname()

    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${classes.link} ${classes.active}`
                    : classes.link
            }
        >
            {children}
        </Link>
    )
}

export default NavLink
