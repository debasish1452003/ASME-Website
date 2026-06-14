import { useEffect, useState } from "react";
import { fallbackContent, fetchContent } from "../services/contentApi";
import { useImagePreloader } from "./useImagePreloader";

const EMPTY_URLS = [];

export function useSiteContent({ preloadImages = false, extraImageUrls = EMPTY_URLS } = {}) {
  const [content, setContent] = useState(fallbackContent);
  const [loading, setLoading] = useState(false);
  const imageState = useImagePreloader(preloadImages ? content : null, extraImageUrls);

  useEffect(() => {
    let mounted = true;

    fetchContent().then((nextContent) => {
      if (!mounted) return;
      setContent(nextContent);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return {
    content,
    loading: loading || (preloadImages && !imageState.loaded),
    contentLoading: loading,
    imagesLoading: preloadImages && !imageState.loaded,
    imageProgress: imageState,
  };
}
