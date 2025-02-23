import projectOneImage from "../../assets/projects/awaraji.jfif";
import projectTwoImage from "../../assets/projects/najarastays.jfif";
import projectThreeImage from "../../assets/projects/qq1.png";
import projectFourImage from "../../assets/projects/fmc.png";
import arrowImage from "../../assets/arrow.png";

const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-project-details">
                <div className="about-containers">

                    {/* Awaraji  */}
                    <div className="project-details color-container">
                        <div className="article-container">
                            <img
                                src={projectOneImage}
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Awaraji</h2>
                        <p className="project-description">
                            Awaraji is designed to transform the way you travel by integrating
                            <strong> Skill Exchange through Volunteering and Traveling</strong>.
                            Rather than just exploring, you get to <strong>learn, contribute, and connect </strong>
                            with local communities in a meaningful way. Built by travel enthusiasts,
                            Awaraji helps turn every journey into an enriching experience, making travel more
                            than just a destination—it’s a lifelong learning adventure.
                        </p>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://www.awaraji.com', '_blank')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>

                    {/* Najara Stays  */}
                    <div className="project-details color-container">
                        <div className="article-container">
                            <img
                                src={projectTwoImage}
                                alt="Project 2"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Najara Stays</h2>
                        <p className="project-description">
                            Najara Stays App & Web connects you to the finest Hotels, Homestays, Villas, Cottages, and Camps, ensuring a seamless and memorable stay wherever you travel.
                        </p>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://www.najarastays.com', '_blank')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>

                    {/* VMS  */}
                    <div className="project-details color-container">
                        <div className="article-container">
                            <img
                                src={projectThreeImage}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Quantra Quartz VMS</h2>
                        <p className="project-description">
                            The Visitor Management System is a streamlined solution designed to manage and track visitor entries efficiently. Whether arriving as an employee, customer, supplier, or guest, visitors must fill out a digital form before access.

                            On the backend, an admin panel provides complete control over visitor requests. Admin can review submitted details, verify necessary documents, approve or reject requests, and maintain a secure record of all visits. This system enhances security, efficiency, and organization by eliminating manual check-ins and ensuring only authorized visitors gain access.
                        </p>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://quantra.in/vms/', '_blank')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>

                    {/* Find My Cylinder  */}
                    <div className="project-details color-container">
                        <div className="article-container">
                            <img
                                src={projectFourImage}
                                alt="Project 4"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Find My Cylinder</h2>
                        <p className="project-description">
                            Developed the backend RESTful API with authentication for Find My Cylinder, a system designed for seamless cylinder management, distribution, and inventory tracking. With the Android mobile app, users can easily monitor cylinder movements IN & OUT from anywhere. The system also supports customized QR code labels, enabling quick and efficient tracking, all while ensuring secure access and authentication.
                        </p>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => window.open('https://findmycylinder.com/', '_blank')}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={arrowImage}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => location.href = './#contact'}
            />
        </section>
    )
}

export default Projects
