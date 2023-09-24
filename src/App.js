import DisplayList from './Components/DisplayList/DisplayLists.js';
import './App.css';
import AddHeader from './Components/AddHeader/AddHeader.js';

function App() {
  return (
    <>
    <h2>Todo List</h2>
    <div className='App'>
    <AddHeader/>
    <DisplayList/>
    </div>
    </>
  );
}

export default App;
