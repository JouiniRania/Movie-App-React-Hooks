import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Movie from './movies.js'


const MovieList=()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true);
    };

    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState(1);
   
    const [movieList, setmovieList] = useState([
        {
          name: "Je suis MORT Mais j'ai des Amis",
          image: "http://fr.web.img2.acsta.net/pictures/15/05/04/10/46/282620.jpg",
          resume: "Quatre rockers barbus, chevelus et belges enterrent le chanteur de leur groupe. Par amitié et pour se prouver que rien ne peut les arrêter, ils décident de partir en tournée à Los Angeles avec ses cendres.",
          rating: 5,
        },
        {
          name: "Shaft",
          image: "https://www.movie-list.com/img/posters/big/zoom/shaft.jpg",
          resume:'John Shaft Jr., a cyber security expert with a degree from MIT, enlists his family help to uncover the truth behind his best friend.',
          rating: 3,
        }
    ])

    
    const [newMovie, setnewMovie] = useState({
        name: "",
        image: "",
        resume:"",
        rating: 0
      });
      const add =()=>{
        setmovieList(movieList.concat({name:newMovie.name,resume:newMovie.resume,image:newMovie.image,rating:newMovie.rating})) 
        alert("movie added")
     }
	 
	 

      const handleChange = (e) => {
        setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
      };

    return(
        <React.Fragment>
            <div className="App" >
                <header>
                    <h1>Movie List</h1>
                </header>
                <section className="searchbox-wrap">
                    <input 
                        type="text" 
                        placeholder="Search for a movie..." 
                        className="searchbox"
                        onChange={(e) => {
                            setKeyword(e.target.value);
                          }}
                    /> 
                 
                    <Button variant="secondary" style={{backgroundColor: 'grey'}} margin="normal" onClick={handleShow}>ADD Movie</Button>
		         </section>   
                <Movie movieList={movieList.filter((el) =>
                    el.name.toUpperCase().includes(keyword.toUpperCase())
                )}  search={search}
               />
            </div>


            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className="container-fluid row">
              <div className="col-5">Name: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="name"></input>
              </div>
              <div className="col-5">Image URL: </div>
              <div className="col-8">
                <input type="text" onChange={handleChange} name="image"></input>
              </div>
              <div className="col-5">Rate: </div>
              <div className="col-8">
                <input
                  type="number"
                  onChange={handleChange}
                  name="rating"
                ></input>
              </div>  <div className="col-5">resume: </div> 
              <div className="col-8">
                <input
                  type="text"
                  onChange={handleChange}
                  name="resume"
                ></input>
              </div>
            </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={add}>
                    Add movies
                </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default MovieList