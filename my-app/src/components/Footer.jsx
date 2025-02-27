import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 p-6 text-center text-white mt-10 shadow-inner">
      <div className="container mx-auto">
        <p className="text-lg">&copy; 2024 PitchDeck. All Rights Reserved.</p>
        <div className="mt-4">
          <Link to="/privacy" className="hover:text-blue-400 transition duration-300 mx-4">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-400 transition duration-300 mx-4">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;