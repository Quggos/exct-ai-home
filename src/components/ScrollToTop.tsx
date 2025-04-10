import { useEffect, useCallback } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const SCROLL_STORAGE_KEY = 'scroll_positions';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // Load saved scroll positions from localStorage
  const getSavedScrollPositions = useCallback(() => {
    try {
      const saved = localStorage.getItem(SCROLL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  }, []);

  // Save scroll positions to localStorage
  const saveScrollPosition = useCallback((path: string, position: number) => {
    try {
      const positions = getSavedScrollPositions();
      positions[path] = position;
      localStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positions));
    } catch (error) {
      console.error('Failed to save scroll position:', error);
    }
  }, [getSavedScrollPositions]);

  // Handle scroll position when component unmounts or route changes
  useEffect(() => {
    const handleBeforeUnload = () => {
      saveScrollPosition(pathname, window.scrollY);
    };

    // Save scroll position before page unload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup function to save scroll position when navigating away
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      saveScrollPosition(pathname, window.scrollY);
    };
  }, [pathname, saveScrollPosition]);

  // Handle scroll restoration
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const positions = getSavedScrollPositions();
      
      // For POP navigation (browser back/forward), restore position
      if (navigationType === 'POP' && positions[pathname]) {
        window.scrollTo({
          top: positions[pathname],
          left: 0,
          behavior: 'instant'
        });
      } 
      // For PUSH/REPLACE navigation (new page/link click), scroll to top
      else if (navigationType !== 'POP') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      }
    }, 100); // Reduced delay for better responsiveness

    return () => clearTimeout(timeoutId);
  }, [pathname, navigationType, getSavedScrollPositions]);

  return null;
}
