
import "./CardItem.scss";
import { Link } from "react-router-dom";
export default function CardItem({ url, title,to,bannerText }) {
  return (
      <Link to={to}>
      <div className="card-container">
      
        <div className="img-container">
          <img src={url} alt="img" />
          <p className="bannerText">{bannerText}</p>
        </div>
        <h2 className="card-title">{title}</h2>
       
      </div>
     </Link>
  );
}
