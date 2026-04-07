import { useEffect } from 'react';

/**
 * Sets the document title dynamically.
 * @param {string} title - Page title (will be appended with " | Marketly")
 */
const useDocumentTitle = (title) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} | Marketly` : 'Marketly - Premium Digital Assets';
    return () => {
      document.title = prev;
    };
  }, [title]);
};

export default useDocumentTitle;
