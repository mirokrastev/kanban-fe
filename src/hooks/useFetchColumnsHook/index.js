import {useState, useEffect, useCallback} from 'react';

import {columnsList} from "./sdk";

const useFetchColumns = boardId => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchColumns = useCallback(async () => {
      const columns = await columnsList(boardId);
      setColumns(columns);
      setLoading(false);
    }, [boardId]);

  useEffect(() => {
    fetchColumns();
  }, [fetchColumns]);

  return { columns, loading, refetch: fetchColumns };
};

export default useFetchColumns;
