import { useEffect, useState } from "react";

export default function useLocalIds(){
    const [ids, setIds] = useState(JSON.parse(localStorage.getItem('ids')) || [])

    useEffect(() => {
        JSON.stringify(localStorage.setItem('ids', JSON.stringify(ids)))
    }, [ids])

    const addId = (id) => {
        setIds((prev) => prev.includes(id)? prev: [...prev, id])
    }

    const removeId = (id) => {
        setIds((prev) => prev.filter((x) => x!==id))
    }


    const hasId = (id) => ids.includes(id);

    return {addId, removeId, ids, hasId};
}