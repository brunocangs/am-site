import CMS from "netlify-cms-app";
import React from "react";
class ColorPickerControl extends React.Component {
  isValid() {
    return true;
  }
  render() {
    return (
      <input
        type="color"
        value={this.props.value || "#fff"}
        onChange={e => this.props.onChange(e.target.value)}
        id={this.props.forID}
      />
    );
  }
}

CMS.registerWidget("color", ColorPickerControl);
