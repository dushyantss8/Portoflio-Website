import projectOneImage from "../../assets/projects/awaraji.jfif";
import projectTwoImage from "../../assets/project-2.png";
import projectThreeImage from "../../assets/project-3.png";
import arrowImage from "../../assets/arrow.png";

const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={projectOneImage}
                                alt="Project 1"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Project One</h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => location.href = 'https://github.com/'}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => location.href = 'https://github.com/'}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={projectTwoImage}
                                alt="Project 2"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Project Two</h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => location.href = 'https://github.com/'}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => location.href = 'https://github.com/'}
                            >
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img
                                src={projectThreeImage}
                                alt="Project 3"
                                className="project-img"
                            />
                        </div>
                        <h2 className="experience-sub-title project-title">Project Three</h2>
                        <div className="btn-container">
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => location.href = 'https://github.com/'}
                            >
                                Github
                            </button>
                            <button
                                className="btn btn-color-2 project-btn"
                                onClick={() => location.href = 'https://github.com/'}
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
