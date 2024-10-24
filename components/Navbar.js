import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
