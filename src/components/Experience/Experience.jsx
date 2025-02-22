// import checkmarkImage from "../../assets/checkmark.png";
import arrowImage from "../../assets/arrow.png";
import "./styles.css";

const Experience = () => {
    const experiences = [
        {
            company: "Codiant - A YASH Technologies Company",
            role: "Software Engineer",
            duration: "Jan 2024 - Present",
            description: "Developed full-stack applications using Laravel, ReactJS, and its ecosystems like RemixJS and NextJS. Utilized frontend frameworks like Tailwind CSS and managed databases including MySQL, PostgreSQL, and MongoDB for efficient data handling and scalability.",
            skills: ["ReactJS", "NextJS", "RemixJS", "Laravel", "PHP", "Tailwind CSS", "MySQL", "PostgreSQL", "MongoDB", "Git"]
        },
        {
            company: "Vedansh Technovision (Now Zixisoft)",
            role: "Software Engineer",
            duration: "Jun 2022 - Jan 2024",
            description: "Developed robust web applications using CodeIgniter and Laravel PHP frameworks, implementing RESTful APIs for efficient data exchange. Managed MySQL databases for optimized performance and scalability. Proficient in frontend technologies like jQuery, AJAX, and Bootstrap to enhance user experience and responsiveness.",
            skills: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "Bootstrap", "PHP", "CodeIgniter", "Laravel", "MySQL", "RESTful APIs", "Git"]
        },
        {
            company: "SiFi Solutions",
            role: "Software Engineer",
            duration: "July 2019 - Jan 2020",
            description: "Developed and maintained web applications using the CodeIgniter PHP framework, implementing RESTful APIs for seamless data exchange. Managed MySQL databases for efficient data storage and retrieval, ensuring optimized performance and scalability.",
            skills: ["PHP", "CodeIgniter", "MySQL", "RESTful API", "Git"]
        },
    ];

    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-content">
                            <h2>{exp.company}</h2>
                            <h3>{exp.role}</h3>
                            <p className="duration">{exp.duration}</p>
                            <p>{exp.description}</p>
                            <div className="skills">
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src={arrowImage}
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => location.href = './#projects'}
            />
        </section>
    );
};

export default Experience;
