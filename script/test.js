function test() {
  if (true && true) alert("cond1");
  if (true || false) alert("cond2");
  if (true || (false && true && false)) alert("cond4");
}
