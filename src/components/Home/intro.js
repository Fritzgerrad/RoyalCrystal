import React from 'react'
import { Image,Col} from 'react-bootstrap';
// import mainLogo from '../../Assets/images/logo.png'
//import nemtDriver from '../../Assets/images/nemtdriver.jpeg'
import nemtGuy from '../../Assets/images/NemtGuy.jpeg';
export default function Intro() {
  return (
    <div style={{backgroundColor:'#4103fc'}}>
        <section id="intro" className="intro" style={{marginTop: "30px;"}}>
        {/* <div className="blocks"> */}
            {/* <div style={{width:'50%'}}>
                <Image src={nemtGuy} style={{height:"30vw",width:'30vw'}}/>
            </div> */}
            <Col md={4} sm={4} xs={4} lg={4} xl={4} style={{margin:'15px'}}>
                <Image src={nemtGuy} style={{height:"80%",width:'100%',margin: "auto 0"}}/>
            </Col>
            <div style={{margin:'1px'}}>
                <div class="blocks">
                    {/* <div>
                        <Image src={mainLogo} />
                    </div> */}
                    <div style={{textAlign:"center"}} >
                        <h1 style={{fontWeight:'bold',fontSize:'8.3vw',color:'#050a30'}}>Royal Crystal</h1>
                        <h2 style={{fontSize:'2.5vw',fontWeight:'bold',color:'#050a30'}}>Non-Emergency Medical Transport Services</h2>
                        
                    </div>
                </div> 
                <Col md={12} sm={12} xs={12} lg={12} xl={12}>
                    <p style={{fontSize:'1.5vw',margin:'15px'}}>

                        "Welcome to Royal Crystal NEMT – your premier choice for non-emergency medical transportation. At Royal Crystal, we prioritize your well-being with safe, affordable, and compassionate transportation. Our well-maintained fleet, punctual service and caring drivers ensure a comfortable journey for you or your loved ones."
                    </p>
                </Col>
                
            </div>
                     
        {/* </div> */}
    </section>
       
    </div>
  )
}
