// [[file:../README.org::*Name clashes possible][Name clashes possible:1]]
const a_name = "foo";
function aName() {}

// This will be renamed to aName and clash with the function
a_name.toLower();
// Name clashes possible:1 ends here
