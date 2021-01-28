import React from 'react'
import "./FilmTypeItem.css"
import image2 from "../../logo.svg"
import image3 from "../../paul-walker.jpg"

function FilmTypeItem(props) {
    return (
        <a href="#">
            <div className="movie-item">
                <div className="item">
                    <img src={image3} />
                    <p>{props.name}</p>
                </div>
            </div>
        </a>

    )
}

export default FilmTypeItem
