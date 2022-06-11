import 'styled-components';
import dark from './light';

declare module 'styled-components'{
    type ThemeType = typeof dark

    export interface DefaultTheme extends ThemeType{}
}