/** @jsx jsx */
import * as React from 'react';
import { Global, jsx } from '@emotion/core';
import { STYLES, MEYER_WEB_RESET } from './styles';
import { ROUTES } from '../../../config/routes';
import { DefaultLayout, ErrorLayout } from '../layouts';

/** Props required for rendering the Page component. */
export type Props = React.PropsWithChildren<{
  bootstrap: () => void;
  application_status: 'INITIALIZING' | 'LOADING' | 'READY';
  route_schema: string;
}>;

const page = (props: Props): JSX.Element => {
  const {
    bootstrap,
    application_status,
    route_schema,
    children
  } = props;

  if (application_status === 'INITIALIZING') bootstrap();

  return (
    <React.Fragment>
      <Global styles={MEYER_WEB_RESET} />
      <div css={STYLES}>
        {route_schema === ROUTES.home && (
          <DefaultLayout>
            Home
          </DefaultLayout>
        )}
        {route_schema === ROUTES.error && (
          <ErrorLayout
            error_code={404}
            error_title="Page not be found."
          >
            Looks like you've navigated to an invalid page.
          </ErrorLayout>
        )}
      </div>
    </React.Fragment>
  )
}

/** 
 * Renders the root element of the component tree, scaffolding the overall
 * page.
 */
const pageMemo = React.memo<Props>(page);

export { pageMemo as Page };