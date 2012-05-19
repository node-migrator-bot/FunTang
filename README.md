
# FunTang : functional features added CoffeeScript 

Make CoffeeScript sweeter !

FunTang is a extension of CoffeScript language. It adds some functional features into CoffeeScript :

* Immutable Variables : by converting variables to functions, which receive nothing and return the value of the variable.
* Lazy Evaluation : by converting applications to cached functions.

CoffeeScript had made a apt-to-use Curried feature by it's syntax of function : 

* Curried Function ( original CoffeeScript ) : `fn = (x)->(y)-> x * y`

This project will focus on Immutable Variables and Lazy Evalution features at begining, and add other features 
like Guard ( to replace `if...else`) ,or even Pattern Matching later.

__CAVEAT__ :  FunTang compiler can't compile original CoffeeScripts, but it can generate normal CoffeeScripts,
which can be compiled with other `.coffee` files. So if you want to use other CoffeeScript libraries 
with FunTang codes, the only way is 'link' them after compiling. This problem may be fixed by adding some 
foreign language features in the near future.
 
----

## About the name

'Fang Tang' is a Chinese word means the 'sugar cube' in English.  And the misspell 'Fun' is for 'functional' ,
which sounds similar to 'Fang'. So it becomes a perfect name for this CoffeeScript extension project.


