import {
  render,
  screen
} from "@testing-library/react";

import StatsCard from "../components/cards/statsCards";

test("renders card title", () => {

  render(
    <StatsCard
      title="Customers"
      value="25"
    />
  );

  expect(
    screen.getByText("Customers")
  ).toBeInTheDocument();

});

test(
  "returns 0 for null amount",
  () => {

    const rewards =
      calculateRewards(null);

    expect(rewards).toBe(0);

});