// Types
import type { ReactNode } from 'react'
import type { Color } from '@mui/material'

export type IconButtonProps = {
	color: Color
	icon: ReactNode
	onClick?: () => void
}
