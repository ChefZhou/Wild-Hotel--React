import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "所有房間" },
          { value: "no-discount", label: "原價" },
          { value: "with-discount", label: "包含折扣" },
        ]}
      />
      <SortBy
        options={[
          { value: "regularPrice-desc", label: "價格高到低" },
          { value: "regularPrice-asc", label: "價格低到高" },
          { value: "maxCapacity-desc", label: "最多人數到最少人數" },
          { value: "maxCapacity-asc", label: "最少人數到最多人數" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
