import { Container, withStyles } from "@material-ui/core";
import MuiButton from "mui-button";
import Section from "./Section";

const Button = withStyles({
  root: {
    margin: 8,
  },
})(MuiButton);

const App = () => (
  <Container maxWidth="sm">
    <Section title="Contained">
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
    </Section>
    <Section title="Text">
      <Button color="success" variant="text">
        Success
      </Button>
      <Button color="error" variant="text">
        Error
      </Button>
      <Button color="warning" variant="text">
        Warning
      </Button>
      <Button color="info" variant="text">
        Info
      </Button>
    </Section>
    <Section title="Outlined">
      <Button color="success" variant="outlined">
        Success
      </Button>
      <Button color="error" variant="outlined">
        Error
      </Button>
      <Button color="warning" variant="outlined">
        Warning
      </Button>
      <Button color="info" variant="outlined">
        Info
      </Button>
    </Section>
  </Container>
);

export default App;
