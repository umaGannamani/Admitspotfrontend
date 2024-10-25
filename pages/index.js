import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to the Contact Manager App</h1>
        <button>Get Started</button>
      </div>
    </>
  );
};

export default Home;
