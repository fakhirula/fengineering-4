import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";

function Detail() {
    const params = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movies, setMovies] = useState([]);
    
    async function fetchRecom() {
        const URL = `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(URL);
        
        setMovies(response.data.results);
    }

    useEffect(() => {
        fetchRecom();
    }, [params.id]);

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" movies={movies} />
        </>
    );
}

export default Detail;