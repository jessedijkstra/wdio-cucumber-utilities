/**
* Pause the browser
* @param  {Function} done Function to execute when finished
*/
module.exports = (done) => {
  browser.debug();

  done();
};
