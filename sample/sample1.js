// [[file:../README.org::*Sample results][Sample results:2]]
import { a_thing } from "some_unconventional_package";

const my_constant = a_thing(4);

function some_function_stuff() {
  let my_local_variable;
  return function inner_function() {
    const other_local_variable = 1;
    return my_local_variable + other_local_variable + "!";
  };
}

// Renaming this one is sort of dangerous 🤔
undeclared_variable = 234;
// Sample results:2 ends here
