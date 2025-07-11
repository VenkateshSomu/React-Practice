import { useEffect } from "react";

function useDocTitle(count) {
  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  }, [count]);
}
export default useDocTitle;
