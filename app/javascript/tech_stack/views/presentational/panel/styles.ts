import { css } from '@emotion/core';
import { DESIGN_TOKEN } from '../../../config/design_token';

export const STYLES = css`
  display: inline-block;
  padding: 2rem;
  border: thin solid ${DESIGN_TOKEN.colors.swatch_1[30]};
  box-shadow: 0rem 0rem 1rem ${DESIGN_TOKEN.colors.swatch_1[10]};
`;