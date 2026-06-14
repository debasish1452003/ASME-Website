import { useEffect, useMemo, useState } from "react";

const IMAGE_KEYS = new Set(["img", "url", "cover", "src"]);

function collectImageUrls(value, urls = new Set()) {
  if (!value) return urls;

  if (Array.isArray(value)) {
    value.forEach((item) => collectImageUrls(item, urls));
    return urls;
  }

  if (typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => {
      if (IMAGE_KEYS.has(key) && typeof item === "string" && /^https?:\/\//.test(item.trim())) {
        urls.add(item.trim());
      } else {
        collectImageUrls(item, urls);
      }
    });
  }

  return urls;
}

function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    const finish = () => resolve(url);
    const timeout = setTimeout(finish, 4500);

    image.onload = () => {
      clearTimeout(timeout);
      finish();
    };
    image.onerror = () => {
      clearTimeout(timeout);
      finish();
    };
    image.src = url;
  });
}

export function getImageUrls(value) {
  return Array.from(collectImageUrls(value));
}

export function useImagePreloader(source, extraUrls = []) {
  const urls = useMemo(() => {
    const collected = getImageUrls(source);
    return Array.from(new Set([...collected, ...extraUrls.filter(Boolean)]));
  }, [source, extraUrls]);

  const [state, setState] = useState({ loaded: urls.length === 0, total: urls.length, completed: 0 });

  useEffect(() => {
    let cancelled = false;

    if (urls.length === 0) {
      setState({ loaded: true, total: 0, completed: 0 });
      return () => {
        cancelled = true;
      };
    }

    setState({ loaded: false, total: urls.length, completed: 0 });

    Promise.all(
      urls.map((url) =>
        preloadImage(url).then(() => {
          if (!cancelled) {
            setState((current) => ({ ...current, completed: Math.min(current.completed + 1, urls.length) }));
          }
        })
      )
    ).then(() => {
      if (!cancelled) {
        setState({ loaded: true, total: urls.length, completed: urls.length });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [urls]);

  return state;
}
