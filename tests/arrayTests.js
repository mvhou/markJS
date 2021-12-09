import mark from "../mark.js";
import assert from "assert";

try {
    assert.deepEqual([[1]], mark.newGrid(1,1));
    console.log("Basic 1x1 grid\t","\t[PASSED]")
    assert.deepEqual([[1,2],[3,4]], mark.newGrid(2,2));
    console.log("Basic 2x2 grid\t","\t[PASSED]")
    assert.deepEqual([[1,2,3],[4,5,6],[7,8,9]], mark.newGrid(3,3))
    console.log("Basic 3x3 grid\t","\t[PASSED]")
    assert.deepEqual([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], mark.newGrid(4,4))
    console.log("Basic 4x4 grid\t","\t[PASSED]")
    assert.deepEqual([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], mark.newGrid(3,4))
    console.log("Basic 3x4 grid\t","\t[PASSED]")
    assert.deepEqual([[1,2,3,4],[5,6,7,8],[9,10,11,12]], mark.newGrid(4,3))
    console.log("Basic 4x3 grid\t","\t[PASSED]")
    assert.deepEqual([[1,2,3,4]], mark.newGrid(4,1))
    console.log("Basic 4x1 grid\t","\t[PASSED]")
    assert.deepEqual([[1],[2],[3],[4]], mark.newGrid(1,4))
    console.log("Basic 4x1 grid\t","\t[PASSED]")
    assert.deepEqual([[7,4,1],[8,5,2],[9,6,3]], mark.rotGridRight(mark.newGrid(3,3)));
    console.log("Rotate 3x3 right","\t[PASSED]")
    assert.deepEqual([[3,6,9],[2,5,8],[1,4,7]], mark.rotGridLeft(mark.newGrid(3,3)));
    console.log("Rotate 3x3 left","\t[PASSED]")
    assert.deepEqual([[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]], mark.rotGridRight(mark.newGrid(4,4)));
    console.log("Rotate 4x4 right","\t[PASSED]")
    assert.deepEqual([[4,8,12,16],[3,7,11,15],[2,6,10,14],[1,5,9,13]], mark.rotGridLeft(mark.newGrid(4,4)));
    console.log("Rotate 4x4 left","\t[PASSED]")
} catch(err) {
    console.log(err);
}