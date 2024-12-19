import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "過去 7 天" },
        { value: "30", label: "過去 30 天" },
        { value: "90", label: "過去 90 天" },
      ]}
    />
  );
}

export default DashboardFilter;
