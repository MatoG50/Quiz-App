import { Input } from '@chakra-ui/react';

interface Props {
  searchText: string;
  onSelectSubject: (searchText: string) => void;
}

const QuizFilter = ({ onSelectSubject, searchText }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onSelectSubject(value);
  };
  return (
    <>
      <Input
        placeholder='...search'
        width='300px'
        onChange={handleChange}
        value={searchText}
      />
    </>
  );
};

export default QuizFilter;
