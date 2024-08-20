'use client'

import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useTheme, useColorScheme } from '@mui/material/styles'
import { useMediaQuery, Grid, Menu, MenuItem, Link } from '@mui/material'
import { amber, pink, grey } from '@mui/material/colors'

import {
	BrightnessAuto as BrightnessAutoIcon,
	LightMode as LightModeIcon,
	NightsStay as NightsStayIcon,
	GitHub as GitHubIcon,
	Translate as TranslateIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
	ArrowBackIosNew as ArrowBackIosNewIcon,
	Check as CheckIcon
} from '@mui/icons-material'

// Types
import type { SettingsProps } from '@/types/components/molecules/settings'

// Configurations
import LocaleConfig from '@/config/locale'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Components
const PrimaryButtonAtom = dynamic(() => import('@/components/atoms/buttons/text/primary'))
const IconButtonAtom = dynamic(() => import('@/components/atoms/buttons/icons/icon'))

const SettingsMolecule = (props: SettingsProps) => {
	// Props
	const { lng, menuParent, setMenuParent } = props

	// Variables
	const { t } = useTranslation(lng)
	const theme = useTheme()
	const { mode, setMode } = useColorScheme()
	const pathname = usePathname()
	const anchorEl = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState<boolean>(false)
	const greaterThanMedium = useMediaQuery(theme.breakpoints.up('md'))
	const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)')

	// Callbacks
	const changeMode = () => {
		if (preferredColorScheme) setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')
		else setMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light')
	}

	return (
		<Grid item>
			<Grid container rowSpacing={{ xs: 1, md: 'inherit' }} columnSpacing={1}>
				{!menuParent && (
					<Grid ref={anchorEl} item>
						{!greaterThanMedium && (
							<PrimaryButtonAtom
								lng={lng}
								title="form:button.languages"
								color={amber}
								startIcon={<TranslateIcon />}
								endIcon={theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
								onClick={() => {
									if (setMenuParent) setMenuParent('languages')
								}}
							/>
						)}

						{greaterThanMedium && <IconButtonAtom color={amber} icon={<TranslateIcon />} onClick={() => setOpen(true)} />}
					</Grid>
				)}

				{!menuParent && (
					<Grid item>
						{!greaterThanMedium && (
							<PrimaryButtonAtom
								lng={lng}
								title="form:button.theme"
								color={pink}
								startIcon={mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />}
								endIcon={theme.direction === 'rtl' ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
								onClick={() => {
									if (setMenuParent) setMenuParent('theme')
								}}
							/>
						)}

						{greaterThanMedium && (
							<IconButtonAtom
								color={pink}
								icon={mode === 'system' ? <BrightnessAutoIcon /> : mode === 'light' ? <LightModeIcon /> : <NightsStayIcon />}
								onClick={changeMode}
							/>
						)}
					</Grid>
				)}

				{!menuParent && (
					<Grid item>
						<Link href="https://github.com/maklavani/Leitner-System" target="_blank">
							{!greaterThanMedium && <PrimaryButtonAtom lng={lng} title="form:button.github" color={grey} startIcon={<GitHubIcon />} />}
							{greaterThanMedium && <IconButtonAtom color={grey} icon={<GitHubIcon />} />}
						</Link>
					</Grid>
				)}

				{menuParent === 'languages' &&
					LocaleConfig.list.map((item, index) => (
						<Grid key={index} item>
							<Link href={pathname.replace(`/${lng}`, `/${item}`)}>
								<PrimaryButtonAtom lng={lng} title={`${t(`common:title.${item}`)} (${item})`} color={amber} startIcon={<TranslateIcon />} />
							</Link>
						</Grid>
					))}

				{menuParent === 'theme' && (
					<>
						<Grid item>
							<PrimaryButtonAtom
								lng={lng}
								title="form:button.system"
								color={pink}
								startIcon={<BrightnessAutoIcon />}
								endIcon={mode === 'system' && <CheckIcon />}
								onClick={() => setMode('system')}
							/>
						</Grid>

						<Grid item>
							<PrimaryButtonAtom
								lng={lng}
								title="form:button.light"
								color={pink}
								startIcon={<LightModeIcon />}
								endIcon={mode === 'light' && <CheckIcon />}
								onClick={() => setMode('light')}
							/>
						</Grid>

						<Grid item>
							<PrimaryButtonAtom
								lng={lng}
								title="form:button.dark"
								color={pink}
								startIcon={<NightsStayIcon />}
								endIcon={mode === 'dark' && <CheckIcon />}
								onClick={() => setMode('dark')}
							/>
						</Grid>
					</>
				)}

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
	)
}

export default SettingsMolecule
