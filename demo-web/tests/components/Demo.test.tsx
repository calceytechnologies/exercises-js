import { render, screen } from "@testing-library/react";
import Demo from "../../src/components/Demo";

describe("Demo component", () => {
  test("div contains specified content", async () => {
    render(<Demo />);
    const element = await screen.findByTestId("demo");
    expect(element.innerHTML).toBe("test");
  });
});
