import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Blood Donation System</h1>
        <p>Welcome to our blood donation management platform</p>
        
        <div className="home-features">
          <h2>Features</h2>
          <ul>
            <li>✓ Add new donors</li>
            <li>✓ View all registered donors</li>
            <li>✓ Filter donors by blood group</li>
            <li>✓ Edit donor information</li>
            <li>✓ Delete donor records</li>
          </ul>
        </div>

        <Link to="/donors" className="cta-button">
          Go to Donor List
        </Link>
      </div>
    </div>
  );
}

export default Home;
