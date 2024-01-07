/* eslint-disable eqeqeq */
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
      <p style={{color: "red", fontSize:"30px"}}>
        {error.status == "404" ? "404 Page Not Found" : ""}
      </p>
    </div>
    )
}
export default Error;
