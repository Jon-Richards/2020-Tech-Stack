/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { Panel } from '../../../presentational/panel';
import { ERROR, ERROR_HEADING, ERROR_DESCRIPTION } from './styles';

export type Props = React.PropsWithChildren<{
  error_code: number;
  error_title: string;
}>;

const ErrorLayout = (props: Props): JSX.Element => {
  const {
    error_code,
    error_title,
    children
  } = props;

  return (
    <div css={ERROR}>
      <Panel>
        <h1 css={ERROR_HEADING}>
          {error_code}<br />
          <small>{error_title}</small>
        </h1>
        <div css={ERROR_DESCRIPTION}>
          {children}
        </div>
      </Panel>
    </div>
  );
}

const errorMemo = React.memo<Props>(ErrorLayout);

export { errorMemo as ErrorLayout };