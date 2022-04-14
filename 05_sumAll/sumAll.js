const sumAll = function(num1, num2) {
    var max = num2;
    var min = num1;
    if(!Number.isInteger(num2))
    {
        return 'ERROR';
    }
    else if(num1 < 0)
    {
        return 'ERROR';
    }
    if(num1 > num2)
    {
        max = num1;
        min = num2;
    }

    var total = 0;
    for(var x = min; x <= max; ++x)
    {
        total += x;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
