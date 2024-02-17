import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import businessMan from '../../Assets/images/1.png';
import ambulanceSilhoutte from '../../Assets/images/2.png';
import punctualSilhouette from '../../Assets/images/3.png';
import affordabilitySilhouette from '../../Assets/images/4.png';
import careSilhouette from '../../Assets/images/5.png';
import safetySilhouette from '../../Assets/images/6.png'
import comfortSilhouette from '../../Assets/images/7.png';
import licensedSilhouette from '../../Assets/images/8.png';
import WCard from './WCard';

export default function WhyUs() {
  return (
    <div style={{backgroundColor:'#4103f'}}>
      <h1 style={{fontWeight:'bold',color:'#050a30',fontSize:'3.3vw', textAlign: 'center'}}>The Non Emergency Transport Company You Can Trust</h1>
            <div className ="d-flex flex-wrap">

                <WCard
                    title="Trusted Professionals" 
                    desc="Our drivers undergo rigorous training to handle diverse medical transportation needs. With a focus on safety, empathy, and professionalism, our team ensures a smooth and secure journey for all passengers."
                    image={businessMan}
                />

                <WCard
                    title="High Quality Vehicles"
                    desc="Our fleet is meticulously maintained to the highest standards, ensuring a safe and comfortable journey for every passenger. From routine maintenance to cleanliness, we prioritize the well-being of our riders."
                    image={ambulanceSilhoutte}
                />

                <WCard
                    title="Reliable and Punctual"
                    desc="Time is of the essence when it comes to medical appointments. Count on us for prompt and dependable transportation. Our commitment to punctuality ensures that our riders reach their destinations on schedule"
                    image={punctualSilhouette}
                />

                <WCard 
                    title="Affordable Solutions"
                    desc="We believe in accessibility. Our pricing structure is designed to provide cost-effective transportation options without compromising the quality of service. At Royal  Crystal NEMT, affordability meets excellence."
                    image={affordabilitySilhouette}
                />
           
                <WCard 
                    title="Genuine Care"
                    desc=" Beyond providing transportation, we prioritize the well-being of our passengers. Our staff are compassionate individuals who genuinely care about the comfort and safety of those they transport."
                    image={careSilhouette}
                />

                <WCard 
                    title="Safety and Security"
                    desc="Our vehicles adhere to strict safety standards, providing a secure environment for individuals with health concerns during transit."
                    image={safetySilhouette}
                />

                <WCard 
                    title="Comfort"
                    desc="Our vehicles are designed to accommodate various medical needs, offering a more comfortable and accommodating space than traditional transport"
                    image={comfortSilhouette}
                />

                <WCard 
                    title="Fully Licensed"
                    desc="After successfully meeting all performance and quality assurance standards set by regulatory bodies, we have obtained full licensing and accreditation, ensuring our capability to deliver top-notch services."
                    image={licensedSilhouette}
                />
            </div>
    </div>
  )
}
