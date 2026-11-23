
import {
    Cloud,
    Code,
    Database,
    ShieldCheck,
    Smartphone,
    Lightbulb
} from "lucide-react";

import "../styles/Services.css";

function Services() {
    return (
        <div className="services-page">
            <div className="services-heading">
                <h4>WHAT WE DO</h4>
                <h1>Our Services</h1>
                <p>
                    Technology solutions to support digital growth
                    and business transformation.
                </p>
            </div>

            <div className="services-grid">
                <div className="service-card">
                    <Cloud size={40} />
                    <h2>Cloud Solutions</h2>
                    <p>Explore cloud technologies and modern infrastructure solutions.</p>
                </div>

                <div className="service-card">
                    <Code size={40} />
                    <h2>Web Development</h2>
                    <p>Build modern and responsive digital experiences.</p>
                </div>

                <div className="service-card">
                    <Database size={40} />
                    <h2>Data Solutions</h2>
                    <p>Organize and use business data effectively.</p>
                </div>

                <div className="service-card">
                    <ShieldCheck size={40} />
                    <h2>Cybersecurity</h2>
                    <p>Support digital security and risk awareness.</p>
                </div>

                <div className="service-card">
                    <Smartphone size={40} />
                    <h2>Digital Solutions</h2>
                    <p>Create accessible experiences across devices.</p>
                </div>

                <div className="service-card">
                    <Lightbulb size={40} />
                    <h2>Digital Innovation</h2>
                    <p>Explore new ideas and technology opportunities.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
