import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/home')
  }
  return (
    <>
    <div className="container mt-5">
      <div className="header row align-items-center">
        <div className="col-lg-6">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}} className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptatem quaerat. Est incidunt, cupiditate vel illum eligendi accusamus. Saepe deleniti fuga vitae et facere modi id similique deserunt repellendus omnis.</p>
            <button className='btn btn-info mt-5' onClick={handleNavigate}>Get Started</button>
                      
        </div>
        <div className="col-lg-6">
          <img src="https://i.gifer.com/embedded/download/7h5u.gif" alt="Landing image" style={{height:'600px'}}/>
          </div>
      </div>
      <div className="features">
        <h3 className="text-center">Features</h3>
        <div className="row">
          <div className="col-lg-4">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRtCu0XVCVevPGlcQacwQSbs6GmtFwcKxmA&usqp=CAU" style={{height:'300px'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ff/62/08/ff620854b85ca2824e8e3b6b3e5d079e.gif" style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card style={{ width: '25rem'}}>
      <Card.Img variant="top" src="https://chapelboromedia.s3.amazonaws.com/wp-content/uploads/2023/02/31135105/Logo.gif" style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className="videos row border p-5 mt-5 rounded">
        <div className="col-lg-6">
          <h3 className="text-warning">Simple,Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Categorise Videos:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates sed placeat eveniet sapiente veniam necessitatibus dolores odit vel ex sequi id a numquam, saepe cumque ea consectetur minima quos?</p>
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Customize Home:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates sed placeat eveniet sapiente veniam necessitatibus dolores odit vel ex sequi id a numquam, saepe cumque ea consectetur minima quos?</p>
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Watch History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates sed placeat eveniet sapiente veniam necessitatibus dolores odit vel ex sequi id a numquam, saepe cumque ea consectetur minima quos?</p>
        </div>
        <div className="col-lg-6">
        <iframe width="545" height="438" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Landing