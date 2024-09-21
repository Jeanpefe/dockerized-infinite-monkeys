import { InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css';
import './MathExplanation.css';

export default function MathExplanation() {
	return (
	  <section className='math_explanation__container'>
		<h2>Infinite Monkey Theorem</h2>
		<p>If we let a monkey type randomly on a keyboard for an infinite period of time, it will eventually type every possible finite text with probability of 1</p>
		<h2>Mathematical Explanation</h2>
		<p>
      Let's say that our keyboard has 26 different keys. The probability of a monkey typing a word of length <em>L</em> is <InlineMath math="(1/26)^L"/> in any block of <em>L</em> characters.<br />
      Hence, the probability of not typing the word of length <em>L</em> in a 26 character attempt is <InlineMath math="1 - \left(\frac{1}{26}\right)^L" />.<br /><br />
      Since each block of length <em>L</em> is independently typed, we can conclude that the probability of <em>not</em> typing a word of length <em>L</em> after the <em>n</em>-th block of length <em>L</em> is pressed is<br />
      <InlineMath math="P_n = \left(1-\left(\frac{1}{26}\right)^L\right)^n" /> <br />which tends to 0 as <em>n</em> goes to infinity.<br />
	  The above expression is equivalent to the probability of <em>n</em> monkeys <em>not</em> typing the word of length <em>L</em> on the first try. <br /><br />
	  With all of these ingredients, we get the following result: <br />
	  <strong>Consider we have <em>k</em> monkeys, the probabillity that at least one monkey types the word of length <em>L</em> in less than <em>n</em> blocks is: <br />
      <InlineMath math="P_{nk} = 1 - \left(\left(1-\left(\frac{1}{26}\right)^L\right)^n\right)^k" /> </strong>
    </p>
	  </section>
	);
  }