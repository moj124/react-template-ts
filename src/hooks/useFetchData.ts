import { useState, useRef, useEffect } from "react";
import getApiResponse from "../utils/getApiResponse";
import QueryType from "../types/QueryType";

const initialQueryState = {
    isLoading: false,
    isError: false,
    response: null,
};

const useFetchData = (endPointParams: string) => {
    const [query, setQuery] = useState<QueryType>(initialQueryState);
    const hasMounted = useRef(false);

    useEffect(() => {
    const abortController = new AbortController();
    
    // prevent rerenders from strict mode
    if (!hasMounted.current) {
        hasMounted.current = true;
        return;
    }

    const fetchLocations = async () => {
        setQuery((prevState) => ({...prevState, isLoading: true, isError: false}));

        try {
        const requestConfig = {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
                'Username' : import.meta.env.VITE_USERNAME,
            },
            signal: abortController.signal,
        };

        const url = import.meta.env.VITE_BASE_URL + endPointParams;
        const response = await getApiResponse(url, requestConfig);
        
        setQuery({response, isLoading: false, isError: false});

        } catch (error) {
        if(error instanceof Error){
            if(error.name === 'AbortError') {
            console.log('Request was aborted');
            } else {
            setQuery((prevState) => ({...prevState, isLoading: false, isError: true}));
            console.error('Error fetching data:', error.message);
            }

        } else {
            console.error('An unexpected error occurred:', error);
            setQuery((prevState) => ({ ...prevState, isLoading: false, isError: true }));
        }
        }
    }

    fetchLocations();

    return () => {
        abortController.abort();
    }
    }, [endPointParams]);

    return query;
}
export default useFetchData;