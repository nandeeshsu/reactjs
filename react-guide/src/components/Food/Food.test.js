import { render, screen, within, fireEvent } from "@testing-library/react";
import Food from "./Food";

test("purchaseFunction called with correct product slug on Dog Food click", () => {
    
    //const mock = jest.spyOn(Food.prototype as any, "purchase");
    const logSpy = jest.spyOn(console, 'log');

    render(<Food />);
  
    // Get the specific card and bind to query functions using within.
    const DogFoodCard = within(screen.getByText("Dog Food").parentElement);
  
    expect(DogFoodCard.getByRole("button", { name: "Buy Item" })).toBeEnabled();

    // Now we can click the specific button within that card.
    fireEvent.click(DogFoodCard.getByRole("button", { name: "Buy Item" }));
  
    expect(logSpy).toHaveBeenCalledWith("dog-food");
  });