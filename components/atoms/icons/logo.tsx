'use client'

import { useTheme } from '@mui/material/styles'
import { SvgIcon } from '@mui/material'

// Types
import type { SvgIconProps } from '@mui/material'

const LogoIconAtom = (props: SvgIconProps) => {
	// Variables
	const theme = useTheme()

	return (
		<SvgIcon {...props} viewBox="0 0 1000 200">
			<path
				fill="#ff5e5e"
				d="M 807.8 153.7 L 807.8 194.15 697.6 194.15 723.3 220 833.7 220 833.7 179.35 807.8 153.7 M 688.9 34.5 L 663.05 8.7 663.05 194.15 626.3 194.15 652.2 220 688.9 220 688.9 34.5 M 833.7 75.15 L 833.7 34.5 807.8 8.7 807.8 49.3 741.05 49.3 741.05 81.25 766.95 106.95 766.95 75.15 833.7 75.15 M 263.7 153.7 L 263.7 194.15 153.45 194.15 179.35 220 289.55 220 289.55 179.35 263.7 153.7 M 263.7 8.7 L 263.7 49.3 196.9 49.3 196.9 81.25 222.8 106.95 222.8 75.15 289.55 75.15 289.55 34.5 263.7 8.7 M 598.05 34.5 L 572.2 8.7 619.6 93.7 645.25 119.35 598.05 34.5 Z"
			/>

			<path
				fill="#4ce0c3"
				d="M 885.85 161.15 L 885.85 194.15 842.4 194.15 868.05 220 911.7 220 911.7 186.85 885.85 161.15 M 918.2 60.95 L 915.25 58.4 Q 904 49.9 885.85 49.3 L 885.85 104.4 911.7 130.2 911.7 75.15 Q 929.85 75.75 940.95 84.05 L 943.9 86.6 918.2 60.95 M 604.75 135.15 L 578.9 109.3 578.9 194.15 535.45 194.15 561.15 220 604.75 220 604.75 135.15 Z"
			/>

			<path
				fill="#bc47ff"
				d="M 833.7 147.6 L 833.7 106.95 807.8 81.25 807.8 121.7 741.05 121.7 741.05 153.7 766.95 179.35 766.95 147.6 833.7 147.6 M 118.9 153.7 L 118.9 194.15 8.7 194.15 34.55 220 144.8 220 144.8 179.35 118.9 153.7 M 222.8 179.35 L 222.8 147.6 289.55 147.6 289.55 106.95 263.7 81.25 263.7 121.7 196.9 121.7 196.9 153.7 222.8 179.35 M 367.55 34.5 L 341.7 8.7 341.7 194.15 298.25 194.15 323.9 220 367.55 220 367.55 34.5 M 442.6 75.15 L 416.75 49.3 376.25 49.3 401.95 75.15 442.6 75.15 Z"
			/>

			<path
				fill="#ffbb00"
				d="M 992.7 72.95 L 992.5 72.75 989.7 68.05 989.5 67.85 981.6 58.2 981.4 58.2 955.75 32.35 963.85 42 966.8 47.15 966.8 47.35 969.35 52.7 969.35 52.85 Q 970.95 56.45 971.55 58.6 L 973.7 70.6 973.7 84.25 972.35 91.55 Q 971.95 93.7 970.35 98.45 L 967.4 104.95 Q 966 107.95 963.85 111.05 L 963.85 111.25 959.5 116.95 959.3 117.15 Q 956.55 120.35 954.95 121.7 L 953.55 123.1 Q 950.8 125.85 948.25 127.65 939.3 134.55 928.5 138.7 L 972.35 194.15 911.9 194.15 937.75 220 998 220 954.35 164.35 Q 964.65 160.6 974.3 153.5 L 982.6 146.2 985.15 143.25 985.35 142.85 986.35 141.85 989.5 137.5 990.3 136.15 991.1 135.15 992.9 131.8 993.25 130.8 993.85 130 995.85 125.25 996.05 124.5 996.05 124.3 996.45 123.7 996.85 121.9 997.2 121.1 998 117.75 998 117.35 998.2 116.95 998.6 115.4 998.6 114.4 999.2 112.05 999.2 111.25 999.4 110.3 999.4 109.5 999.6 108.75 999.6 102.6 1000 102.4 1000 95.3 999.6 93.5 999.6 92.55 999.2 90.55 999.2 90.15 999 89.75 998.2 85.6 997.6 84.25 997.2 82.45 996.65 81.25 995.85 78.7 995.65 78.5 994.65 76.15 993.45 74.55 992.7 73.15 992.7 72.95 Z"
			/>

			<path fill="#00bbfa" d="M 78 34.5 L 52.15 8.7 52.15 153.7 78 179.35 78 34.5 Z" />
			<path fill="#37db5a" d="M 500.9 8.7 L 500.9 49.3 460.2 49.3 460.2 194.15 416.75 194.15 442.6 220 486.05 220 486.05 75.15 526.75 75.15 526.75 34.5 500.9 8.7 Z" />

			<path
				fill={theme.palette.mode === 'dark' ? '#fff' : '#333'}
				d="M 43.45 0 L 0 0 0 185.45 110.2 185.45 110.2 145 43.45 145 43.45 0 M 255 40.65 L 255 0 144.8 0 144.8 185.45 255 185.45 255 145 188.25 145 188.25 113 255 113 255 72.6 188.25 72.6 188.25 40.65 255 40.65 M 333 185.45 L 333 0 289.55 0 289.55 185.45 333 185.45 M 492.2 40.65 L 492.2 0 367.55 0 367.55 40.65 408.05 40.65 408.05 185.45 451.5 185.45 451.5 40.65 492.2 40.65 M 654.35 185.45 L 654.35 0 610.9 0 610.9 85 563.5 0 526.75 0 526.75 185.45 570.2 185.45 570.2 100.65 617.6 185.45 654.35 185.45 M 799.1 40.65 L 799.1 0 688.9 0 688.9 185.45 799.1 185.45 799.1 145 732.35 145 732.35 113 799.1 113 799.1 72.6 732.35 72.6 732.35 40.65 799.1 40.65 M 958.9 39.85 Q 952.2 26.8 939.7 17.35 928.7 9.05 914.25 4.55 900.75 0.3 885.85 0 L 833.7 0 833.7 185.45 877.15 185.45 877.15 152.55 903.2 185.45 963.65 185.45 919.8 130 Q 930.45 125.85 939.7 118.95 952.2 109.5 958.9 96.5 965.6 83.25 965.6 68.25 965.6 53.05 958.9 39.85 M 906.35 49.7 Q 916.05 56.8 916.05 68.25 916.05 79.5 906.35 86.6 895.5 95.1 877.15 95.7 L 877.15 40.65 Q 895.5 41.2 906.35 49.7 Z"
			/>
		</SvgIcon>
	)
}

export default LogoIconAtom
