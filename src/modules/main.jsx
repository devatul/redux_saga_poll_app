import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { initialState } from '../reducers/login';
import * as action from '../actions/actions';
import { Header } from '../components/header/header';

function mapStateToProps(state) {
  return {
    login: state.login,
    polling: state.polling,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export const view = connect(mapStateToProps, mapDispatchToProps)(Header);
const viewTodo = withRouter(view);
export default viewTodo;
