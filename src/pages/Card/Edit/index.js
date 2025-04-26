import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Form, Header, Segment} from "semantic-ui-react";
import {toast} from "react-toastify";

import {LoadingPage, Page} from "../../../components";
import {useFetchCardHook} from "../../../hooks";
import {cardEdit} from "./sdk";

const CardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { card, setCard, loading } = useFetchCardHook(id);
  const [saving, setSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const handleSubmit = async () => {
    setSaving(true);
    const response = await cardEdit(id, card);

    if (response.ok) {
      toast.success("Card updated successfully!");
      navigate(`/cards/${id}`);
    } else {
      const error = await response.json();
      toast.error(error);
    }
    setSaving(false);
  };

  if (loading) {
    return <LoadingPage />
  }

  return (
    <Page style={{ width: "25%" }}>
      <Header as="h1">Edit Card</Header>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Title"
            name="title"
            value={card.title}
            onChange={handleInputChange}
            required
          />
          <Form.TextArea
            label="Description"
            name="description"
            value={card.description}
            onChange={handleInputChange}
          />
          <Button primary type="submit" loading={saving} disabled={saving}>
            Save
          </Button>
          <Button onClick={() => navigate(`/cards/${id}`)} disabled={saving}>
            Cancel
          </Button>
        </Form>
      </Segment>
    </Page>
  );
};

export default CardEdit;
