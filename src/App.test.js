import React from "react";
import { render, screen } from '@testing-library/react';

import App from './App';

describe("Frist tests", ()=> {
    test("testing a test", ()=> {
        console.log("test is running");
    });

    test("testing a test", ()=> {
        console.log("test is running");
    });
});

test("when mounts header is rendered", ()=> {
    render(<App/>);

});