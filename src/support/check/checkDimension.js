/**
* Check the dimensions of the given element
* @param  {String}   elem         Element selector
* @param  {String}   falseCase    Whether to check if the dimensions match or
*                                 not
* @param  {String}   expectedSize Expected size
* @param  {String}   dimension    Dimension to check (broad or tall)
* @param  {Function} done         Function to execute when finished
*/
module.exports = (elem, falseCase, expectedSize, dimension, done) => {
  /**
  * The size of the given element
  * @type {Object}
  */
  const elementSize = browser.getElementSize(elem);

  /**
  * Parsed size to check for
  * @type {Int}
  */
  const intExpectedSize = parseInt(expectedSize, 10);

  /**
  * The size property to check against
  * @type {Int}
  */
  let origionalSize = elementSize.height;

  /**
  * The label of the checked property
  * @type {String}
  */
  let label = 'height';

  if (dimension === 'broad') {
    origionalSize = elementSize.width;
    label = 'width';
  }

  if (falseCase) {
    origionalSize.should.not.equal(
      intExpectedSize,
      `element "${elem}" should not have a ${label} of ` +
      `${intExpectedSize}px`
    );
  } else {
    origionalSize.should.equal(
      intExpectedSize,
      `Element "${elem}" should have a ${label} of ` +
      `${intExpectedSize}px, but is ${origionalSize}px`
    );
  }

  done();
};
