import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as action from '../actions/actions';
import { App } from './app';

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export const view = connect(mapStateToProps, mapDispatchToProps)(App);
const viewTodo = withRouter(view);
export default viewTodo;
