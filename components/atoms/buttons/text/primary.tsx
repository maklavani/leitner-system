'use client'

import { alpha } from '@mui/material/styles'
import { Button, Typography } from '@mui/material'

// Types
import type { Theme } from '@mui/material'
import type { TextButtonProps } from '@/types/components/atoms/buttons/text'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const PrimaryButtonAtom = (props: TextButtonProps) => {
	// Props
	const { lng, title, color, startIcon, endIcon, onClick } = props

	// Varaibles
	const { t } = useTranslation(lng)

	return (
		<Button
			variant="contained"
			color="inherit"
			disableElevation
			startIcon={startIcon}
			endIcon={endIcon}
			onClick={onClick}
			sx={(theme: Theme) => ({
				py: 1.25,
				px: 2.5,
				fontSize: 16,
				textAlign: 'inherit',
				textTransform: 'inherit',
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
				}
			})}
		>
			<Typography component="span" fontSize={16} fontWeight={600} flexGrow={1}>
				{t(title)}
			</Typography>
		</Button>
	)
}

export default PrimaryButtonAtom
