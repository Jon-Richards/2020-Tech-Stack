import { css } from '@emotion/core';
import { DESIGN_TOKEN } from '../../../../config/design_token';

export const ERROR = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const ERROR_HEADING = css`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 5rem;
  font-family: ${DESIGN_TOKEN.fonts.font_1.family};
  font-weight: ${DESIGN_TOKEN.fonts.font_1.weight.light};
  color: ${DESIGN_TOKEN.colors.swatch_1[100]};

  small {
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    border-bottom: thin solid ${DESIGN_TOKEN.colors.swatch_1[20]};
    font-size: 1rem;
    font-weight: ${DESIGN_TOKEN.fonts.font_1.weight.semi_bold};
  }
`;

export const ERROR_DESCRIPTION = css`
  text-align: left;
  font-size: 1rem;
  font-family: ${DESIGN_TOKEN.fonts.font_2.family};
  color: ${DESIGN_TOKEN.colors.swatch_1[100]};
`;