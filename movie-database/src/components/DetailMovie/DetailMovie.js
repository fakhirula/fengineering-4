import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Button from '../ui/Button/Button';
import StyledDetailMovie from "./StyledDetailMovie";

function DetailMovie() {
    const [movie, setMovie] = useState("");
    const API_KEY = process.env.REACT_APP_API_KEY;
    const params = useParams();
    const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
    const idTrailer = movie && movie.videos.results[0]?.key;

    async function fetchDetailMovie() {
        const URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&append_to_response=videos`;
        const response = await axios(URL);
        setMovie(response.data);
    }

    useEffect(() => {
        fetchDetailMovie();
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