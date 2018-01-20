function isValid(s) {
    const runInStack = function(s, stack, data) {
        if (s.length === 0 && stack.length === 0) {
            return true;
        }

        let [head, ...rest] = s;

        // openers, just store in stack
        if (data.openers.indexOf(head) >= 0) {
            stack.push(head);
            return runInStack(rest, stack, data);
        }

        // head is closer, prev should be the opener
        let lastInserted = stack[stack.length - 1];
        if (data.oposites[lastInserted] === head) {
            return runInStack(rest, stack.slice(0, -1), data);
        }

        return false;
    };

    return runInStack(s, [], {
        oposites: {
            '(': ')',
            '[': ']',
            '{': '}'
        },
        openers: ['(', '{', '['],
        closers: [')', '}', ']']
    });
}

// ---------- TEST ----------
const {assert} = require('../libs/test');
assert('({}) should be valid', isValid('({})'), true);
assert('({[{[()]}]}) should be valid', isValid('({[{[()]}]})'), true);
assert('({} should be invalid', isValid('({}'), false);
assert('({}} should be invalid', isValid('({}}'), false);
assert('( should be invalid', isValid('('), false);
assert(') should be invalid', isValid(')'), false);
