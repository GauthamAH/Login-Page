import "../styles/Home.css";
import {Lightbulb,UsersRound,ChartNoAxesCombined}from "lucide-react"

function Home(){
   
    return (<div className="common">
     <section className="welcome">
        <div className="welcome-text">
        <h3>WELCOME TO VDART DIGITAL</h3>
        <h1>Innovating Today,<br/> Building Tomorrow</h1>
<p>We help businesses move forward through innovation, creativity,<br/> and smart solutions. Discover new possibilities and build a better<br/> future with technology.</p> 
<button className="more">Explore More</button>
</div>
<img className="laptop" src="/laptop-new.png" alt="Technology illustration" />
</section>
<section className="features">
    <div className="feature-card">
    <Lightbulb size={40} />
        <h2>Digital Innovation</h2>
        <p>Driving innovation through technology.</p>
    </div>

    <div className="feature-card">
        <UsersRound size={40} />
        <h2>Talent Solutions</h2>
        <p>Connecting talent with opportunities.</p>
    </div>

    <div className="feature-card">
        <ChartNoAxesCombined size={40} />
        <h2>Business Excellence</h2>
        <p>Delivering smarter business solutions.</p>
    </div>
</section>

</div>

);
}
export default Home;