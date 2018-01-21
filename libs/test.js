const assert = (description, value, expectedValue) => {
    if (value !== expectedValue) {
        console.log(
            `error  : ${description} - Expected to be ${expectedValue} but it was ${value}`
        );
    } else {
        console.log(`sucess : ${description}`);
    }
};

const ExpectedValue = (description, value) => {
    const success = description => console.log(`sucess : ${description}`);

    const toBe = otherValue =>
        value === otherValue ? success(description) : error(description);

    const error = description =>
        console.log(
            `error  : ${description} - Expected to be ${expectedValue} but it was ${value}`
        );

    return {
        toBe
    };
};

const expect = description => value => ExpectedValue(description, value);

module.exports = {
    expect,
    assert
};
