///////// libs /////////
import React from "react";
import { useParams } from "react-router-dom";

const withRouter = (Component) => (props) => {
  const params = useParams();
  return <Component params={params} />;
};

export default withRouter;
