import "./Toast.scss";

interface props {
  text: string;
  icon: JSX.Element;
  color: string;
}

export default function Toast({ text, icon, color }: props) {
  return (
    <div className="Toast" style={{color: color}} >
      {icon}
      <p className="Text">{text}</p>
    </div>
  );
}
