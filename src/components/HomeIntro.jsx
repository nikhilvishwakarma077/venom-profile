
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./HomeIntro.css";

const INTRO_DURATION = 1500;

export default function HomeIntro() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, INTRO_DURATION);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname !== "/" || !visible) return null;

  return (
    <div className="home-intro" aria-hidden="true">
      <div className="home-intro-line" />

      <div className="home-intro-content">
        <span className="home-intro-label">
          INITIALIZING PLAYER PROFILE
        </span>

        <span className="home-intro-code">
          FF.MAX // SYSTEM READY
        </span>
      </div>
    </div>
  );
}
