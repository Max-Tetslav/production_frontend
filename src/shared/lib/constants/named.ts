import { Themes } from './enums';
import { THEME_LOCALSTORAGE_KEY } from './localStorage';

export const DEFAULT_THEME = (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Themes | null) || Themes.NORMAL;
