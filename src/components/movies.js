import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

import StarRatingComponent from 'react-star-rating-component';




const Movies=(props)=>{

  const [show, setShow] = useState(false);
  const [titre, settitre]=useState([])
  const [photo, setphoto]=useState([])
  const [resumee, setresumee]=useState([])
  const [rating, setrating]=useState([])

  const handleClose = () => {
      setShow(false);
     
    };
  const handleShow = (el) => {
      setShow(true);
      titre.push(el.name);
      photo.push(el.image);
      resumee.push(el.resume);
      rating.push(el.rating);

    };
   
     
    
    return(
        <React.Fragment>
             <section className="results" >
                {props.movieList.map((el) => {
                        return(
                            <>
                                <div className="result"  onClick={()=>handleShow(el)}>
                                    <img src={el.image} style={{height: 'auto', width: 250, alignItems:'center'}} />
                                    <h3>{el.name}</h3>
                                </div> 
                                <div>
                            <StarRatingComponent
                            value={el.rating}
                            starCount={"5"}
                            starColor={"#ffb400"}
                             emptyStarColor={"#333"}
                              />
                              </div>
                            </>
                        );
                    })
                }
             </section>
             
             <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p> {titre}</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row> 
                        <img src={photo} style={{width:150}}/>
                        <br></br>
                       <div style={{marginLeft:10,marginTop:20}}>
                           <b style={{color: 'BLACK'}}>Rating:</b>
                       <StarRatingComponent precision={0.5} value={rating} name={rating} style={{marginTop:50,marginLeft:-30  }}/>
                       </div>
                    </Row>
                   <p><b style={{color: 'BLACK'}}>resume:</b> {resumee}</p>
                </Modal.Body>
             </Modal>
        </React.Fragment>

    );
}

export default Movies;