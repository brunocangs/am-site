import CMS from "netlify-cms-app";

const ColorPickerControl = CMS.createClass({
  handleChange: function(e) {
    this.props.onChange(e.target.value);
  },
  render: function() {
    return CMS.h("input", {
      type: "color",
      value: this.props.value,
      onChange: this.handleChange
    });
  }
});

CMS.registerWidget("color", ColorPickerControl);
