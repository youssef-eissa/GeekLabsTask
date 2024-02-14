import FiltersButton from './AntdComponents/FiltersMobile';
import './App.css';
import Alerts from './components/Alerts';
import Filters from './components/Filters';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container-fluid app ">
      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-md-row flex-column pb- pb-md-0 p-0">
          <NavBar/>
          <Alerts />
          <Filters />
          <FiltersButton/>
        </div>
    </div>
    </div>
  );
}

export default App;
