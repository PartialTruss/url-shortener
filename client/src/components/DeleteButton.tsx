import { deleteUrl } from "../api/endpoints/links";
import type { DeleteButtonProps } from "../types/types";

const DeleteButton = ({ id, onDelete }: DeleteButtonProps) => {
  const handleDelete = async () => {
    try {
      await deleteUrl(id);
      onDelete(id);
      console.log("Deleted successfully");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error deleting url", error);
      }
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
