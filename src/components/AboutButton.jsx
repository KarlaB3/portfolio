import { Link } from 'react-router-dom';

export const AboutButton = () => {
  return (
    <Link to="/about">
      <button>
        About
      </button>
    </Link>
  );
};