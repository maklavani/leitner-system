// Types
import type { ReactNode } from 'react'
import type { Color } from '@mui/material'

export type ListItemProps = {
	lng: string
	link: string
	title: string
	color: Color
	icon?: ReactNode
}
