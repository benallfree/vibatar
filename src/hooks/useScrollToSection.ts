import { useLocation, useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // If we're already on home page, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
};
