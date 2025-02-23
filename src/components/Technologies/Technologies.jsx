import { FaJs, FaPhp, FaNodeJs, FaReact, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiRemix, SiCodeigniter, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import "./styles.css";

const Technologies = () => {
    return (
        <section id="technologies">
            <p className="section__text__p1">I work with the following</p>
            <h1 className="title">Technologies</h1>

            <div className="technologies-container">

                {/* Programming Languages */}
                <div className="tech-section">
                    <h2>Programming Languages</h2>
                    <div className="tech-list">
                        <div className="tech-item">
                            <FaJs className="tech-icon" style={{ color: '#F7DF1E' }} />
                            <p>JavaScript</p>
                        </div>
                        <div className="tech-item">
                            <SiTypescript className="tech-icon" style={{ color: '#3178C6' }} />
                            <p>TypeScript</p>
                        </div>
                        <div className="tech-item">
                            <FaPhp className="tech-icon" style={{ color: '#777BB4' }} />
                            <p>PHP</p>
                        </div>
                        <div className="tech-item">
                            <FaNodeJs className="tech-icon" style={{ color: '#68A063' }} />
                            <p>Node.js</p>
                        </div>
                    </div>
                </div>

                {/* Frameworks */}
                <div className="tech-section">
                    <h2>Frameworks</h2>
                    <div className="tech-list">
                        <div className="tech-item">
                            <FaReact className="tech-icon" style={{ color: '#61DBFB' }} />
                            <p>ReactJS</p>
                        </div>
                        <div className="tech-item">
                            <SiNextdotjs className="tech-icon" style={{ color: '#000000' }} />
                            <p>NextJS</p>
                        </div>
                        <div className="tech-item">
                            <SiRemix className="tech-icon" style={{ color: '#000000' }} />
                            <p>RemixJS</p>
                        </div>
                        <div className="tech-item">
                            <SiCodeigniter className="tech-icon" style={{ color: '#EE4623' }} />
                            <p>CodeIgniter</p>
                        </div>
                        <div className="tech-item">
                            <FaLaravel className="tech-icon" style={{ color: '#FF2D20' }} />
                            <p>Laravel</p>
                        </div>
                    </div>
                </div>

                {/* Databases */}
                <div className="tech-section">
                    <h2>Databases</h2>
                    <div className="tech-list">
                        <div className="tech-item">
                            <SiMysql className="tech-icon" style={{ color: '#4479A1' }} />
                            <p>MySQL</p>
                        </div>
                        <div className="tech-item">
                            <SiPostgresql className="tech-icon" style={{ color: '#336791' }} />
                            <p>PostgreSQL</p>
                        </div>
                        <div className="tech-item">
                            <SiMongodb className="tech-icon" style={{ color: '#47A248' }} />
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Technologies;
