import type { UpdateButtonProps } from "../types/types";

const UpdateButton = ({ id, currentUrl, onEdit }: UpdateButtonProps) => {
  return <button onClick={() => onEdit(id, currentUrl)}>Edit</button>;
};

export default UpdateButton;
