import { createInitialState, produceNextTick } from "../src/libyopu/field";
import { getStateRepresentation } from "../src/libyopu/representation";
import * as _ from "lodash";
import { Orientation } from "../src/libyopu/control_block";

describe("Text representation", () => {
  const height = 6;
  const width = 5;
  it.skip("transform back", () => {
    const state = createInitialState(height, width);
    const stateReprepresentation = getStateRepresentation(state);
    // expect(getStateRepresentation(getStateFromRepresentation(stateReprepresentation))).toEqual(stateReprepresentation);
  });
  it("inital state looks ok", () => {
    const state = createInitialState(height, width);
    const stateReprepresentation = getStateRepresentation(state);
    const expectedRepresentation = "\
  2  \n\
  1  \n\
     \n\
     \n\
     \n\
     \
";
    expect(stateReprepresentation).toEqual(expectedRepresentation);
  });
  it("horizontal state looks ok", () => {
    const state = createInitialState(height, width);
    state.controlBlock!.orientation = Orientation.HORIZONTAL;
    const stateReprepresentation = getStateRepresentation(state);
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
});
