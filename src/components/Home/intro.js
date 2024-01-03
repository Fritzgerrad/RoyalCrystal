import React from 'react'
import { Image} from 'react-bootstrap';
import mainLogo from '../../Assets/images/logo.png'
import nemtDriver from '../../Assets/images/nemtdriver.jpeg'
export default function Intro() {
  return (
    <div>
        <section id="intro" class="blocks" className="intro" style={{marginTop: "30px;"}}>
        <div class="blocks">
            <div>
                <Image src={nemtDriver} style={{height:"400px",width:'500px'}}/>
            </div>
            <div>
                <div class="blocks">
                    <div>
                        <Image src={mainLogo} />
                    </div>
                    <div>
                        <h1>Royal Crystal</h1>
                        <h2>Non-Emergency Medical Transport Services</h2>
                        
                    </div>
                </div> 
                <div>
                    <p>
                        Welcome to Royal Crystal NEMT, your premier choice for non-emergency medical transportation. Our meticulously maintained fleet, affordable solutions, and commitment to punctuality set us apart. With professionally trained drivers and genuine care for our riders, we go beyond transportation, providing a reliable support system for your medical needs. Choose Royal Crystal NEMT for a safe, comfortable, and compassionate journey—where your well-being is our top priority. Experience the difference today.
                    </p>
                </div>
                
            </div>
                     
        </div>
    </section>
       
    </div>
  )
}
