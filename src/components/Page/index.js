import { Container } from "semantic-ui-react";

const Page = ({ children, style, className }) => {
  return (
    <Container style={style} className={className}>
      {children}
    </Container>
  );
};

export default Page;
