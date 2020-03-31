import { connect } from 'react-redux';
import { Store } from '../../../store';
import { bootstrap } from '../../../action_creators/bootstrap';
import { Page, Props } from './page';

type StateProps = Pick<Props, 'application_status' | 'route_schema'>;
type DispatchProps = Pick<Props, 'bootstrap'>;

function mapApplicationStatus (
  status: Store['application']['status']
): StateProps['application_status'] {
  switch (status) {
    case 'initializing':
      return 'INITIALIZING';
    default:
      return 'READY';
  }
}

function mapStateToProps (state: Store): StateProps {
  return {
    application_status: mapApplicationStatus(state.application.status),
    route_schema: state.application.route.schema
  }
}

function mapDispatchToProps (): DispatchProps {
  return {
    bootstrap: () => bootstrap()
  }
}

export const PAGE_HOC = connect(mapStateToProps, mapDispatchToProps())(Page);