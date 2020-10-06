import { useEffect, useState } from 'react';

const useRequestCameras = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch(error) {
                console.log(error);
                setError(error);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useRequestCameras;
