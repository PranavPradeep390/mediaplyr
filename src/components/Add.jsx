import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {

  const[uploadVideo,setuploadVideo]=useState({
    caption:"",imageURL:"",youtubeLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
  setuploadVideo({...uploadVideo,caption:"",imageURL:"", youtubeLink:""})}
  const handleShow = () => setShow(true);

  console.log(uploadVideo);

  const getYoutubeEmbeddedLink =(link)=>{
    if (link.includes("v=")){
      let videoID = link.split("v=")[1].slice(0,11)
      setuploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoID}`})
    }
    else{
      setuploadVideo({...uploadVideo,youtubeLink:""})
      alert("input proper link")
    }
  }

  const handleUpload= async ()=>{
    const{caption,imageURL,youtubeLink}=uploadVideo
    if( caption && imageURL && youtubeLink){
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert(`Video '${result.data.caption}' uploaded successfully`)
        setUploadVideoResponse(result.data)
        handleClose()
      }
      else(
        alert('API call failed')
      )
    }
    else{
      alert("Please fill the formm completely")
    }
  }

  return (
    <>
    <div className="d-flex align-items-center">
        <h3>Upload A Video</h3>
        <button onClick={handleShow} className='btn bg-secondary ms-3 rounded-circle'><i className="fa-solid fa-plus"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Pleae fill the following Datails!!!</p>
        <div className='border-rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInputCaption"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.caption} onChange={e=>setuploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputImg"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.imageURL} onChange={e=>setuploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image URL" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputLink"
            label="Youtube Video Link"
            className="mb-3"
          >
            <Form.Control value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbeddedLink(e.target.value)}  type="text" placeholder="Youtube Video Link" />
          </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </> 
  )
}

export default Add