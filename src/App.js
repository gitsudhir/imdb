import './App.css';
import ListContainer from './components/ListContainer'
import Add from './components/Add'
function App() {
  return (
    <div className="App">
      <header className="App-header">
	   <Add />
       <ListContainer />
      </header>
    </div>
  );
}

export default App;
