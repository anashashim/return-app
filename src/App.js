
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
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <div className='container'>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<OrderRequest/>}/>
            <Route exact path="/return-items" element={<ReturnItems/>}/>
            <Route exact path="/success" element={<ReturnSuccess/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
