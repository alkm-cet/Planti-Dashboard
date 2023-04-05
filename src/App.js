import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Midbar from './components/Midbar';
import BottomBar from './components/BottomBar';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="leftmaincontainer">
        <Topbar />
        <Midbar/>
        <BottomBar/>
      </div>

    </div>
  );
}

export default App;
