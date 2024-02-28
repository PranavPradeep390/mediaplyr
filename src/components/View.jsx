import React, { useEffect, useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideosAPI } from '../services/allAPI'

function View({uploadVideoResponse}) {

  const [allVideos,setAllVideos]= useState([])
 const [deleteVedioResponse,setDeleteVideoResponse]=useState("")
  

  const getAllVideos = async ()=>{
    const result = await getAllVideosAPI()
    // console.log(result);
    if(result?.status==200){
      // console.log(result?.data);
      setAllVideos(result?.data);
    }
  } 

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVedioResponse])

  console.log(allVideos);




  return (
   <>
        <Row>
            { allVideos?.length>0? allVideos?.map((video,index)=>(
              <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
                <Videocard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
              </Col>

            ))
            :
            <div className='text-danger fw-bolder'>No Videos Are Uploaded Yet!!!!</div>
          
          }
        </Row>
   </>
  )
}

export default View