import calculateRewards
from "../utils/calculateRewards";

test(
  "calculates rewards correctly for amount greater than 100",
  () => {

    const rewards =
      calculateRewards(120);

    expect(rewards).toBe(90);

});