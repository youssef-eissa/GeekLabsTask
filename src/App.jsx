import './App.css';
import Alerts from './components/Alerts';
import Filters from './components/Filters';

function App() {
  return (
    <div className="container-fluid app ">
      <div className="row">
        <div className="col-12 d-flex justify-content-end column-gap-3">
          <Alerts />
          <Filters/>
        </div>
    </div>
    </div>
  );
}

export default App;
