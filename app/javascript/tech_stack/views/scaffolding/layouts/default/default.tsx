/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { STYLES } from './styles';

type Props = React.PropsWithChildren<{}>;

const DefaultLayout = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <div css={STYLES}>
      {children}
    </div>
  )
}

/** Renders a versatile, generic layout for the page. */
const defaultLayoutMemo = React.memo<Props>(DefaultLayout);

export { defaultLayoutMemo as DefaultLayout };