/** identity function:  lambda x . x */

// identity = (x) => x;

// y = identity(1);

/** constant function: lambda x . y */

// const y = 5;
// constant = (x => y);
// somefunction = (x => x ^ x);
// valueResult = constant(3);
// functionResult = constant(somefunction);

/** higher order functions / combinators: 
 * lambda x . lambda y . t **/

// combinator = (x => y => x + y);
// firstApply = combinator(2);
// secondApply = firstApply(3);

// firstIdentity = (x => x);
// secondIdentity = (y => y);
// functionPassing = firstIdentity(secondIdentity);
// valuePassing = functionPassing(2);

/** Booleans and Conditional Statements
 * True:  lambda x . lambda y . x
 * False:  lambda x . lambda y . y
 * Condition Evaluation:  lambda x . lambda y . lambda z . x y z
*/

// True = (x => y => x);
// False = (x => y => y);

// trueFirstApply = True(true);
// trueSecondApply = trueFirstApply(false);

// trueFirstApply = True(false);
// trueSecondApply = trueFirstApply(true);

// If = (x => y => z => x(y)(z));
// shouldReturnTrue = If(True)("TRUE")("oops");
// shouldReturnFalse = If(False)("oops")("FALSE");

/** Numbers 
 * 0: lambda f . lambda x . x
 * 1: lambda f . lambda x . f (x)
 * 2: lambda f . lambda x . f (f(x))
 * 3: lambda f . lambda x . f (f(f(x)))
*/

// pass 'calculate' a function, and it will determine how many times the function was invoked
// pass 'calculate' a Church number, and it will translate to plain English numbers

calculate = f => f(x => x + 1)(0);

let zero = f => x => x;
let one = f => x => f(x);
let two = f => x => f(f(x));
let three = f => x => (f(f(f(x))));

answer0 = calculate(zero);
answer1 = calculate(one);
answer2 = calculate(two);
answer3 = calculate(three);

console.log();