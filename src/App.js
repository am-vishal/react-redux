import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from 'components/Homepage';
import Pincode from 'components/Index';
import Popup from 'components/Popup';
import ReduxTest from 'components/ReduxTest/ReduxTest';
import Context from 'components/useContext/Parent';
import Callback from 'components/useCallback/ParentComponent';
import MemoComp from 'components/useMemo/MemoComp';
function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route path="/redux" component={ReduxTest} />
      <Route path="/pincode" component={Pincode} />
      <Route path="/context" component={Context} />
      <Route path="/callback" component={Callback} />
      <Route path="/memo" component={MemoComp} />
      <Route path="/popup" component={Popup} />
    </Router>
  );
}

export default App;
