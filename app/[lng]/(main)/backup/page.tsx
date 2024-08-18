import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

// Types
import type { PageProps } from '@/types/app/pages'

// Configurations
import LocaleConfig from '@/config/locale'

// Components
const BackupTemplate = dynamic(() => import('@/components/templates/backup'))

const HomePage = (props: PageProps) => {
	// Props
	const { params } = props

	// Variables
	const lng = params?.lng ?? LocaleConfig.default

	return (
		<Box component="main" width={1} px={3}>
			<BackupTemplate lng={lng} />
		</Box>
	)
}

export default HomePage
