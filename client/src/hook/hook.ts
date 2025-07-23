import { useEffect, useState } from "react";
import { getUrls, postUrl, updateUrl } from "../api/endpoints/links";
import type { UrlProps } from "../types/types";

export const useUrlManager = () => {
    const [urls, setUrls] = useState<UrlProps[]>([]);
    const [formUrl, setFormUrl] = useState("");
    const [formShortCode, setFormShortCode] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        getUrls()
            .then((res) => {
                if (Array.isArray(res.data.data)) setUrls(res.data.data);
            })
            .catch((err) => console.error("Failed to fetch URLs:", err));
    }, []);

    const resetForm = () => {
        setFormUrl("");
        setFormShortCode("");
        setIsEditing(false);
    };

    const handleFormSubmit = async () => {
        try {
            if (isEditing) {
                const res = await updateUrl(formShortCode, { url: formUrl });
                const updated = res.data.data;

                setUrls((prev) =>
                    prev.map((u) => (u.shortCode === updated.shortCode ? updated : u))
                );
            } else {
                const res = await postUrl({ url: formUrl, shortCode: formShortCode });
                setUrls((prev) => [...prev, res.data.data]);
            }
            resetForm();
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };

    const handleDelete = (shortCode: string) => {
        setUrls((prev) => prev.filter((url) => url.shortCode !== shortCode));
    };

    const handleEdit = (id: string, currentUrl: string) => {
        setFormShortCode(id);
        setFormUrl(currentUrl);
        setIsEditing(true);
    };

    return {
        urls,
        formUrl,
        formShortCode,
        isEditing,
        setFormUrl,
        setFormShortCode,
        handleFormSubmit,
        handleEdit,
        handleDelete,
    }
}