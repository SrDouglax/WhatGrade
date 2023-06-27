import "./styleTypeMessage.scss";

export default ({ message }: any) => {
  switch (message.style) {
    case "line":
      return (
        <div className="styleMessage">
          <div className="line"></div>
          <div className="point"></div>
          <div className="line"></div>
        </div>
      );
    default:
      return <></>;
  }
};
