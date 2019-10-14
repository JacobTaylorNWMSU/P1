QUnit.module('MAIN MODULE', {})

QUnit.test( "TEST function", assert => {
    assert.equal(volume(1, 5, 6).toFixed(0), 30, "Normal input");
    assert.equal(volume(22, 22, 20000000000000000).toFixed(0), 0, "too large inputs")
    assert.equal(volume(2, 2, 2).toFixed(0), 8, "Normal input")
    assert.equal(volume(30, 22, 10).toFixed(0), 6060, "Normal input")
    assert.equal(volume(15, 4, 85).toFixed(0), 5100, "Normal input")
});
