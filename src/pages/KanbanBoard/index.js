import { useParams } from "react-router-dom";

import { Board } from "../../entities/";
import { useFetchColumnsHook } from "../../hooks";
import { Page, LoadingPage } from "../../components";
import { useBoard } from "../../contexts/BoardContext";

const KanbanBoard = () => {
  const { id } = useParams();

  const { columns, loading, refetch } = useFetchColumnsHook(id);
  const { setBoardId } = useBoard();

  setBoardId(id);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Page>
      <Board boardId={id} columns={columns} columnsRefetch={refetch} />
    </Page>
  );
};

export default KanbanBoard;
