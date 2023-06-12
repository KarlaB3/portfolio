import { Link } from 'react-router-dom';

export const AboutButton = () => {
  return (
    <Link to="/about">
      <button type="button" className="btn">
        About
      </button>
    </Link>
  );
};