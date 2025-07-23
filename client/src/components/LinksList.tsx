import { useEffect, useState } from "react";
import { getUrls } from "../api/endpoints/links";
import type { UrlProps } from "../types/types";
import DeleteButton from "./DeleteButton";

const UrlList = () => {
  const [urls, setUrls] = useState<UrlProps[]>([]);

  useEffect(() => {
    getUrls()
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setUrls(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching Urls", error);
      });
  }, []);

  const noRefreshNeeded = (shortCode: string) => {
    setUrls((prev) => prev.filter((url) => url.shortCode !== shortCode));
  };

  return (
    <div>
      {urls.map((url, index) => (
        <div key={index}>
          {url.url}
          <DeleteButton id={url.shortCode} onDelete={noRefreshNeeded} />
        </div>
      ))}
    </div>
  );
};

export default UrlList;
