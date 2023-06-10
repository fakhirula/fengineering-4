import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function Detail() {
    const params = useParams();
    const [movies, setMovies] = useState([]);
    
    async function fetchRecom(id) {
        const response = await axios(ENDPOINT.RECOMMEDATION(id));
        
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchRecom(params.id);
    }, [params.id]);

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" movies={movies} />
        </>
    );
}

export default Detail;