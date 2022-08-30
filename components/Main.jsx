export default function Main() {
    return (
        <>
            <div className="goats">
                <div className="enjoy">
                    <div className="animation-head">
                        <h1 className="animation-tv">Enjoy on your TV.</h1>
                        <h2 className="animation-paragraph">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                    </div>
                    <div className="animation">
                        <div className="animation-container">
                            <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                            <div className="animation-video">
                                <video autoplay className="our-story-card-video" data-uia="our-story-card-video" loop={true}><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                </video>
                                <div className="animation-video-text"></div>
                                <div className="animation-video-text2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="center-pixel"></div>
                </div>
            </div>
        </>
    )
}