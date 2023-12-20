const getMonth = (date: Date) => {
  return date.toLocaleString("default", { month: "short" });
};

export const formatPeriod = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : undefined;
  if (!end) return `${start.getFullYear()} - Present`;
  if (start.getFullYear() === end.getFullYear()) {
    return `${getMonth(start)} - ${getMonth(end)} ${end.getFullYear()}`;
  }
  return `${start.getFullYear()} - ${end.getFullYear()}`;
};
