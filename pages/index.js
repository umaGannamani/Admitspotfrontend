// index.js (Home Page)
export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
        </ul>
      </nav>

      <h1 className="home-heading">Welcome to the Contact Manager App</h1>
      <p className="home-subheading">Manage your contacts efficiently and securely</p>
      <button className="home-button">Get Started</button>
    </div>
  );
}
