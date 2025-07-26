import React, {Component} from 'react';

class Header extends Component {
       render () {
        return (
            <header className="header">
            <div className='iotblogo'>
            <img src='/public/iotbtech-logo1.svg' width={130}  alt='iotb-logo'/>
            </div>
            <nav className="nav">
       {['HOME','COURSES','ABOUT', 'TEAM', 'CONTACT','TESTIMONIAL', 'Login'].map(item => (
                      <a href={`#${item.toLowerCase()}`}

                      key={item}>{item}</a>
       ))}

            </nav>
            </header>
        );
       }
}

export default Header;