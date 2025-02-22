import aboutImage from "../../assets/me-3.jpg";
import experienceImage from "../../assets/experience.png";
import educationImage from "../../assets/education.png";
import arrowImage from "../../assets/arrow.png";

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img
                        src={aboutImage}
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={experienceImage}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>3+ years <br />Software Development</p>
                        </div>
                        <div className="details-container">
                            <img
                                src={educationImage}
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>B.Tech in Computer Science & Engineering</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            With over 3+ years of hands-on experience in software development, Dushyant Vishwakarma is a passionate Software Engineer specializing in <span className="bolder">ReactJS</span> and modern web technologies like <span className="bolder">NextJS, RemixJS, Laravel</span> etc. Holding a <span className="bolder">B.Tech in Computer Science and Engineering</span>, he has successfully contributed to <span className="bolder">13 diverse projects</span>, demonstrating expertise in building dynamic, high-performance applications.</p>

                        <p> <br />
                            Committed to writing clean, maintainable code and continuously enhancing his skills, Dushyant is always exploring new ways to push the boundaries of modern web development. Explore his portfolio to see how he transforms ideas into impactful digital solutions.
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={arrowImage}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => { location.href = './#experience' }}
            />
        </section>
    )
}

export default About
