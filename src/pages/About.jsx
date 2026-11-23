

import "../styles/About.css";
import { Target, Eye, Gem } from "lucide-react";

function About() {
    return (
        <div className="a1">
            <div className="hero-section">

                {/* Left Section */}
                <div className="left-section">
                    <div className="a2">
                        <h4>ABOUT VDART DIGITAL</h4>

                        <h2>
                            Technology That Drives
                            <br />
                            Business Forward
                        </h2>

                        <p>
                            VDart Digital is focused on delivering
                            technology-driven solutions that help
                            organizations transform their business
                            processes, embrace innovation, and adapt
                            to changing digital needs.
                        </p>
                    </div>
                </div>

                {/* Centre Wave */}
                <svg
                    className="wave"
                    viewBox="0 0 260 1000"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0 H250 C220 100 200 200 165 300 C120 410 65 500 95 610 C125 730 100 850 50 1000 H0 Z"
                        fill="white"
                    />

                    <path
                        d="M250 0 C220 100 200 200 165 300 C120 410 65 500 95 610 C125 730 100 850 50 1000"
                        fill="none"
                        stroke="#C9E2FF"
                        strokeWidth="16"
                    />
                </svg>

                {/* Right Section */}
                <div className="right-section">
                    <div className="b">

                        {/* Mission */}
                        <div className="b1">
                            <div className="card-icon">
                                <Target size={35} />
                            </div>

                            <div className="card-content">
                                <h2>Our Mission</h2>
                                <p>
                                    To empower businesses with innovative
                                    technology solutions that improve
                                    efficiency, support growth, and create
                                    meaningful business outcomes.
                                </p>
                            </div>
                        </div>

                        <hr />

                        {/* Vision */}
                        <div className="b2">
                            <div className="card-icon">
                                <Eye size={35} />
                            </div>

                            <div className="card-content">
                                <h2>Our Vision</h2>
                                <p>
                                    To contribute to a future where technology
                                    and innovation help businesses adapt,
                                    grow, and achieve their ambitions.
                                </p>
                            </div>
                        </div>

                        <hr />

                        {/* Values */}
                        <div className="b3">
                            <div className="card-icon">
                                <Gem size={35} />
                            </div>

                            <div className="card-content">
                                <h2>Our Values</h2>
                                <p>
                                    Innovation, Collaboration, Excellence
                                    and Integrity.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
