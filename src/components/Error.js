import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log("error : ", err);
  return (
    <div className="Error-container">
      <h1 className="msg">Opps!! Something went wrong</h1>
      <h2 className="status">{err.status}</h2>
      <h2 className="text">{err.statusText}</h2>
    </div>
  );
};
export default Error;
