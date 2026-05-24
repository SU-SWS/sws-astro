import * as styles from '@components/Container/Container.styles';

export type ContainerElementType = 'div' | 'section' | 'article' | 'main' | 'footer' | 'aside' | 'header' | 'nav' | 'form' | 'fieldset' | 'figtext-09em' | 'figure';

export type WidthType = keyof typeof styles.widths;

export type BgColorType = keyof typeof styles.bgColors;
