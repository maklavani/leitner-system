// Types
import type { Dispatch, SetStateAction } from 'react'

export type SettingsProps = {
	lng: string
	menuParent?: string
	setMenuParent?: Dispatch<SetStateAction<string>>
}
