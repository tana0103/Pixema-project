const THEME_DARK = "THEME_DARK"
const THEME_LIGHT = "THEME_LIGHT"

type ThemeType = {
	className: string,
}

type ActionThemeType = {
	type: string,
	className: 'light' |'dark'
}

const defaultThemeState: ThemeType = {
	className: 'dark'
}

export const themeReducer = (state: ThemeType = defaultThemeState, action: ActionThemeType): ThemeType => {
	switch (action.type) {
		case THEME_DARK:
			return {
				...state,
				className: 'dark'
			}
		case THEME_LIGHT:
			return {
				...state,
				className: 'light'
			}
		default:
			return state
	}
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