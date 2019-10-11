QUnit.module('MAIN MODULE', {length, width, height})

QUnit.test( "TEST calcTotal", assert => {
    assert.equal(calcVolume(20, .05, 1), "Normal input");
    assert.equal(calcVolume(-20, .15, -10), "Negative inputs")
    assert.equal(calcVolume(30, .2, 2), "Normal input")
    assert.equal(calcVolume(40, .1, 4), "Normal input")
    assert.equal(calcVolume(50, .15, 5), "Normal input")
});
