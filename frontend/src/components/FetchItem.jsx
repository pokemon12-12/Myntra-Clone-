import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchingStatusAction } from "../store/fetchStatus";
const FetchItems = () => {
  const { fetchDone } = useSelector((store) => store.fetchDataStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingStatusAction.markFetchingStarted());
    fetch("https://myntra-clone-3ren.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchingStatusAction.markFetched());
        dispatch(itemsAction.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchDone, dispatch]);

  return <></>;
};

export default FetchItems;
