import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { cardDetail } from "./sdk";

const useFetchCardHook = (id) => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [fetchCard]);

  return { card, setCard, loading, refetch: fetchCard };
};

export default useFetchCardHook;
