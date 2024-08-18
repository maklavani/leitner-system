'use client'

import { useTheme, alpha } from '@mui/material/styles'
import { IconButton } from '@mui/material'

// Types
import type { IconButtonProps } from '@/types/components/atoms/buttons/icon'

const IconButtonAtom = (props: IconButtonProps) => {
	// Props
	const { color, icon, onClick } = props

	// Varaibles
	const theme = useTheme()

	return (
		<IconButton
			size="large"
			aria-label="icon button"
			onClick={onClick}
			sx={{
				p: 1.5,
				color: theme.palette.mode === 'dark' ? color[100] : color[700],
				bgcolor: alpha(color[500], 0.15),
				borderRadius: 1,
				boxShadow: `${color[500]} 0 -3px 0 inset`,
				transition: 'all .15s ease',
				'&:hover': {
					color: theme.palette.mode === 'dark' ? color[50] : color[500],
					bgcolor: alpha(color[500], theme.palette.mode === 'dark' ? 0.2 : 0.1),
					boxShadow: `${color[300]} 0 -3px 0 inset`
				},
				'&:active': {
					color: theme.palette.mode === 'dark' ? color[200] : color[700],
					boxShadow: `${color[700]} 0 0 0 1px inset, ${color[700]} 0 -3px 0 inset`,
					transform: 'translateY(2px)'
				},
				'& .MuiSvgIcon-root': {
					fontSize: 24,
					fontWeight: 600
				},
				'& .MuiTouchRipple-root .MuiTouchRipple-child': { borderRadius: 1 }
			}}
		>
			{icon}
		</IconButton>
	)
}

export default IconButtonAtom
