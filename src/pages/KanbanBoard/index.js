import { Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";

import { Board } from "../../entities/";
import { useFetchColumnsHook } from "../../hooks";
import { Page } from "../../components";

const KanbanBoard = () => {
  const { boardId } = useParams();

  const { columns, loading, refetch } = useFetchColumnsHook(boardId);

  return (
    <Page>
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <Board boardId={boardId} columns={columns} columnsRefetch={refetch} />
      )}
    </Page>
  );
};

export default KanbanBoard;
