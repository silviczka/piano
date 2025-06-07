import "./ModernLink.css";
import { Link } from "react-router-dom";

const ModernLink = ({ to, label, className }) => (
  <Link to={to} className={className}>
    {label}
  </Link>
);

export default ModernLink;
