import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  function handleConfirmClick() {}

  return (
    <StyledConfirmDelete>
      <Heading type="h3">Delete {resourceName}</Heading>
      <p>您確定要永久刪除這個 {resourceName} 嗎？此操作無法撤銷。</p>

      <div>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          刪除
        </Button>
        <Button
          variation="secondary"
          disablee={disabled}
          onClick={onCloseModal}
        >
          取消
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
