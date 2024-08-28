'use client'

import { alpha } from '@mui/material/styles'
import { IconButton } from '@mui/material'

// Types
import type { Theme } from '@mui/material'
import type { IconButtonProps } from '@/types/components/atoms/buttons/icon'

const IconButtonAtom = (props: IconButtonProps) => {
	// Props
	const { color, icon, onClick } = props

	return (
		<IconButton
			size="large"
			aria-label="icon button"
			onClick={onClick}
			sx={(theme: Theme) => ({
				p: 1.5,
				color: color[700],
				bgcolor: alpha(color[500], 0.15),
				borderRadius: 1,
				boxShadow: `${color[500]} 0 -3px 0 inset`,
				transition: 'all .15s ease',
				...theme.applyStyles('dark', {
					color: color[100]
				}),
				'&:hover': {
					color: color[500],
					bgcolor: alpha(color[500], 0.1),
					boxShadow: `${color[300]} 0 -3px 0 inset`,
					...theme.applyStyles('dark', {
						color: color[50],
						bgcolor: alpha(color[500], 0.2)
					})
				},
				'&:active': {
					color: color[700],
					boxShadow: `${color[700]} 0 0 0 1px inset, ${color[700]} 0 -3px 0 inset`,
					transform: 'translateY(2px)',
					...theme.applyStyles('dark', {
						color: color[200]
					})
				},
				'& .MuiSvgIcon-root': {
					fontSize: 24,
					fontWeight: 600
				},
				'& .MuiTouchRipple-root .MuiTouchRipple-child': { borderRadius: 1 }
			})}
		>
			{icon}
		</IconButton>
	)
}

export default IconButtonAtom
