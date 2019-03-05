import { createInitialState } from "../src/libyopu/field";
import { getStateRepresentation } from "../src/libyopu/representation";
import produce from "immer";
import { moveRight, rotate } from "../src/libyopu/control_block";

describe("Rotate control block", () => {
  const height = 6;
  const width = 5;
  const state = createInitialState(height, width);

  it("can rotate right", () => {
    const newState = produce(state, rotate);
    const stateReprepresentation = getStateRepresentation(newState);
    const expectedRepresentation = "\
     \n\
  12 \n\
     \n\
     \n\
     \n\
     \
";
    expect(stateReprepresentation).toEqual(expectedRepresentation);
  });

  it("can't rotate at right wall", () => {
    const moves = [moveRight, moveRight, rotate];
    const newState = moves.reduce((acc, move, _) => produce(acc, move), state);
    const stateReprepresentation = getStateRepresentation(newState);
    const expectedRepresentation = "\
    2\n\
    1\n\
     \n\
     \n\
     \n\
     \
";
    expect(stateReprepresentation).toEqual(expectedRepresentation);
  });

  it("flips after double rotate", () => {
    const moves = [rotate, rotate];
    const newState = moves.reduce((acc, move, _) => produce(acc, move), state);
    const stateReprepresentation = getStateRepresentation(newState);
    const expectedRepresentation = "\
  1  \n\
  2  \n\
     \n\
     \n\
     \n\
     \
";
    expect(stateReprepresentation).toEqual(expectedRepresentation);
  });

});