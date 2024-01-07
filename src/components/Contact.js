import React from 'react'
import AppBar from './AppBar'
import Footer from './Footer';
import { Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
        <AppBar />
        <section id="main-content" style={{marginTop:"20px"}}>
            <h1 style={{fontWeight:'bold'}}>Contact Us</h1>
            <p>Have questions or need more information? Feel free to reach out to us.</p>
            <form action="submit_form.php" method="post">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <Button type="submit" class="btn">Submit</Button>
            </form>
        </section>
        <Footer />

    </div>
  )
}
