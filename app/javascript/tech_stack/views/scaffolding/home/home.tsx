/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';

type Tool = {
  id: string;
  name: string;
  description: string;
  icon: string;
}

type Props = React.PropsWithChildren<{
  tools: Tool[];
}>

const home = (props: Props): JSX.Element => {
  const {
    tools
  } = props;

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};