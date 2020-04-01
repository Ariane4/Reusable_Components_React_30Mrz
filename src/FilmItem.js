import React from 'react';
import './FilmItem.css'
const FilmItem = (props) => {
    return (
        <article>
            <h1 className={props.isNew ? "redClass" : "greenClass"}>{props.filmName}</h1>
        </article>
    );
}

export default FilmItem;