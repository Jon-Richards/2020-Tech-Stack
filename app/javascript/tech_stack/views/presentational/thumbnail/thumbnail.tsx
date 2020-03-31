/** @jsx jsx */

import * as React from 'react';
import { jsx } from '@emotion/core';
import { THUMB, THUMB_ICON, THUMB_ICON_IMAGE, THUMB_DESCRIPTION } from './styles';
import { Panel } from '../panel';

export type Props = React.PropsWithChildren<{
  id: string | number;
  href: string;
  icon: string;
  name: string;
  description: string;
  onClick: (id: Props['id']) => void;
}>;

const thumbnail = (props: Props): JSX.Element => {
  const { 
    id,
    href,
    icon,
    name,
    description,
    onClick
  } = props;
  
  return (
    <Panel>
      <a 
        css={THUMB}
        href={href}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          e.preventDefault();
          onClick(id);
        }}
      >
        <div css={THUMB_ICON}>
          <img src={icon} alt={name} css={THUMB_ICON_IMAGE} />
        </div>
        <div css={THUMB_DESCRIPTION}>
          {description}
        </div>
      </a>
    </Panel>
  );
}

const thumbnailMemo = React.memo<Props>(thumbnail);

export { thumbnailMemo as Thumbnail };