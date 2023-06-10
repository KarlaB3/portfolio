import { Link } from 'react-router-dom';

export const AboutButton = () => {
  return (
    <Link to="/about">
      <button class="btn background-color-kb-teal">
        About
      </button>
    </Link>
  );
};