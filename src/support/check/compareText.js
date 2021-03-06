/**
* Compare the contents of two elements with each other
* @param  {String}   element1  Element selector for the first element
* @param  {String}   falseCase Whether to check if the contents of both
*                              elements match or not
* @param  {String}   element2  Element selector for the second element
* @param  {Function} done      Function to execute when finished
*/
module.exports = (element1, falseCase, element2, done) => {
  /**
  * The text of the first element
  * @type {String}
  */
  const text1 = browser.getText(element1);

  /**
  * The text of the second element
  * @type {String}
  */
  const text2 = browser.getText(element2);

  if (falseCase) {
    text1.should.not.equal(text2, `expected text not to be "${text1}"`);
  } else {
    text1.should.equal(
      text2,
      `expected text to be "${text1}" but found "${text2}"`
    );
  }

  done();
};
