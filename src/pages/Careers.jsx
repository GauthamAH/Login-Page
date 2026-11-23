
import { BriefcaseBusiness, Users, TrendingUp, ArrowRight } from "lucide-react";
import "../styles/Careers.css";

function Careers() {
    return (
        <div className="careers-page">

            <section className="careers-hero">
                <h4>BUILD YOUR FUTURE</h4>
                <h1>Grow Your Career With Us</h1>
                <p>
                    Explore opportunities, develop your skills
                    and take the next step in your professional journey.
                </p>
                <button className="career-btn">
                    Explore Opportunities <ArrowRight size={18} />
                </button>
            </section>

            <section className="career-benefits">
                <div className="career-card">
                    <BriefcaseBusiness size={40} />
                    <h2>Career Opportunities</h2>
                    <p>Discover opportunities to build your professional career.</p>
                </div>

                <div className="career-card">
                    <Users size={40} />
                    <h2>Collaborative Culture</h2>
                    <p>Work together, share ideas and learn from others.</p>
                </div>

                <div className="career-card">
                    <TrendingUp size={40} />
                    <h2>Professional Growth</h2>
                    <p>Continue learning and developing your skills.</p>
                </div>
            </section>

            <section className="career-bottom">
                <h2>Ready for Your Next Opportunity?</h2>
                <p>Take the next step in your career journey.</p>
                <button className="career-btn">Get Started</button>
            </section>

        </div>
    );
}

export default Careers;
