import React from "react";
import PropTypes from "prop-types";
import { ProjectPageTemplate } from "../../templates/project-page";
import "../../codeHighlight.css";

const IndexPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();
  if (data) {
    return (
      <ProjectPageTemplate
        {...data}
        html={data.body}
        content={widgetFor("body")}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
