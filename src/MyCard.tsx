import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

interface Subject {
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
        <Card maxW='sm' className='card' key={subject.id}>
          <CardBody>
            <Image src={subject.img} alt={subject.name} borderRadius='lg' />
            <Stack mt='3' spacing='3' className='stack'>
              <Heading size='md'>{subject.name}</Heading>
              <Text>{subject.questions.length} questions</Text>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default MyCard;
