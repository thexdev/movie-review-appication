import React, { memo } from "react";

function Error(props) {
  return <div className="errorMessage">{props.message}</div>;
}

export default memo(Error);
