import React from 'react';
import headshot from "../../assets/headshot.jpg";

function About() {
    return (
        <section>
            <h2 id="about">About me</h2>
            <img src={headshot} style={{ width: "25%" }} alt="Caitlin smiling amidst greenery" />
        </section>
    )
};

export default About;