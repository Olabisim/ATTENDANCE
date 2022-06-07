

import './css/login.css'


export const Login = () => {
        return (

                <div className="gs-neumorphic-main-card-outer-container">
                        <div className="gs-neumorphic-main-card-outer-container">
                                <div className="gs-neumorphic-main-card-container">
                                <div className="gs-neumorphic-main-card">
                                        <div className="gs-neumorphic-signup gs-form-open">
                                        <div className="gs-neumorphic-signup-login-header gs-open" data-button="gs-neumorphic-signup">Signup</div>
                                        <div className="gs-neumorphic-form-container">
                                                <form>
                                                <input type="text" className="gs-neumorphic-input" placeholder="First Name" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="Last Name" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="Username" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="Mobile Number" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="Email" />
                                                <input type="password" className="gs-neumorphic-input" placeholder="Password" />
                                                <input type="password" className="gs-neumorphic-input" placeholder="Confirm Password" />
                                                <button className="gs-neumorphic-button">Signup</button>
                                                </form>
                                        </div>
                                        </div>
                        
                                        <div className="gs-neumorphic-login">
                                        <div className="gs-neumorphic-signup-login-header" data-button="gs-neumorphic-login">Login</div>
                                        <div className="gs-neumorphic-form-container">
                                                <form>
                                                <input type="text" className="gs-neumorphic-input" placeholder="Username" />
                                                <input type="password" className="gs-neumorphic-input" placeholder="Password" />
                                                <button className="gs-neumorphic-button">Login</button>
                                                </form>
                                        </div>
                                        </div>
                                </div>
                                </div>
                        </div>
                </div>

        )
}