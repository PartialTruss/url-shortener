export interface UrlProps {
    url: string;
    shortCode: string;
}
export interface DeleteButtonProps {
    id: string;
    onDelete: (id: string) => void;
}

export interface UpdateButtonProps {
    id: string;
    currentUrl: string;
    onEdit: (id: string, currentUrl: string) => void;
}
