import {ShieldCheck,UserRoundGroup,MonitorSmartphone} from "lucide-react";

function App(){
return <div className="container">
  <div className="heading">
  <h1>Vdart Digital</h1>
  <h3>Welcome to Vdart digital<br/><br/>
</h3>
<hr/>
<div className="features">
  <div>
  <h4><ShieldCheck />Secure Access</h4>
  <p>A dedicated sign-in experience</p>
  </div>
  <div>
    <h4><UserRoundGroup />Team Workspace</h4>
    <p>Stay connected with your team.</p>
  </div>
  <div>
    <h4><MonitorSmartphone />One Portal</h4>
    <p>Your work in one place</p>
  </div>
</div>
  </div>
  <div className="textfield">
<form>
  <h2>Sign in</h2>
  <label className="tree">Username:</label>
  <input type="text" placeholder="write your username" />
  <label className="tree">Password:</label>
  <input type="password" placeholder="write your password" />
  <div className="options">
    <div className="remember">
  <input type="checkbox"/>
  <label>Remember me</label>
  </div>
  <a href="#">Forgot password?</a>
  </div>
  <button className="finish" type="submit">Login</button>
</form>
</div>
</div>
}
export default App;