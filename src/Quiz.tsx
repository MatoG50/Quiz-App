import { Box, Heading, Progress, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import jsonData from '../src/assets/quizes.json';
import { useState } from 'react';

const Quiz = () => {
  const { id, questionId } = useParams();
  const [currQuestionIndex, setCurrQuestionIndex] = useState(
    Number(questionId)
  );
  const [score, setScore] = useState(0);

  const subject = jsonData.find(subject => subject.id === Number(id));
  if (!subject) return <div>Not Found</div>;

  const question = subject.questions[currQuestionIndex - 1];

  if (!question)
    return (
      <div>
        <Text>Your results</Text>
        <span className='span'>
          {score}/{subject.questions.length}
        </span>
        <br />
        <Link to='/'>Go Back</Link>
      </div>
    );

  const progress = (currQuestionIndex / subject.questions.length) * 100;

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
        <Text className='question' fontSize={{ base: '16px', md: '24px' }}>
          {question.text}
        </Text>
        {question.options.map(option => (
          <ul key={option.id}>
            <li
              className='qstndiv'
              onClick={() => {
                setCurrQuestionIndex(currQuestionIndex + 1);
                if (option.isCorrect) {
                  setScore(score + 1);
                }
              }}
            >
              <span className='left'>{option.label}</span>
              <p className='right'>{option.text}</p>
            </li>
          </ul>
        ))}{' '}
      </div>
    </>
  );
};

export default Quiz;
