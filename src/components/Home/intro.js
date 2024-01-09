import React from 'react'
import { Image} from 'react-bootstrap';
// import mainLogo from '../../Assets/images/logo.png'
import nemtDriver from '../../Assets/images/nemtdriver.jpeg'
export default function Intro() {
  return (
    <div style={{backgroundColor:'#4103fc'}}>
        <section id="intro" class="blocks" className="intro" style={{marginTop: "30px;"}}>
        <div class="blocks">
            <div>
                <Image src={nemtDriver} style={{height:"auto",width:'auto'}}/>
            </div>
            <div>
                <div class="blocks">
                    {/* <div>
                        <Image src={mainLogo} />
                    </div> */}
                    <div >
                        <h1 style={{fontWeight:'bold',fontSize:'659%',color:'#050a30'}}>Royal Crystal</h1>
                        <h2 style={{color:'#050a30'}}>Non-Emergency Medical Transport Services</h2>
                        
                    </div>
                </div> 
                <div>
                    <p>

                        "Welcome to Royal Crystal NEMT – your premier choice for safe, affordable, and compassionate non-emergency medical transportation. Our well-maintained fleet, punctual service, and caring drivers prioritize your well-being. Experience the difference today!"

                    </p>
                </div>
                
            </div>
                     
        </div>
    </section>
       
    </div>
  )
}
