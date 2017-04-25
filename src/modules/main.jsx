import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as action from '../actions/actions';
import { Header } from '../components/header/header';

function mapStateToProps(state) {
  return {
    loginabc: state.login.toJS(),
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export const view = connect(mapStateToProps, mapDispatchToProps)(Header);
const viewTodo = withRouter(view);
export default viewTodo;
