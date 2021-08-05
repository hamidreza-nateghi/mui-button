import { Box, Typography, withStyles } from "@material-ui/core";

const Title = withStyles({
  root: {
    margin: "8px 0px 16px",
  },
})(Typography);

const Section = ({ title, children }) => (
  <div>
    <Title variant="h4">{title} Buttons</Title>
    <Box display="flex" justifyContent="center" p={3} border={1} borderRadius={4} borderColor="grey.300">
      {children}
    </Box>
  </div>
);

export default Section;
