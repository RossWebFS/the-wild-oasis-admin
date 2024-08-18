import Filter from "../../ui/Filter";
import { filterDashboardOptions } from "../../data/constants";

const DashboardFilter = () => {
  return <Filter filterField="last" options={filterDashboardOptions} />;
};

export default DashboardFilter;
