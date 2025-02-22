import profileImage from "../../assets/me-1.jpg";
import linkedInImage from "../../assets/linkedin.png";
import githubImage from "../../assets/github.png";

const Profile = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img className="main-profile-image" src={profileImage} alt="Dushyant Vishwakarma profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">{`Hello, I'm`}</p>
                <h1 className="title">Dushyant Vishwakarma</h1>
                <p className="section__text__p2">Software Engineer</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open('./assets/resume-example.pdf')}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => location.href = './#contact'}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <img
                        src={linkedInImage}
                        alt="My LinkedIn profile"
                        className="icon"
                        onClick={() => location.href = 'https://linkedin.com/'}
                    />
                    <img
                        src={githubImage}
                        alt="My Github profile"
                        className="icon"
                        onClick={() => location.href = 'https://github.com/'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Profile
