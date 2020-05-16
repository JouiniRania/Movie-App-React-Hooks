import React,{useState} from 'react';
import Movie from './movies.js';
import Button from "react-bootstrap/Button";


 const Search =(props)=> {

    const [show, setShow] = useState(false);
    const [movieList, setmovieList] = useState([]);
    const [search, setsearch] = useState(1);

    const handleShow = () => {
        setShow(true);
      };

    const [keyword, setKeyword] = useState("");

    return (
        <React.Fragment>
            <section className="searchbox-wrap">
                    <input 
                        type="text" 
                        placeholder="Search" 
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

          </React.Fragment>
    
    )
}
export default Search


    