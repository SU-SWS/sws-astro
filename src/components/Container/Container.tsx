import { cnb } from 'cnbuilder';
import {
  paddingTops,
  paddingBottoms,
  marginTops,
  marginBottoms,
  type MarginType,
  type PaddingType,
} from '@utilities/datasource';
import * as styles from '@components/Container/Container.styles';
import * as types from '@components/Container/Container.types';

export type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: types.ContainerElementType;
  width?: types.WidthType;
  pt?: PaddingType;
  pb?: PaddingType;
  mt?: MarginType;
  mb?: MarginType;
  bgColor?: types.BgColorType;
  style?: React.CSSProperties;
};

export const Container = ({
  as: AsComponent = 'div',
  width = 'site',
  pt,
  pb,
  mt,
  mb,
  bgColor,
  style,
  className,
  children,
  ...props
}: ContainerProps) => (
  <AsComponent
    {...props}
    style={style}
    className={cnb(
      bgColor ? styles.bgColors[bgColor] : '',
      pt ? paddingTops[pt] : '',
      pb ? paddingBottoms[pb] : '',
      mt ? marginTops[mt] : '',
      mb ? marginBottoms[mb] : '',
      width ? styles.widths[width] : '',
      className,
    )}
  >
    {children}
  </AsComponent>
);
