import { Heading, Input } from '@chakra-ui/react';
import './App.css';
import MyCard from './MyCard';

function App() {
  return (
    <>
      <div className='header'>
        <Heading className='quiz'>Quiz</Heading>
        <Input placeholder='...search' width='300px' />
      </div>
      <div className='body'>
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </>
  );
}

export default App;
