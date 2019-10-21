import React from "react";

export default ({ pageContext }) => (
  <div>
    hi<pre>{JSON.stringify(pageContext, null, 2)}</pre>
  </div>
);
