import {useCallback, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Header, Loader, Segment} from "semantic-ui-react";
import {toast} from "react-toastify";

import {cardDetail} from "./sdk";
import {Page} from "../../../components";

const CardDetail = () => {
  const { id } = useParams();
   const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState({});

  const fetchCard = useCallback(async () => {
    const response = await cardDetail(id);

    if (response.ok) {
      const data = await response.json();
      setCard(data);
    } else {
      const error = await response.json();
      toast.error(error);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchCard();
  }, [id, fetchCard])

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
