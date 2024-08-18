'use client'

import dynamic from 'next/dynamic'

// Types
import type { HomeProps } from '@/types/components/templates/home'

// MDX
const HomeEn = dynamic(() => import('@/md/en/home.mdx'))
const HomeFa = dynamic(() => import('@/md/fa/home.mdx'))

const HomeTemplate = (props: HomeProps) => {
	// Props
	const { lng } = props

	return lng === 'fa' ? <HomeFa /> : <HomeEn />
}

export default HomeTemplate
