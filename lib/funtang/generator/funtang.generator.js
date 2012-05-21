var _ = require('underscore')._;

//[a,b,c....n] -> "(a,b,c...n)"
function generateTuple(_tuple)
{
    var tuple = _tuple.slice(0);

    return "("+tuple.join(',')+")";
}
exports.generateTuple = generateTuple;

// ['APPLY',LV,RV] -> "LV RV"
function generateApply(_apply)
{
    var apply = _apply.slice(0);
    var LV = apply[1];    
    var RV = apply[2];    

    if(0 == RV.length)
    {
        return LV+' '+' ';
    }
    else if("APPLY" == RV[0])
    {
        return LV+' '+'('+generateApply(apply[2])+')';
    }
}
exports.generateApply = generateApply;

// ['ARROW',[x,y,y,x] ] -> ( x,y,y,x ) '->' 
function generateArrow(_arrow)
{
    return generateTuple(_arrow[1]) + '->'
}
exports.generateArrow = generateArrow;

// ['ARROW',[x,y,y,x] ] -> ( x,y,y,x ) '->' 
function generateArrow(_arrow)
{
    return generateTuple(_arrow[1]) + '->'
}
exports.generateArrow = generateArrow;

// ["FN",["ARROW",["x","y"]],["FN",["ARROW",["x","y","y","x"]],["APPLY","x",["APPLY","y",[]]]]]
// ->  "(x,y) -> (x,y,y,x) -> x (y )"
function generateFunction(_fn)
{
    // one function has only one arrow; others are curried.
    var orig_arrow = _fn[1];
    var orig_body  = _fn[2];
    
    var str_arrow = generateArrow(orig_arrow);

    if("FN" == orig_body[0])
    {
        str_fn = str_arrow + generateFunction(orig_body);
    }
    else
    {
        // assume a function MUST has at least one apply.
        // Apply can include empty apply or not is not in concern here.
        str_fn = str_arrow + generateApply(orig_body);
    }

    return str_fn;
}
exports.generateFunction = generateFunction;

// ["LHS","fn"] -> "fn"
function generateLHS(_lhs)
{
    return _lhs[1];
}
exports.generateLet = generateLet;

// ["LET",["LHS","fn"],["FN",["ARROW",["x","y"]],["FN",["ARROW",["x","y","y","x"]],["APPLY","x",["APPLY","y",[]]]]] ]
// ->  "fn = (x,y) -> (x,y,y,x) -> x (y )\n"
function generateLet(_let)
{
    var str_let = generateLHS(_let[1]);
    str_let += " = ";
    str_let += generateFunction(_let[2]);
    return str_let;
}
exports.generateLet = generateLet;

// ["LINE",["FN",["ARROW",["x","y"]],["FN",["ARROW",["x","y","y","x"]],["APPLY","x",["APPLY","y",[]]]]] ]
// ->  "(x,y) -> (x,y,y,x) -> x (y )\n"
function generateLine(_ln)
{
    if("FN" == _ln[1][0])
    {
        return (generateFunction(_ln[1])+"\n");
    }
    else if("LET" == _ln[1][0])
    {
        return (generateLet(_ln[1])+"\n");
    }
}
exports.generateLine = generateLine;

// ["PROG",[ "LINE", [...], "LINE", [...] ] ]
// ->  "...codes...\n...codes....\n EOF"
function generate(_prog)
{
    var str_prog = "";
    var lines = _prog[1];
    _.each(lines,function(ln,idx){
        if( 0 != idx % 2 ) //odd is the content of line ( function or let ) .
        {
            if("FN" == ln[0])
            {
                str_prog += generateFunction(ln);
            }
            else if("LET" == ln[0])
            {
                str_prog += generateLet(ln);
            }
            str_prog += "\n";
        }
    });
    return str_prog;

// CoffeeScript can't handle EOT character.
//    return str_prog + '\u2404'
}
exports.generate= generate;
