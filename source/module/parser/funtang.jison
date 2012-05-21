/*I should leave code gen to generator*/
/*include parenthese problem*/
/*STRANGE: '|' can't work*/

%lex
%%

" "*"="" "*  { return 'LET'; }
" "*\n" "+   { return 'LB';  }
" "*\r" "+   { return 'LB';  }
\n|\r        { return 'EL';  }
" "+         { return 'SP';  }
"->"         { return 'AR';  }
"("          { return 'LP';  }
")"          { return 'RP';  }
","          { return 'TP';  }
0b[01]+      { return 'NUM'; }
0o[0-7]+     { return 'NUM'; }
0x[\da-f]+   { return 'NUM'; }
[0-9]+("."[0-9]+)?\b { return 'NUM'; }
["][$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*["] { return 'LITERAL'; }
['][$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*['] { return 'LITERAL'; }

[$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]* { return 'ID'; }

<<EOF>> { return 'EOF'}

/lex

/* operator associations and precedence */

%left AR

%start prog

%% /* language grammar */

prog : lns EOF
       %{
          return ['PROG',$lns];
       %}
       ;
lns : ln lns
      %{
          $$ = $ln.concat($lns);
      %}

    | ln
      %{
          $$ = $ln;
      %}
    ;

ln  : fn EL
      %{
          $$ = ['LINE',$fn];
      %}
    | let EL
      %{
          $$ = ['LINE',$let];
      %}
    ;

let : ID LET fn
      %{
          $$ = ['LET',['LHS',$ID],$fn]
      %}
    ;

fn
    : arrow fn
      %{
           $$ = ['FN',$arrow,$fn]
      %}
    | arrow apply 
      %{
           $$ = ['FN',$arrow,$apply]
      %}
    ;

arrow
    : tuple AR
      %{
           $$ = ['ARROW',$tuple];
      %}
    ;

apply 
    : ID LB apply
      %{
           $$ = ['APPLY',$ID,$apply];
      %}
    | NUM LB apply
      %{
           $$ = ['APPLY',$NUM,$apply];
      %}
    | LITERAL LB apply
      %{
           $$ = ['APPLY',$LITERAL,$apply];
      %}
    | ID LB
      %{
           $$ = ['APPLY',$ID,[]];
      %}
    | NUM LB
      %{
           $$ = ['APPLY',$NUM,[]];
      %}
    | LITERAL LB
      %{
           $$ = ['APPLY',$LITERAL,[]];
      %}
    | ID SP apply
      %{
           $$ = ['APPLY',$ID,$apply];
      %}
    | NUM SP apply
      %{
           $$ = ['APPLY',$NUM,$apply];
      %}
    | LITERAL SP apply
      %{
           $$ = ['APPLY',$LITERAL,$apply];
      %}
    | ID SP
      %{
           $$ = ['APPLY',$ID,[]];
      %}
    | NUM SP
      %{
           $$ = ['APPLY',$NUM,[]];
      %}
    | LITERAL SP
      %{
           $$ = ['APPLY',$LITERAL,[]];
      %}
    | ID 
      %{
           $$ = ['APPLY',$ID,[]];
      %}
    | NUM 
      %{
           $$ = ['APPLY',$NUM,[]];
      %}
    | LITERAL
      %{
           $$ = ['APPLY',$LITERAL,[]];
      %}
    ;

tuple /*( a,b,c )*/
     : LP tlist RP
       %{
           /*$$ = $LP+$tlist+$RP*/
           $$ = $tlist
       %}
     ;

tlist/* a ,  b,c,d -> [a]++ tlist ( [|b,c,d|] )*/
     : ID TP tlist
       %{
           $$ = [$ID].concat(_.flatten($tlist))
       %}
     | ID
       %{
           $$ = [$ID]
       %}
     | NUM TP tlist
       %{
           $$ = [$NUM].concat(_.flatten($tlist))
       %}
     | NUM
       %{
           $$ = [$NUM]
       %}
     | LITERAL TP tlist
       %{
           $$ = [$LITERAL].concat(_.flatten($tlist))
       %}
     | LITERAL
       %{
           $$ = [$LITERAL]
       %}
     | 
       %{
           $$ = []
       %}
     ;
%%

var _ = require('underscore')._;


