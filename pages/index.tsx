import Button from '../shared/Button';
import Flex from '../shared/Flex';

export default function Home() {
  return (
    <Flex flexDirection="column">
      Hello
      <Button variant="outlined" color="primary">
        click me
      </Button>
    </Flex>
  );
}
