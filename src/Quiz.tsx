import { Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import jsonData from '../src/assets/quizes.json';

const Quiz = () => {
  const { id, questionId } = useParams();
  console.log(id);
  const subject = jsonData.find(subject => subject.id === Number(id));
  if (!subject) return <div>Not Found</div>;
  const question = subject.questions.find(
    question => question.id === Number(questionId)
  );
  if (!question) return <div>Not Found</div>;
  return (
    <>
      <div className='quiz-body'>
        <Heading>
          Question <span>{`${questionId}/${subject.questions.length}`}</span>
        </Heading>
        <Text fontSize='3xl'>{question.text}</Text>
        {question.options.map(option => (
          <ul key={option.id}>
            <li>
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
