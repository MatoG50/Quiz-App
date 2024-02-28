import { Heading } from '@chakra-ui/react';
import './App.css';
import MyCard from './MyCard';
import jsonData from '../src/assets/quizes.json';
import QuizFilter from './QuizFilter';
import { useState } from 'react';

function App() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const handleSearchChange = (value: string) => {
    setSelectedSubject(value);
  };
  const visibleSubject = jsonData.filter(subject =>
    subject.name.toLowerCase().includes(selectedSubject.trim().toLowerCase())
  );

  return (
    <>
      <div className='container'>
        <div className='header'>
          <Heading className='quiz'>Quiz</Heading>
          <QuizFilter
            searchText={selectedSubject}
            onSelectSubject={handleSearchChange}
          />
        </div>
        <div className='body'>
          <MyCard data={visibleSubject} />
        </div>
      </div>
    </>
  );
}

export default App;
