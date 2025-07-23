import type { FormEvent } from "react";

type Props = {
  url: string;
  shortCode: string;
  setUrl: (url: string) => void;
  setShortCode: (shortCode: string) => void;
  onSubmit: () => void;
  isEditMode: boolean;
};

const AddUrl = ({
  url,
  shortCode,
  setUrl,
  setShortCode,
  onSubmit,
  isEditMode,
}: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        placeholder="URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        value={shortCode}
        placeholder="Short Code"
        onChange={(e) => setShortCode(e.target.value)}
        disabled={isEditMode}
      />
      <button type="submit">{isEditMode ? "Update" : "Create"}</button>
    </form>
  );
};

export default AddUrl;
