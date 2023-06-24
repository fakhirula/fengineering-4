import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Button from '../ui/Button/Button';
import StyledDetailMovie from "./StyledDetailMovie";
import ENDPOINT from "../../utils/constants/endpoint";

function DetailMovie() {
    const [movie, setMovie] = useState("");
    const params = useParams();
    const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
    const idTrailer = movie && movie.videos.results[0]?.key;

    async function fetchDetailMovie(id) {
        const response = await axios(ENDPOINT.DETAIL(id));
        
        setMovie(response.data);
    }

    useEffect(() => {
        fetchDetailMovie(params.id);
    }, [params.id]);
    
    return (
        <StyledDetailMovie>
            <div className="hero__bgimage"></div>
            <div className="container">
            <div className="hero">
                <div className="hero__left">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button
                    as="a"
                    href={`https://youtube.com/watch?v=${idTrailer}`}
                    target="_blank"
                    variant="primary"
                    size="md"
                >
                    Watch
                </Button>
                </div>
                <div className="hero__right">
                <img
                    className="hero__image"
                    src={
                    movie.poster ||
                    `http://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    }
                    alt="{movie.title}"
                />
                </div>
            </div>
            </div>
        </StyledDetailMovie>
    );
}

export default DetailMovie;