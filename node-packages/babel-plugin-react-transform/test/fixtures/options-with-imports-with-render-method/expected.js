import _reactDom from "react-dom";
import _react from "react";
import _transformLib from "transform-lib";
const _components = {
  Foo: {
    displayName: "Foo"
  }
};

const _transformLib2 = _transformLib({
  filename: "%FIXTURE_PATH%",
  components: _components,
  locals: [],
  imports: [_react, _reactDom]
});

function _wrapComponent(id) {
  return function (Component) {
    return _transformLib2(Component, id);
  };
}

const Foo = _wrapComponent("Foo")(class Foo extends React.Component {
  render() {}
});
