import {
  Card,
  Button as _Button,
  Container,
  Flex,
  Grid,
  Switch,
  Text,
  TextArea,
} from '@radix-ui/themes';
import Button from '@components/Button';

import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Container>
      <Card size="2" style={{ maxWidth: 400 }}>
        <Flex direction="column" gap="3">
          <Grid gap="1">
            <Text as="div" weight="bold" size="2" mb="1">
              Feedback
            </Text>
            <TextArea placeholder="Write your feedback…" />
          </Grid>
          <Flex asChild justify="between">
            <label>
              <Text color="gray" size="2">
                Attach screenshot?
              </Text>
              <Switch size="1" defaultChecked />
            </label>
          </Flex>
          <Grid columns="2" gap="2">
            <_Button variant="surface">Back</_Button>
            <_Button>Send</_Button>
          </Grid>
        </Flex>
      </Card>
      <Button>그냥 버튼이다 임마</Button>
    </Container>
  );
}

export default App;
