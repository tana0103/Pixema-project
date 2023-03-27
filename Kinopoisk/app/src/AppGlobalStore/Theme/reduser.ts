import { ActionThemeType, THEME_DARK, THEME_LIGHT } from "./action"

type ThemeType = {
	className: string,
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