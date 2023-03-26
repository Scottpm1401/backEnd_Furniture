export type DataPoint = {
  month: number;
  revenue: number;
};

export type RevenuePerMonth = {
  year: number;
} & DataPoint;

export type Revenue = {
  year: number;
  data: DataPoint[];
};
