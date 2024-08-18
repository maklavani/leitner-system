import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button } from '@mui/material'

// Types
import type { LogoShapeProps } from '@/types/components/atoms/shapes/logo'

// Components
const LogoIconAtom = dynamic(() => import('@/components/atoms/icons/logo'))

const LogoShapeAtom = (props: LogoShapeProps) => {
	// Props
	const { lng } = props

	return (
		<Link href={`/${lng}`}>
			<Button
				size="large"
				aria-label="Leitner System logo"
				sx={{
					'& .MuiSvgIcon-root': {
						height: 32,
						fontSize: 144
					}
				}}
			>
				<LogoIconAtom />
			</Button>
		</Link>
	)
}

export default LogoShapeAtom
