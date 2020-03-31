import { css } from '@emotion/core';
import { DESIGN_TOKEN } from '../../../config/design_token';

export const THUMB = css`
  display: inline-block;
  width: 100%;
  max-width: 40rem;
  height: auto;
  flex-direction: column;

  text-decoration: none;
`;

export const THUMB_ICON = css`
  width: 100%;
  height: 30rem;
`;

export const THUMB_ICON_IMAGE = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const THUMB_DESCRIPTION = css`
  font-family: ${DESIGN_TOKEN.fonts.font_1.family};
  font-weight: ${DESIGN_TOKEN.fonts.font_1.weight.regular};
  font-size: 1rem;
  line-height: 1.6rem;
`;