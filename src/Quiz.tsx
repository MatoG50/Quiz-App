import { Heading, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import jsonData from '../src/assets/quizes.json';
import { useState } from 'react';

const Quiz = () => {
  const { id, questionId } = useParams();
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const subject = jsonData.find(subject => subject.id === Number(id));
  if (!subject) return <div>Not Found</div>;

  const question = subject.questions[currQuestionIndex];

  if (!question)
    return (
      <div>
        score{' '}
        <span>
          {score}/{subject.questions.length}
        </span>
        <Link to='/'>Home</Link>
      </div>
    );

  // const handleAnswerClick = isCorrect => {
  //   setCurrQuestionIndex(currQuestionIndex + 1);
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }
  // };

  return (
    <>
      <div className='quiz-body'>
        <Heading>
          Question{' '}
          <span>{`${currQuestionIndex + 1}/${subject.questions.length}`}</span>
        </Heading>
        <Text fontSize='3xl'>{question.text}</Text>
        {question.options.map(option => (
          <ul key={option.id}>
            <li
              onClick={() => {
                setCurrQuestionIndex(currQuestionIndex + 1);
                if (option.isCorrect) {
                  setScore(score + 1);
                }
              }}
            >
              <span>{option.label}</span>
              <p>{option.text}</p>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Quiz;
