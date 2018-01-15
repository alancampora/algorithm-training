const Node = (value, next) => ({
    value,
    next,
    inspect: () => `Node(value:${value},
        next:${next ? next.value : null})`
});

module.exports = {Node};
