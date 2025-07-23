import { useUrlManager } from "../hook/hook";
import AddUrl from "./AddLinks";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const UrlManager = () => {
  const {
    formUrl,
    formShortCode,
    setFormUrl,
    setFormShortCode,
    handleFormSubmit,
    isEditing,
    urls,
    handleDelete,
    handleEdit,
  } = useUrlManager();

  return (
    <div className="space-y-4">
      <AddUrl
        url={formUrl}
        shortCode={formShortCode}
        setUrl={setFormUrl}
        setShortCode={setFormShortCode}
        onSubmit={handleFormSubmit}
        isEditMode={isEditing}
      />

      <div className="space-y-2">
        {urls.map((url) => (
          <div key={url.shortCode} className="flex items-center gap-4">
            <span className="flex-1">{url.url}</span>
            <DeleteButton id={url.shortCode} onDelete={handleDelete} />
            <UpdateButton
              id={url.shortCode}
              currentUrl={url.url}
              onEdit={handleEdit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlManager;
