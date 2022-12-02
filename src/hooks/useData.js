import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom';


const useData = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const url = `http://localhost:3100/posts`;

    const fetchData = async () => {
        const { data } = await axios.get(url)
            .finally(() => setIsLoading(false));
        setPosts(data);
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])



    return { posts, isLoading };
}

export default useData;