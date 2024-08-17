// Global
export const PAGE_SIZE = 10;

// Cabins
export const filterCabinOptions = [
  { label: "All", value: "all" },
  { label: "No discount", value: "no-discount" },
  { label: "With discount", value: "with-discount" },
];

export const sortCabinOptions = [
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

// Bookings
export const filterBookingOperations = [
  { value: "all", label: "All" },
  { value: "checked-out", label: "Checked out" },
  { value: "checked-in", label: "Checked in" },
  { value: "unconfirmed", label: "Unconfirmed" },
];

export const sortBookingOperations = [
  { value: "startDate-desc", label: "Sort by date (recent first)" },
  { value: "startDate-asc", label: "Sort by date (earlier first)" },
  {
    value: "totalPrice-desc",
    label: "Sort by amount (high first)",
  },
  { value: "totalPrice-asc", label: "Sort by amount (low first)" },
];

// Dashboard
export const filterDashboardOptions = [
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
];
