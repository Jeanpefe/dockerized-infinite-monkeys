
# Dockerized infinite monkeys

<img src="/img/second_attempt.jpeg" alt="drawing" width="500"/>

Project based on the [infinite monkey theorem](https://en.wikipedia.org/wiki/Infinite_monkey_theorem#:~:text=The%20infinite%20monkey%20theorem%20states,complete%20works%20of%20William%20Shakespeare.). The theorem goes as follows:

_If we let a monkey type randomly on a keyboard for an infinite period of time, it will eventually type every possible finite text with probability of 1_

## Let's do some math
Assume that our keyboard has 26 different keys. The probability of the monkey typing a word of length $L$ is $(\frac{1}{26})^L$.
Hence, the probability of *not* typing the word of length $L$ in a 26 character attempt is $1-(\frac{1}{26})^L$. Since each block of length $L$ is independently typed, we can conclude that the probability of not typing a word of length $L$ after the $n$-th block of length $L$ pressed is
 
 $P_n = \left(1-\left(\frac{1}{26}\right)^L\right)^n$   which tends to 0 as $n$ goes to infinity.

 # TODO List
 - [x] Change keys pressed per second
 - [x] Basic Search algorithm
 - [x] Multiple monkeys
 - [x] Display characters typed
 - [ ] Review the math, since the probability of $n$ monkeys typing $m$ characters each is not the same as 1 monkey typing $n \cdot m$ characters
 - [ ] Advanced search algorithm
 - [ ] Responsive UI
 - [ ] Explain math background
 - [ ] Friendly UI :D
 - [ ] Docker deploy
