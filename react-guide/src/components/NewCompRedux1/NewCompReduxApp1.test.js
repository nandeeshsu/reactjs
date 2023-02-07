import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NewCompReduxApp1 from "./NewCompReduxApp1";
import Store from '../../Store/Store';
import { Provider } from 'react-redux';
//import { configureStore } from '@reduxjs/toolkit';
//import reducer from '../../Store/Reducer';
//import configureStore from 'redux-mock-store';

describe('With React Testing Library with Redux Connect function', () => {
    //const mockStore = configureStore({reducer});

    test("renders with text for 2nd redux example with connect", () => {

        act(() => {
            render(<Provider store={Store}> <NewCompReduxApp1 /></Provider>);
            //render(<Provider store={mockStore}> <NewCompReduxApp1 /></Provider>); // this stopped working after configuring multiple reducers. To make it work I could have configured multiple reducers here and made it work. However choose to use the original store
        });

        expect(screen.getByText("Subscribe to Redux with connect").textContent).toBe("Subscribe to Redux with connect");

    });

    test("renders with text for 2nd redux example with connect onClick", () => {

        act(() => {
            render(<Provider store={Store}> <NewCompReduxApp1 /></Provider>);
            //render(<Provider store={mockStore}> <NewCompReduxApp1 /></Provider>);
        });

        expect(screen.getByText("Subscribe to React Learning redux 2nd example with connect").textContent).toBe(" Subscribe to React Learning redux 2nd example with connect ");

        fireEvent.click(screen.getByRole("button", { name: "Subscribe to Redux with connect" }));

        expect(screen.getByText("Thanks for subscribing for redux 2nd example with connect").textContent).toBe(" Thanks for subscribing for redux 2nd example with connect ");
    });


});