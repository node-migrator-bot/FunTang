/* Jison generated parser */
var funtang = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"lns":4,"EOF":5,"ln":6,"fn":7,"EL":8,"let":9,"ID":10,"LET":11,"arrow":12,"apply":13,"tuple":14,"AR":15,"LB":16,"NUM":17,"LITERAL":18,"SP":19,"LP":20,"tlist":21,"RP":22,"TP":23,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"EL",10:"ID",11:"LET",15:"AR",16:"LB",17:"NUM",18:"LITERAL",19:"SP",20:"LP",22:"RP",23:"TP"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,2],[9,3],[7,2],[7,2],[12,2],[13,3],[13,3],[13,3],[13,2],[13,2],[13,2],[13,3],[13,3],[13,3],[13,2],[13,2],[13,2],[13,1],[13,1],[13,1],[14,3],[21,3],[21,1],[21,3],[21,1],[21,3],[21,1],[21,0]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
          return ['PROG',$$[$0-1]];
       
break;
case 2:
          this.$ = $$[$0-1].concat($$[$0]);
      
break;
case 3:
          this.$ = $$[$0];
      
break;
case 4:
          this.$ = ['LINE',$$[$0-1]];
      
break;
case 5:
          this.$ = ['LINE',$$[$0-1]];
      
break;
case 6:
          this.$ = ['LET',['LHS',$$[$0-2]],$$[$0]]
      
break;
case 7:
           this.$ = ['FN',$$[$0-1],$$[$0]]
      
break;
case 8:
           this.$ = ['FN',$$[$0-1],$$[$0]]
      
break;
case 9:
           this.$ = ['ARROW',$$[$0-1]];
      
break;
case 10:
           this.$ = ['APPLY',$$[$0-2],$$[$0]];
      
break;
case 11:
           this.$ = ['APPLY',$$[$0-2],$$[$0]];
      
break;
case 12:
           this.$ = ['APPLY',$$[$0-2],$$[$0]];
      
break;
case 13:
           this.$ = ['APPLY',$$[$0-1],[]];
      
break;
case 14:
           this.$ = ['APPLY',$$[$0-1],[]];
      
break;
case 15:
           this.$ = ['APPLY',$$[$0-1],[]];
      
break;
case 16:
           this.$ = ['APPLY',$$[$0-2],$$[$0]];
      
break;
case 17:
           this.$ = ['APPLY',$$[$0-2],$$[$0]];
      
break;
case 18:
           this.$ = ['APPLY',$$[$0-2],$$[$0]];
      
break;
case 19:
           this.$ = ['APPLY',$$[$0-1],[]];
      
break;
case 20:
           this.$ = ['APPLY',$$[$0-1],[]];
      
break;
case 21:
           this.$ = ['APPLY',$$[$0-1],[]];
      
break;
case 22:
           this.$ = ['APPLY',$$[$0],[]];
      
break;
case 23:
           this.$ = ['APPLY',$$[$0],[]];
      
break;
case 24:
           this.$ = ['APPLY',$$[$0],[]];
      
break;
case 25:
           /*this.$ = $$[$0-2]+$$[$0-1]+$$[$0]*/
           this.$ = $$[$0-1]
       
break;
case 26:
           this.$ = [$$[$0-2]].concat(_.flatten($$[$0]))
       
break;
case 27:
           this.$ = [$$[$0]]
       
break;
case 28:
           this.$ = [$$[$0-2]].concat(_.flatten($$[$0]))
       
break;
case 29:
           this.$ = [$$[$0]]
       
break;
case 30:
           this.$ = [$$[$0-2]].concat(_.flatten($$[$0]))
       
break;
case 31:
           this.$ = [$$[$0]]
       
break;
case 32:
           this.$ = []
       
break;
}
},
table: [{3:1,4:2,6:3,7:4,9:5,10:[1,7],12:6,14:8,20:[1,9]},{1:[3]},{5:[1,10]},{4:11,5:[2,3],6:3,7:4,9:5,10:[1,7],12:6,14:8,20:[1,9]},{8:[1,12]},{8:[1,13]},{7:14,10:[1,16],12:6,13:15,14:8,17:[1,17],18:[1,18],20:[1,9]},{11:[1,19]},{15:[1,20]},{10:[1,22],17:[1,23],18:[1,24],21:21,22:[2,32]},{1:[2,1]},{5:[2,2]},{5:[2,4],10:[2,4],20:[2,4]},{5:[2,5],10:[2,5],20:[2,5]},{8:[2,7]},{8:[2,8]},{8:[2,22],16:[1,25],19:[1,26]},{8:[2,23],16:[1,27],19:[1,28]},{8:[2,24],16:[1,29],19:[1,30]},{7:31,12:6,14:8,20:[1,9]},{10:[2,9],17:[2,9],18:[2,9],20:[2,9]},{22:[1,32]},{22:[2,27],23:[1,33]},{22:[2,29],23:[1,34]},{22:[2,31],23:[1,35]},{8:[2,13],10:[1,16],13:36,17:[1,17],18:[1,18]},{8:[2,19],10:[1,16],13:37,17:[1,17],18:[1,18]},{8:[2,14],10:[1,16],13:38,17:[1,17],18:[1,18]},{8:[2,20],10:[1,16],13:39,17:[1,17],18:[1,18]},{8:[2,15],10:[1,16],13:40,17:[1,17],18:[1,18]},{8:[2,21],10:[1,16],13:41,17:[1,17],18:[1,18]},{8:[2,6]},{15:[2,25]},{10:[1,22],17:[1,23],18:[1,24],21:42,22:[2,32]},{10:[1,22],17:[1,23],18:[1,24],21:43,22:[2,32]},{10:[1,22],17:[1,23],18:[1,24],21:44,22:[2,32]},{8:[2,10]},{8:[2,16]},{8:[2,11]},{8:[2,17]},{8:[2,12]},{8:[2,18]},{22:[2,26]},{22:[2,28]},{22:[2,30]}],
defaultActions: {10:[2,1],11:[2,2],14:[2,7],15:[2,8],31:[2,6],32:[2,25],36:[2,10],37:[2,16],38:[2,11],39:[2,17],40:[2,12],41:[2,18],42:[2,26],43:[2,28],44:[2,30]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + this.terminals_[symbol]+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};


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
function generateProgram(_prog)
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
exports.generateProgram = generateProgram;


// do CoffeeScript to CoffeeScript first.
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this._input = this.match.slice(n) + this._input;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0: return 11; 
break;
case 1: return 16;  
break;
case 2: return 16;  
break;
case 3: return 8;  
break;
case 4: return 19;  
break;
case 5: return 15;  
break;
case 6: return 20;  
break;
case 7: return 22;  
break;
case 8: return 23;  
break;
case 9: return 17; 
break;
case 10: return 17; 
break;
case 11: return 17; 
break;
case 12: return 17; 
break;
case 13: return 18; 
break;
case 14: return 18; 
break;
case 15: return 10; 
break;
case 16: return 5
break;
}
};
lexer.rules = [/^ *= */,/^ *\n +/,/^ *\r +/,/^\n|\r\b/,/^ +/,/^->/,/^\(/,/^\)/,/^,/,/^0b[01]+/,/^0o[0-7]+/,/^0x[\da-f]+/,/^[0-9]+(\.[0-9]+)?\b/,/^["][$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*["]/,/^['][$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*[']/,/^[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = funtang;
exports.parse = function () { return funtang.parse.apply(funtang, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}