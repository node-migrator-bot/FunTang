
# FunTang : functional features added CoffeeScript 

Make CoffeeScript sweeter !

FunTang is a little language that compiles into CoffeeScript. It adds some functional features into CoffeeScript :

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

## Full Featured Example

This example show all features in the FunTang language.

    ()->x y
    ()->x y
    (x)->(y)->x y
    ()->x y x x y y y
    gsf = (a,b,c,d,e)->()->x "yacc" 34.12313
                          'led'  3
                          'leet'
    ff = ()->(x,y)->(z,w)->x 
                           y 
                           w

The compiler can compile above codes into normal CoffeeScript.

----
## About the name

'Fang Tang' is a Chinese word means the 'sugar cube' in English.  And the misspell 'Fun' is for 'functional' ,
which sounds similar to 'Fang'. So it becomes a perfect name for this CoffeeScript extension project.


## License

FunTang : functional features added CoffeeScript 
Copyright (C) 2012 Greg Weng, snowmantw@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
