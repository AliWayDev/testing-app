import { ReactNode } from "react"

export interface INavbarItem {
    name: string
    icon: ReactNode
    path?: string
}