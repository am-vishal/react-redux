import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from 'components/Homepage';
import Autofill from 'components/Autofill/Index';
import Popup from 'components/Autofill/Popup';
import Redux from 'components/Redux/components/App';
import Context from 'components/useContext/Parent';
import Callback from 'components/useCallback/ParentComponent';
import MemoComp from 'components/useMemo/MemoComp';
import LocalStorage from 'components/LocalStorage/LocalStorage';
import RefAndLayoutEffect from 'components/useRef&useLayoutEffect/RefAndLayoutEffect';
import UseState from 'components/useState/UseState';
import UseEffect from 'components/useEffect/UseEffect';
import UseReducer from 'components/useReducer/useReducer';
import useContextWithReducer from 'components/useContextWithReducer/ParentComp';
import useContextWithReducer2 from 'components/useContextWithReducer2/Parent';

import {connect} from 'react-redux';
// import { SimpleAction } from './components/ReduxTest/action/SimpleAction';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/autofill" component={Autofill} />
      <Route path="/state" component={UseState} />
      <Route path="/effect" component={UseEffect} />
      <Route path="/reducer" component={UseReducer} />
      <Route path="/context" component={Context} />
      <Route path="/callback" component={Callback} />
      <Route path="/memo" component={MemoComp} />
      <Route path="/popup" component={Popup} />
      <Route path="/localstorage" component={LocalStorage} />
      <Route path="/ref" component={RefAndLayoutEffect} />
      <Route path="/redux" component={Redux} />
      <Route path="/contextwithreducer" component={useContextWithReducer} />
      <Route path="/contextwithreducer2" component={useContextWithReducer2} />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  // SimpleAction: () => dispatch(SimpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
