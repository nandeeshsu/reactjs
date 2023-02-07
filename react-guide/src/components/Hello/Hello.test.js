import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Hello from "./Hello";

test("renders with or without name", () => {
    act(() => {
        render(<Hello />);
    });

    expect(screen.getByText("Hey, Stranger").textContent).toBe("Hey, Stranger");

    act(() => {
        render(<Hello name="Mita"/>);
    });

    expect(screen.getByText("Hello, Mita").textContent).toBe("Hello, Mita");
});