import {useNavigate, useParams} from "react-router-dom";
import {Button, Header, Loader, Segment} from "semantic-ui-react";

import {Page} from "../../../components";
import {useFetchCardHook} from "../../../hooks";

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { card, loading } = useFetchCardHook(id);

  if (loading) {
    return (
      <Page>
        <Loader active inline="centered" />
      </Page>
    );
  }

  return (
    <Page style={{ width: "25%" }}>
      <Header as="h1" style={{ wordWrap: "break-word" }}>{card.name}</Header>
      <Segment>
        <p>
          <strong>Description:</strong> {card.description || "N/A"}
        </p>
        <Button primary onClick={() => navigate(`/cards/${id}/edit`)}>
          Edit
        </Button>
      </Segment>
    </Page>
  )
};

export default CardDetail;
