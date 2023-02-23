import { Themes } from './enums';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const DEFAULT_THEME = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes | null) || Themes.NORMAL;
