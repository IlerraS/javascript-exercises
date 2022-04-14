const ftoc = function(imp2met)
{
  var newTemp = (imp2met - 32) * .5556;
  return Math.round(newTemp * 10) / 10;
};

const ctof = function(met2imp)
{
  var newTemp = (met2imp * (9/5)) + 32;
  return Math.round(newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
