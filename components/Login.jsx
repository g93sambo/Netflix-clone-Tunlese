import Netflix from "./Netflix"
export default function login() {
    return (
        <>

            <div className="login">
                <div className="login_logo">
                    <div className="login_oga">
                        <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2233e837-6cf5-47b2-b2f7-51c3360dec20/NG-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2233e837-6cf5-47b2-b2f7-51c3360dec20/NG-en-20220822-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2233e837-6cf5-47b2-b2f7-51c3360dec20/NG-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/2233e837-6cf5-47b2-b2f7-51c3360dec20/NG-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />

                    </div>

                    <div className="login-header">
                        <a className="login-logo">
                            <svg viewBox="0 0 111 30" className="svg-icon-login" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
                            <span className="screen-reader-text">Netflix</span>
                        </a>
                    </div>


                    <div className="login-body">

                        <div className="login-body-inner">
                            <div className="login-headerr">
                                <div className="login-header-inner">
                                    <h1 className="login-header-inner-header">Sign In</h1>
                                    <form method="post" className="login-form">
                                        <div className="login-header-inner-inner">
                                            <div className="login-header-inner-content">
                                                <div className="login-header-inner-content-placeholder">
                                                    <label className="label-login">
                                                        <input type="text" className="login-input" />
                                                        <label className="label-login-link">Email or phone number</label>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="login-password">
                                            <div className="login-password-container">
                                                <div className="login-password-input">
                                                    <label className="login-password-show">
                                                        <input type="password" className="login-input" />
                                                        <label for="id_password" className="placeLabel">Password</label>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="form-group">Sign In</button>
                                        <div className="login-footer">
                                            <div className="remember-me">
                                                <input type="checkbox" className="checkbox" />
                                                <label for="remember-me" className="apot">

                                                    <span className="goatee">
                                                        Remember me
                                                    </span>

                                                </label>
                                                <div className="helper"></div>

                                            </div>
                                            <a className="done">Need Help</a>
                                        </div>
                                    </form>
                                </div>
                                <div className="login-other">
                                    <div className="login-other-container">
                                        "New to Netflix?"
                                        <a className="other-name">
                                            Sign up now
                                        </a>
                                    </div>
                                    <div className="recaptcha">
                                        <p className="recaptcha-word">
                                            <span className="recaptcha-text">
                                                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                                            </span>
                                            <button className="recaptcha-button"> Learn More.</button>

                                        </p>
                                        <div className="h-90">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer-wrapper-centered">
                        <div className="footer-divider">
                        </div>
                        <div className="site-footer">
                            <p className="footer-top">
                                <a className="footer-top-a" href="https://help.netflix.com/contactus">Questions? Contact us.
                                </a>
                            </p>
                            <ul className="footer-links structural">
                                <li className="footer-link-item" placeholder="footer_responsive_link_faq_item">
                                    <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq">
                                        <span id="" data-uia="data-uia-footer-label">FAQ
                                        </span>
                                    </a>
                                </li>
                                <li className="footer-link-item" placeholder="footer_responsive_link_help_item">
                                    <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com" placeholder="footer_responsive_link_help"><span id="" data-uia="data-uia-footer-label">Help Center
                                    </span>
                                    </a>
                                </li>
                                <li className="footer-link-item" placeholder="footer_responsive_link_terms_item">
                                    <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms">
                                        <span id="" data-uia="data-uia-footer-label">Terms of Use
                                        </span>
                                    </a>
                                </li>
                                <li className="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item">
                                    <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_privacy_separate_link">
                                        <span id="" data-uia="data-uia-footer-label">Privacy</span>
                                    </a>
                                </li>
                                <li className="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item">
                                    <a className="footer-link" data-uia="footer-link" href="#" placeholder="footer_responsive_link_cookies_separate_link">
                                        <span id="" data-uia="data-uia-footer-label">Cookie Preferences</span>
                                    </a>
                                </li>
                                <li className="footer-link-item" placeholder="footer_responsive_link_corporate_information_item">
                                    <a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo" placeholder="footer_responsive_link_corporate_information">
                                        <span id="" data-uia="data-uia-footer-label">Corporate Information</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}