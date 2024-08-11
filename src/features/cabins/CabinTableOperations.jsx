import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const filterCabinOptions = [
  { label: "All", value: "all" },
  { label: "No discount", value: "no-discount" },
  { label: "With discount", value: "with-discount" },
];

const sortCabinOptions = [
  {
    label: "Sort by name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Sort by name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Sort by price (low first)",
    value: "regularPrice-asc",
  },
  {
    label: "Sort by price (high first)",
    value: "regularPrice-desc",
  },
  {
    label: "Sort by capacity (low first)",
    value: "maxCapacity-asc",
  },
  {
    label: "Sort by capacity (high first)",
    value: "maxCapacity-desc",
  },
];

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterCabinOptions} />

      <SortBy sortField="sortBy" options={sortCabinOptions} />
    </TableOperations>
  );
};

export default CabinTableOperations;
