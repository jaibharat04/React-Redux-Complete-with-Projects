import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchDone = useSelector((store) => store.fetchStatus.fetchDone); // Only fetching `fetchDone`
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return; // Prevent re-fetching if fetch is already done

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStart());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items[0])); // Assuming `items` is an array
        dispatch(fetchStatusActions.markFetchDone());
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => {
        dispatch(fetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort(); // Cleanup on unmount or fetch abortion
    };
  }, [dispatch, fetchDone]); // Only re-run if `fetchDone` or `dispatch` changes

  return null;
};

export default FetchItems;
