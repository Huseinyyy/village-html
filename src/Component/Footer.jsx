import React, {Component} from "react";


class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="footer-img">
                    <img src="/public/iotbtech-logo1.svg" width={120} alt="iotblogo"/>
                    <div className="we-are"><p>We are IOTB TECH, a fast-rising tech academy, on a mission to librate lives.</p></div>
                    <div><h4>Log In</h4></div>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        {['About Us', 'Events', 'Team', 'Terms of Service', 'Privacy policy'].map(link =>(
                            <li key={link}> <a href={`#${link.toLowerCase()}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Get In Touch</h4>
                    <p>Email: iotbtech@yahoo.com</p>
                </div>
            </footer>
        );
    }
}
export default Footer;