
# FunTang : functional features added CoffeeScript 

Make CoffeeScript more sweet !

FunTang is a extension of CoffeScript language. It adds some functional features into CoffeeScript :

* Immutable Variables : by converting variables to functions, which receive nothing and return the value of the variable.
* Lazy Evaluation : by converting applications to cached functions.

CoffeeScript had made a apt-to-use Curried feature by it's syntax of function : 

* Curried Function ( original CoffeeScript ) : `fn = (x)->(y)-> x * y`

This project will focus on Immutable Variables and Lazy Evalution features at begining, and add other features 
like Guard ( to replace `if...else`) ,or even Pattern Matching.

__CAVEAT__ : FunTang compiling CoffeeScript scripts to Javascript like what the later one doing, 
so the original Javascript can normally execute and 'link' them. But CoffeeScript codes will become incompatible with 
other CoffeeScript codes if you use FunTang compiler to compile them. So the CoffeeScript codes must be compiled as a 
independent part with the original CoffeeScript compiler, and 'link' them with FunTang part after they are all 
compiled to Javascript.

----

## About the name

'Fang Tang' is a Chinese word means the 'sugar cube' in English.  And the misspell 'Fun' is for 'functional' ,
which sounds similar to 'Fang'. So it becomes a perfect name for this CoffeeScript extension project.


