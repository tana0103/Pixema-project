export const THEME_DARK = "THEME_DARK"
export const THEME_LIGHT = "THEME_LIGHT"

export type ActionThemeType = {
	type: string,
	className: 'light' | 'dark'
}

export const lightThemeAction = (): ActionThemeType => {
	return {
		type: THEME_LIGHT,
		className: 'light'
	}
}

export const darkThemeAction = (): ActionThemeType => {
	return {
		type: THEME_DARK,
		className: 'dark'
	}
}