
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import OrderRequest from './components/OrderRequest/OrderRequest';
import ReturnItems from './components/ReturnItems/ReturnItems';
import ReturnSuccess from './components/ReturnSuccess/ReturnSuccess';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OrderRequest/>}/>
        <Route exact path="/return-items" element={<ReturnItems/>}/>
        <Route exact path="/sucsess" element={<ReturnSuccess/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
