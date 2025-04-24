import { Container } from "semantic-ui-react";

const Page = ({ children, style, className }) => {
  return (
    <Container style={{ width: "75%", ...style }} className={className}>
      {children}
    </Container>
  );
};

export default Page;
