import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { filterCabinOptions, sortCabinOptions } from "../../data/constants";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterCabinOptions} />

      <SortBy sortField="sortBy" options={sortCabinOptions} />
    </TableOperations>
  );
};

export default CabinTableOperations;
