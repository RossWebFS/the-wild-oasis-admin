import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export const useCabins = () => {
  const [searchParams] = useSearchParams();

  const currentPage = +searchParams.get("page") || 1;

  const {
    data: { data: cabins = [], count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins", currentPage],
    queryFn: () => getCabins(currentPage),
  });

  return { cabins, isLoading, error, count };
};
