import * as React from 'react';
import NextLink from 'next/link';
import ccn from '@sindresorhus/class-names';

export type LinkProps = React.PropsWithChildren<{
  className?: string;
  href?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}>;

export const Link = ({
  className,
  href,
  style,
  children,
  onClick,
}: LinkProps) => (
  <>
    {href ? (
      <NextLink
        onClick={onClick}
        className={ccn('sbstr8:link', className)}
        href={href || '#'}
        style={style}
      >
        {children}
      </NextLink>
    ) : (
      <span className={ccn('sbstr8:link', className)} style={style}>
        {children}
      </span>
    )}
  </>
);

export default Link;
