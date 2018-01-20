const assert = (description, value, expectedValue) => {
    if (value !== expectedValue) {
        console.log(
            `[Error]: ${description} - Expected to be ${expectedValue} but it was ${value}`
        );
    } else {
        console.log(`[Sucess]: ${description}`);
    }
};

module.exports = {
    assert
};
