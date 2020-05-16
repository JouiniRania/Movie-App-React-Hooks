import React, { useState, useEffect } from "react";
import MovieList from "./components/movie-list";
import MovieCard from "./components/movie-card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import "./App.css";

export default function Movie(props) {
  const [showsec, setShowsec] = useState(false);
  const handleClosesec = () => setShowsec(false);
  const handleShowsec = () => {
    setShowsec(true);
  };
  const [keyword, setKeyword] = useState("");
  const [search, setsearch] = useState(1);
  const [newMovie, setnewMovie] = useState({
    name: "",
    image: "",
    rating: 0,
    year: 0,
  });
  const [movieCard, setmovieCard] = useState({
    name: "SONIC LE FILM",
    image: "https://fr.web.img3.acsta.net/imagetures/20/02/10/17/16/0746079.jpg",
    rating: 3.4,
    year: "2020",
  });
  const [movieList, setmovieList] = useState([
    {
      name: "SONIC LE FILM",
      image: "https://fr.web.img3.acsta.net/imagetures/20/02/10/17/16/0746079.jpg",
      rating: 3.4,
      year: 2020,
    },
    {
      name: "L'APPEL DE LA FORÊT",
      image:
        "https://yc.cldmlk.com/tn029qswebz1gahz3xzzhb7x44/1578345436441_Poster.jpg",
      rating: 4,
      year: 2020,
    },
    {
      name: "AVENGERS: ENDGAME",
      image: "https://fr.web.img2.acsta.net/imagetures/19/04/04/09/04/0472053.jpg",
      rating: 4,
      year: 2019,
    },
  ]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const validateMovie = () => {
    setmovieList([...movieList, newMovie]);
    alert("movie added");
    handleClose();
    setnewMovie({ name: "", image: "", rating: 0, year: 0 });
  };
  const newMovieRatinOk = () => {
    newMovie.rating <= 5
      ? validateMovie()
      : alert("please insert a rate between 0 and 5");
  };
  const addMovie = () => {
    newMovie.name
      ? newMovie.image
        ? newMovie.rating
          ? newMovie.year
            ? newMovieRatinOk()
            : alert("please insert a year")
          : alert("please insert a rate")
        : alert("please insert a imageture URL")
      : alert("please insert a name");
  };
  useEffect(() => {
    document.title = `${movieCard.name}`;
  }, [movieCard]);
  const onStarClick = (nextValue) => {
    setsearch(nextValue);
  };
  return (
    <div className="container-fluid row">
      <div className="col-12 movieList">
        <div style={{ display: "flex" }}>
          <div className="search">
            <input
              type="text"
              placeholder="search..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            ></input>
            <div style={{ fontSize: "30px" }}>
              <StarRatingComponent
                name="searching with stars"
                starCount={5}
                value={search}
                onStarClick={onStarClick}
              />
            </div>
          </div>
          <Button onClick={handleShow}>+</Button>
        </div>
        <MovieList
          setShowsec={(x) => setShowsec(x)}
          search={search}
          movieList={movieList.filter((el) =>
            el.name.toUpperCase().includes(keyword.toUpperCase())
          )}
          setmovieCard={(x) => setmovieCard(x)}
        />
      </div>

      <div className="col-8">
        <MovieCard
          movieCard={movieCard}
          show={showsec}
          setShow={setShowsec}
          handleClose={(x) => handleClosesec(x)}
        />
      </div>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-fluid row">
              <div className="col-4">Name: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="name"></input>
              </div>
              <div className="col-4">imageture URL: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="image"></input>
              </div>
              <div className="col-4">Rate: </div>
              <div className="col-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="rating"
                ></input>
              </div>
              <div className="col-4">Year: </div>
              <div className="col-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="year"
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
