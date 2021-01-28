import React from 'react'
import "./Home.css"
import image1 from "../../logo.svg"
import FilmTypeItem from "./FilmTypeItem"

function Home() {

    const scifymovielist = [
        {
            id: "1",
            image: {image1},
            name: "Intesteller"
        },
        {
            id: "2",
            image: {image1},
            name: "Fast and Feurist"
        },
        {
            id: "3",
            image: {image1},
            name: "Harry Potter"
        },
        {
            id: "4",
            image: {image1},
            name: "The Meg"
        },
        {
            id: "5",
            image: {image1},
            name: "The Meg"
        },
        {
            id: "6",
            image: {image1},
            name: "The Meg"
        },
        {
            id: "7",
            image: {image1},
            name: "The Meg"
        }

    ];

    const scify_component = () => {
        return(
            scifymovielist.map(aFilm => {
                return(
                    <FilmTypeItem
                    image={aFilm.image}
                    name={aFilm.name} />
                )
            })
        )
    }

    return (
        <div className="home">
            
            <div className="hero-background">
                <div className="hero-text">
                    <h2>Best Movie Site Ever</h2>
                    <p>Search for the keywords to learn more about each warning.</p>
                    <div className="search-section">
                        <form action="#">
                            <input type="text" placeholder="Search Movie" />
                            <div className="search_icon"></div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="film-by-type">

                <div className="film-by-type-card">
                    <div className="left-side">
                        <h3>Sci-Fy</h3>
                    </div>
                    <div className="right-side">

                        {scify_component()}

                    </div>
                </div>

                <div className="film-by-type-card">
                    <div className="left-side">
                        <h3>Action</h3>
                    </div>
                    <div className="right-side">
                        {scify_component()}
                    </div>
                </div>

                <div className="film-by-type-card">
                    <div className="left-side">
                        <h3>Horror</h3>
                    </div>
                    <div className="right-side">
                        {scify_component()}
                    </div>
                </div>

                <div className="film-by-type-card">
                    <div className="left-side">
                        <h3>Horror</h3>
                    </div>
                    <div className="right-side">
                        {scify_component()}
                    </div>
                </div>

                <div className="film-by-type-card">
                    <div className="left-side">
                        <h3>Horror</h3>
                    </div>
                    <div className="right-side">
                        {scify_component()}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
