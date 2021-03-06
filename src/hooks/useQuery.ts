import queryString from "query-string";
// hooks
import { useLocation } from "react-router-dom";

export default function useQuery() {
  return queryString.parse(useLocation().search);
}
