import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "入住" },
          { value: "checked-out", label: "退房" },
          { value: "unconfirmed", label: "未確認" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "按日期排序（最新在前）" },
          { value: "startDate-asc", label: "按日期排序（最早在前）" },
          {
            value: "totalPrice-desc",
            label: "按金額排序（從高到低）",
          },
          { value: "totalPrice-asc", label: "按金額排序（從低到高）" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
