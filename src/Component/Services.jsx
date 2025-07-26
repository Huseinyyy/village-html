import React, {Component} from "react";

const services = [
    { title: '', desc: 'Recognized Certificates'},
    {title: '', desc:'In-demand courses'},
    {title: '', desc: 'Qualified Trainers'},
    {title: '', desc: 'Learning at no cost'},
];

class Services extends Component {
    render() {
        return (
            <section className="services">
                <div className="service-list">
                 { services.map(s => (
                    <div className="service-card" key={s.title}>
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        </div>
                 ))}
                </div>
            </section>
        );
    }
}
export default Services;