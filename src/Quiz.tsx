import { Box, Heading, Progress, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import jsonData from '../src/assets/quizes.json';
import { useState } from 'react';
import { Option } from './MyCard';

const Quiz = () => {
  const { id } = useParams();
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const subject = jsonData.find(subject => subject.id === Number(id));
  if (!subject) return <div>Not Found</div>;

  const question = subject.questions[currQuestionIndex];
  const progress = (currQuestionIndex / subject.questions.length) * 100;

  const handleAnswer = (option: Option) => {
    if (currQuestionIndex < subject.questions.length) {
      setCurrQuestionIndex(currQuestionIndex + 1);
      if (option.isCorrect) {
        setScore(score + 1);
      }

      if (currQuestionIndex + 1 === subject.questions.length) {
        setQuizCompleted(true);
      }
    }
  };

  return (
    <>
      <div className='quiz-body'>
        <Heading className='heading'>
          Question{' '}
          <span>{`${currQuestionIndex}/${subject.questions.length}`}</span>
        </Heading>
        <Box width='90%' mb={4}>
          <Progress
            height='32px'
            bgColor='orange.100'
            value={progress}
            colorScheme='orange'
          />
        </Box>

        {quizCompleted ? (
          <div>
            <Text>Your results</Text>
            <span className='span'>
              {score}/{subject.questions.length}
            </span>
            <br />
            <Link to='/'>Go Back</Link>
          </div>
        ) : (
          <>
            <Text className='question' fontSize={{ base: '16px', md: '24px' }}>
              {question.text}
            </Text>
            {question.options.map(option => (
              <ul key={option.id}>
                <li className='qstndiv' onClick={() => handleAnswer(option)}>
                  <span className='left'>{option.label}</span>
                  <p className='right'>{option.text}</p>
                </li>
              </ul>
            ))}{' '}
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
