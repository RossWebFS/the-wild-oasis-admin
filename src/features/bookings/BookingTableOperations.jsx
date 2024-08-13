import {
  filterBookingOperations,
  sortBookingOperations,
} from "../../data/constants";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

const BookingTableOperations = () => {
  return (
    <TableOperations>
      <Filter filterField="status" options={filterBookingOperations} />

      <SortBy sortField="sortBy" options={sortBookingOperations} />
    </TableOperations>
  );
};

export default BookingTableOperations;
