export default function MathExplanation() {
	return (
	  <section>
		<h2>Mathematical Explanation</h2>
		<p>
		  Let's say that our keyboard has 26 different keys. The probability of a monkey typing a word of length <em>L</em> is (1/26)^L.<br/>
		  Hence, the probability of not typing the word of length <em>L</em> in a 26 character attempt is $1-(\frac{1}{26})^L$.<br />
		  Since each block of length <em>L</em> is independently typed, we can conclude that the probability of not typing a word of length <em>L</em> after the <em>n</em>-th block of length <em>L</em> pressed is<br />
		  P_n = \left(1-\left(\frac{1}{26}\right)^L\right)^n$ which tends to 0 as <em>n</em> goes to infinity.
		</p>
	  </section>
	);
  }