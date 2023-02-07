import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NewCompReduxApp from "./NewCompReduxApp";
import Store from '../../Store/Store';
import { Provider } from 'react-redux';

test("renders with text", () => {
    // const wrapper = ({ children }) => (
    //     <Provider store={Store}>{children}</Provider>
    // );

    act(() => {
        render(<Provider store={Store}> <NewCompReduxApp /></Provider>);
        //render( <NewCompReduxApp /> );
    });

    expect(screen.getByText("Subscribe to React Learning redux").textContent).toBe(" Subscribe to React Learning redux ");

});