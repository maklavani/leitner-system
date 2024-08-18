'use client'

import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useColorScheme, useTheme, alpha } from '@mui/material/styles'
import { useMediaQuery, AppBar, Container, Toolbar, Grid, Menu, MenuItem, Link } from '@mui/material'
import { cyan, amber, blueGrey, pink, green } from '@mui/material/colors'

import {
	Villa as VillaIcon,
	CloudDownload as CloudDownloadIcon,
	Tune as TuneIcon,
	BrightnessAuto as BrightnessAutoIcon,
	LightMode as LightModeIcon,
	NightsStay as NightsStayIcon,
	Translate as TranslateIcon
} from '@mui/icons-material'

// Types
import type { AppbarProps } from '@/types/components/organisms/appbar'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Components
const HideOnScroll = dynamic(() => import('@/components/theme/hide-on-scroll'))
const ListItemMolecule = dynamic(() => import('@/components/molecules/list-item'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))
const LogoShapeAtom = dynamic(() => import('@/components/atoms/shapes/logo'))

const AppbarOrganism = (props: AppbarProps) => {
	// Props
	const { lng } = props

	// Variables
	const { t } = useTranslation(lng)
	const theme = useTheme()
	const pathname = usePathname()
	const anchorEl = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState<boolean>(false)
	const { mode, setMode } = useColorScheme()
	const preferredColorScheme: 'light' | 'dark' = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'

	// Callbacks
	const changeMode = () => {
		if (preferredColorScheme === 'dark') setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')
		else setMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light')
	}

	return (
		<HideOnScroll onlyDesktop={true}>
			<AppBar
				component="nav"
				sx={{
					color: 'inherit',
					backgroundImage: 'none',
					bgcolor: alpha(theme.palette.background.default, 0.17),
					backdropFilter: 'blur(20px)',
					boxShadow: 'none'
				}}
			>
				<Container maxWidth="xl">
					<Toolbar
						sx={{
							boxSizing: 'content-box',
							py: { md: 2 }
						}}
					>
						<LogoShapeAtom lng={lng} />

						<Grid container justifyContent="space-between" flexGrow={1} ml={{ xs: 3, md: 5 }}>
							<Grid item>
								<Grid component="ul" container columnSpacing={{ xs: 1, md: 2 }} m={0} p={0}>
									<Grid item>
										<ListItemMolecule lng={lng} link="/" title="links:home" color={cyan} icon={<VillaIcon />} />
									</Grid>

									<Grid item>
										<ListItemMolecule lng={lng} link="/backup" title="links:backup" color={green} icon={<CloudDownloadIcon />} />
									</Grid>

									<Grid item>
										<ListItemMolecule lng={lng} link="/settings" title="links:settings" color={blueGrey} icon={<TuneIcon />} />
									</Grid>
								</Grid>
							</Grid>

							<Grid item>
								<Grid container columnSpacing={1}>
									<Grid ref={anchorEl} item>
										<IconButtonAtom color={amber} icon={<TranslateIcon />} onClick={() => setOpen(true)} />
									</Grid>

									<Grid item>
										<IconButtonAtom
											color={pink}
											icon={mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />}
											onClick={changeMode}
										/>
									</Grid>

									<Menu
										anchorEl={anchorEl.current}
										elevation={0}
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'right'
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right'
										}}
										open={open}
										onClose={() => setOpen(false)}
									>
										{LocaleConfig.list.map((item, index) => (
											<MenuItem
												key={index}
												sx={{
													'& a': {
														width: 1,
														textAlign: 'center',
														textDecoration: 'none',
														color: 'currentColor'
													}
												}}
											>
												<Link href={pathname.replace(`/${lng}`, `/${item}`)}>
													{t(`common:title.${item}`)} ({item})
												</Link>
											</MenuItem>
										))}
									</Menu>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</HideOnScroll>
	)
}

export default AppbarOrganism
