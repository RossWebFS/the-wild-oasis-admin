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

export const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 1,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

export const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];
