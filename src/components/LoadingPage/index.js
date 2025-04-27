import { Header, Loader } from "semantic-ui-react";
import Page from "../../components/Page";

const LoadingPage = ({ title }) => {
  return (
    <Page>
      {title && <Header as="h1">{title}</Header>}
      <Loader active inline="centered" />
    </Page>
  );
};

export default LoadingPage;
