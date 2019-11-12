// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.getcontext.exists
// Description:The 2D context is implemented
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("The 2D context is implemented");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
_assertDifferent(offscreenCanvas2.getContext('2d'), null, "offscreenCanvas2.getContext('2d')", "null");

t.done();

});
done();