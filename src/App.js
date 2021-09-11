import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from 'components/Homepage';
import Autofill from 'components/Autofill/Index';
import Popup from 'components/Autofill/Popup';
import ReduxTest from 'components/ReduxTest/ReduxTest';
import Context from 'components/useContext/Parent';
import Callback from 'components/useCallback/ParentComponent';
import MemoComp from 'components/useMemo/MemoComp';
import LocalStorage from 'components/LocalStorage/LocalStorage';
import RefAndLayoutEffect from 'components/useRef&useLayoutEffect/RefAndLayoutEffect';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/redux" component={ReduxTest} />
      <Route path="/autofill" component={Autofill} />
      <Route path="/context" component={Context} />
      <Route path="/callback" component={Callback} />
      <Route path="/memo" component={MemoComp} />
      <Route path="/popup" component={Popup} />
      <Route path="/localstorage" component={LocalStorage} />
      <Route path="/ref" component={RefAndLayoutEffect} />
    </Router>
  );
}

export default App;
