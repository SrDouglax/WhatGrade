import "./ErrorPage.scss";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate()
  navigate('/')
  return (
    <div className="ErrorPage">
    </div>
  );
}
