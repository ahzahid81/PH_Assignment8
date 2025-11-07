import { useState, useEffect } from "react";

export default function useLocalIds() {
  const [ids, setIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ids")) || [];
    } catch {
      return [];
    }
  });

  // whenever ids state changes, save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("ids", JSON.stringify(ids));
    } catch (e) {
      console.error("localStorage set error:", e);
    }
    // dispatch a custom event so other components in same tab can listen
    window.dispatchEvent(new Event("ids-changed"));
  }, [ids]);

  // listen for the custom 'ids-changed' (same tab) and 'storage' (other tabs)
  useEffect(() => {
    const reloadFromStorage = () => {
      try {
        const raw = localStorage.getItem("ids");
        const parsed = raw ? JSON.parse(raw) : [];
        // update state only if different (avoid infinite loops)
        setIds(prev => {
          const prevStr = JSON.stringify(prev || []);
          const nextStr = JSON.stringify(parsed || []);
          return prevStr === nextStr ? prev : parsed;
        });
      } catch (e) {
        console.error("reloadFromStorage error:", e);
      }
    };

    // custom event for same-tab updates
    window.addEventListener("ids-changed", reloadFromStorage);
    // browser storage event for other tabs/windows
    window.addEventListener("storage", (e) => {
      if (e.key === "ids") reloadFromStorage();
    });

    return () => {
      window.removeEventListener("ids-changed", reloadFromStorage);
      window.removeEventListener("storage", reloadFromStorage);
    };
  }, []);

  // API functions (ensure numeric IDs for consistency)
  const addId = (id) => {
    const idNum = Number(id);
    setIds(prev => (prev.includes(idNum) ? prev : [...prev, idNum]));
  };

  const removeId = (id) => {
    const idNum = Number(id);
    setIds(prev => prev.filter(x => x !== idNum));
  };

  const getAllIds = () => ids;
  const hasId = (id) => ids.includes(Number(id));

  return { ids, addId, removeId, getAllIds, hasId };
}
