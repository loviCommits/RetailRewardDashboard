import { render, screen } from "@testing-library/react";

import CustomerGrid from "../components/grids/customerDataGrid";

test("shows empty grid for no data", () => {

  render(
    <CustomerGrid data={[]} />
  );

  expect(
    screen.getByText(/no data/i)
  ).toBeInTheDocument();

});