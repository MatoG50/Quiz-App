import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export interface Subject {
  id: number;
  img: string;
  name: string;
  questions: Question[];
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}
interface Option {
  id: number;
  label: string;
  text: string;
  isCorrect: boolean;
}
interface Quiz {
  data: Subject[];
}

const MyCard: React.FC<Quiz> = ({ data }) => {
  return (
    <>
      {data.map(subject => (
        <Card
          // maxW='sm'
          className='card'
          key={subject.id}
          padding='0'
          borderRadius='lg'
        >
          <Link to={`/quiz/${subject.id}/question/1`}>
            <Image src={subject.img} alt={subject.name} />
            <CardBody>
              <Stack mt='3' spacing='3' className='stack'>
                <Heading size='md'>{subject.name}</Heading>
                <Text>{subject.questions.length} questions</Text>
              </Stack>
            </CardBody>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default MyCard;
