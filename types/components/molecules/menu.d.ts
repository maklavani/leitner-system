// Types
import type { Dispatch, SetStateAction } from 'react'

export type MenuProps = {
	lng: string
	menuParent?: string
	setMenuParent?: Dispatch<SetStateAction<string>>
}
