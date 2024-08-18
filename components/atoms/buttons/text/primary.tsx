'use client'

import { useTheme, alpha } from '@mui/material/styles'
import { Button, Typography } from '@mui/material'

// Types
import type { TextButtonProps } from '@/types/components/atoms/buttons/text'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const PrimaryButtonAtom = (props: TextButtonProps) => {
	// Props
	const { lng, title, color, startIcon, endIcon, onClick } = props

	// Varaibles
	const { t } = useTranslation(lng)
	const theme = useTheme()

	return (
		<Button
			variant="contained"
			color="inherit"
			disableElevation
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			sx={{
				py: 1.25,
				px: 2.5,
				fontSize: 16,
				textAlign: 'inherit',
				textTransform: 'inherit',
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
				}
			}}
		>
			<Typography component="span" fontSize={16} fontWeight={600} flexGrow={1}>
				{t(title)}
			</Typography>
		</Button>
	)
}

export default PrimaryButtonAtom
