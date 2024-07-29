
# Dockerized infinite monkeys

<img src="/img/second_attempt.jpeg" alt="drawing" width="500"/>

Project based on the [infinite monkey theorem](https://en.wikipedia.org/wiki/Infinite_monkey_theorem#:~:text=The%20infinite%20monkey%20theorem%20states,complete%20works%20of%20William%20Shakespeare.). The theorem goes as follows:

_If we let a monkey type randomly on a keyboard for an infinite period of time, it will eventually type every possible finite text with probability of 1_

## Maths behind it
Assume that our keyboard has 26 different keys. The probability of the monkey typing a word of length $L$ is $(\frac{1}{26})^L$.
Hence, the probability of *not* typing the word of length $L$ in a 6 character attempt is $1-(\frac{1}{26})^L$. Since each block of length $L$ is independently typed, we can conclude that the probability of not typing a word of length $L$ after $n$ key pressed is
 $\left(1-(\frac{1}{26})^L\right)^n$
