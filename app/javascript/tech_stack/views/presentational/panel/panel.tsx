/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { STYLES} from './styles';

type Props = React.PropsWithChildren<{}>;

const Panel = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <div css={STYLES}>
      {children}
    </div>
  );
}

/** Renders a simple panel for visually grouping content together. */
const panelMemo = React.memo<Props>(Panel);

export { panelMemo as Panel };