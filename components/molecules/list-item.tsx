import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ListItem } from '@mui/material'

// Types
import type { ListItemProps } from '@/types/components/molecules/list-item'

// Components
const PrimaryButtonAtom = dynamic(() => import('@/components/atoms/buttons/text/primary'))

const ListItemMolecule = (props: ListItemProps) => {
	// Props
	const { lng, link, title, icon, color } = props

	return (
		<ListItem
			sx={{
				display: 'inline-flex',
				width: 'auto',
				p: 0
			}}
		>
			<Link href={`/${lng}${link}`} tabIndex={-1}>
				<PrimaryButtonAtom lng={lng} title={title} color={color} startIcon={icon} />
			</Link>
		</ListItem>
	)
}

export default ListItemMolecule
