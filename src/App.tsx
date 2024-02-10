import './App.css';
import Card from './Card';

function App() {
  return (
    <>
      <div className='header'>
        <h1>Quizes</h1>
        <input placeholder='search...' />
      </div>
      <div className='cards'>
        <Card />
      </div>
    </>
  );
}

export default App;
