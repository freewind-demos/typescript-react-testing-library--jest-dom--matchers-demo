import React from 'react';
import {render} from "@testing-library/react";
import Hello from "./hello";

describe('Hello', () => {
  test('handle onChange', () => {
    const {container} = render(<Hello/>)

    const checkbox = container.querySelector<HTMLInputElement>('input[type=checkbox]')
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeInTheDocument();
  });
})
