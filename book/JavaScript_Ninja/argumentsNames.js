function argumentsName(fn) {
  var found = /^[\s\()]*function[^(]*\(\s*([^)]*?)\s*\)/
              .exec(fn.toString())
  return found && found[1] ?
          found[1].split(/,\s*/) :
          []
}
assert(argumentsName(function(){}).length === 0,
      "Works on zero-arg function."
)