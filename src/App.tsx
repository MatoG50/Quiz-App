import { Heading, Input } from '@chakra-ui/react';
import './App.css';
import MyCard from './MyCard';
import jsonData from '../src/assets/quizes.json';

function App() {
  return (
    <>
      <div className='header'>
        <Heading className='quiz'>Quiz</Heading>
        <Input placeholder='...search' width='300px' />
      </div>
      <div className='body'>
        <MyCard data={jsonData} />
      </div>
    </>
  );
}

export default App;
