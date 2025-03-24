import React from "react";

const MovieCard = ({ movie: { id, title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <div className="movie-card" key={id}>
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "/no-poster.jpg"}
                alt={title}
            />
            <p>{title}</p>

            <div className="mt-4">
                <div className="rating flex items-center">
                    <img src="./Rating.svg" alt="Star Icon" />
                    <span>•</span>
                    <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
                    <span>•</span>

                    <p className="lang">{original_language.toUpperCase()}</p>

                    <span>•</span>
                    <p>{release_date ? release_date.slice(0, 4) : "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;