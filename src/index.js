// [[file:../README.org::*\[\[https:/github.com/fiddlerwoaroof/babel-camel-case\]\[Sample babel transform to turn snake_case into camelCase\]\]][[[https://github.com/fiddlerwoaroof/babel-camel-case][Sample babel transform to turn snake_case into camelCase]]:1]]
function snakeToCamel(str) {
  const [first, ...rest] = str.split("_");
  return `${first}${rest.map(capitalize).join("")}`;
}

function capitalize([v, ...vs]) {
  return `${v.toLocaleUpperCase()}${vs.join("")}`;
}
// [[https://github.com/fiddlerwoaroof/babel-camel-case][Sample babel transform to turn snake_case into camelCase]]:1 ends here

// [[file:../README.org::*\[\[https:/github.com/fiddlerwoaroof/babel-camel-case\]\[Sample babel transform to turn snake_case into camelCase\]\]][[[https://github.com/fiddlerwoaroof/babel-camel-case][Sample babel transform to turn snake_case into camelCase]]:2]]
module.exports = function camelCasingVisitor({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        if (isSnakeCased(path.node)) {
          path.scope.rename(path.node.name, snakeToCamel(path.node.name));
          path.replaceWith(t.identifier(snakeToCamel(path.node.name)));
        }
      },
    },
  };
};

function isSnakeCased(node) {
  return /_/.test(node.name);
}
// [[https://github.com/fiddlerwoaroof/babel-camel-case][Sample babel transform to turn snake_case into camelCase]]:2 ends here
