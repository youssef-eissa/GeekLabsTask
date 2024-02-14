import './App.css';
import Alerts from './components/Alerts';
import Filters from './components/Filters';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container-fluid app ">
      <div className="row">
        <div className="col-12 d-flex justify-content-between column-gap- p-0">
          <NavBar/>
          <Alerts />
          <Filters/>
        </div>
    </div>
    </div>
  );
}

export default App;
