import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

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
    </TableOperations>
  );
}

export default CabinTableOperations;
