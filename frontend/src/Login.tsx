

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
                                                <input type="text" className="gs-neumorphic-input" placeholder="Name" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="Email" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="course title" />
                                                <input type="text" className="gs-neumorphic-input" placeholder="course code" />
                                                <input type="password" className="gs-neumorphic-input" placeholder="Password" />
                                                <button className="gs-neumorphic-button">Signup</button>
                                                </form>
                                        </div>
                                        </div>
                        
                                </div>
                                </div>
                        </div>
                </div>

        )
}