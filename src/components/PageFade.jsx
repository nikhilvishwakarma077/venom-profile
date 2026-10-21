
import { useLocation, useOutlet } from "react-router-dom";

export default function PageFade() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div key={location.pathname} className="page-open">
      {outlet}
    </div>
  );
}
    