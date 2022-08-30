import Netflix from "./Netflix"
export default function Navbar() {
    return (
        <>
            <div className="navbar-main">
                <div className="navbar-subordinate">
                    <span className="navbar-logo">
                        <Netflix />
                        <span className="navbar-text">Netflix</span>
                    </span>
                    <a href="/login" className="navbar-signin">Sign In</a>
                </div>
            </div>

            <div className="fresh">
                <div className="bg">
                    <div className="container-bg">
                        <div className="bg-wrapper" >
                            <img className="concord-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
                            <div className="concord-img-gradient"></div>
                        </div>
                    </div>
                    <div className="story-className">
                        <h1 className="unlimited">Unlimited movies, TV shows, and more.</h1>
                        <h2 className="anywhere">Watch anywhere. Cancel anytime.</h2>
                        <form className="form-netflix">
                            <h3 className="ready-to">Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="email-form">
                                <ul className="email-list">
                                    <li className="email-list-li">
                                        <div className="email-list-li-div1">
                                            <div className="email-list-li-div2">
                                                <label className="email-list-label">
                                                    <input type="email" className="form-control" />
                                                    <label className="email-list-label2">Email Address</label>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="button-email">
                                    <button type="button" className="btn-email">
                                        <span className="glyphicon">Get Started.</span>
                                        <span className="glyphicon-go">
                                            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path></svg>
                                        </span>

                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
