import videoHomepage from "../../assets/video-homepage.mp4";
import './HomePage.scss';

const HomePage = () => {
    return (
        <div>
            <video autoPlay loop muted>
                <source src={videoHomepage} type="video/mp4" />
            </video>
        </div>
    );
}

export default HomePage;