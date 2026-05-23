import videoHomepage from "../../assets/video-homepage.mp4";
import './HomePage.scss';

const HomePage = () => {
    return (
        <div>
            <video autoPlay loop muted>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title">There's a better way to ask</div>
                <div className="subtitle">You don't want to make a boring form.
                    and your audience won't answer one.
                    Create a typeForm instead-and make everyone happy.</div>
                <div>
                    <button className="btn-start">Get started. It's free.</button>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default HomePage;