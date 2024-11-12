const tests = [];

function addTest(description, callback) {
  tests.push({ description, callback });
}

function runTests() {
  let passedTests = 0;
  let failedTests = 0;

  tests.forEach(test => {
    try {
      test.callback();
      console.log(`✔️  ${test.description}`);
      passedTests++;
    } catch (error) {
      console.error(`❌   ${test.description}`);
      console.error(`   Error: ${error.message}`);
      failedTests++;
    }
  });

  console.log(`\nTest Results:`);
  console.log(`   Passed: ${passedTests}`);
  console.log(`   Failed: ${failedTests}`);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

module.exports = { addTest, runTests, assert };
