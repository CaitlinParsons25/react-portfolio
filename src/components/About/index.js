import React from 'react';
import headshot from "../../assets/headshot.jpg";

function About() {
    return (
        <section>
            <h2 id="about">About me</h2>
            <div className='col-12 col-md-4'>
                <img src={headshot} style={{ width: "25%" }} alt="Caitlin smiling amidst greenery" />
            </div>
            <div className='col-12 col-md-8'>
                <p>Hi, I'm Caitlin Parsons. I am a fledgling web developer with a background in editing. 
                My current skillset includes both front and back end, making me a good candidate for your full stack projects. 
                If you believe in the Oxford comma, we'll get along just fine. 
                If you don't, that's okay; we all have our flaws.</p>
            </div>
        </section>
    )
};

export default About;