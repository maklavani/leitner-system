'use client'

import dynamic from 'next/dynamic'
import { Grid, Toolbar, Container } from '@mui/material'

// Types
import type { HomeProps } from '@/types/components/templates/home'

// MDX
const HomeEn = dynamic(() => import('@/md/en/home.mdx'))
const HomeFa = dynamic(() => import('@/md/fa/home.mdx'))

const HomeTemplate = (props: HomeProps) => {
	// Props
	const { lng } = props

	return (
		<Grid container>
			<Container
				maxWidth="md"
				sx={{
					mt: { xs: 2, md: 10 },
					textAlign: 'center',
					zIndex: 1
				}}
			>
				<Toolbar />

				{lng === 'fa' ? <HomeFa /> : <HomeEn />}
			</Container>
		</Grid>
	)
}

export default HomeTemplate
