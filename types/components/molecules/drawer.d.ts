// Types
import type { Dispatch, SetStateAction, ReactNode } from 'react'

export type DrawerProps = {
	lng: string
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	menuParent?: string
	setMenuParent?: Dispatch<SetStateAction<string>>
	children?: ReactNode
}
