import React from 'react';
import { render, RenderResult, fireEvent, act } from '@testing-library/react';
import App from './App';

const makeSut = () => {
  return render(<App />)
}

describe("<App />", () => {
  test('The dropdown should be shown after to click the button', async () => {
    let screen: RenderResult

    screen = await act(async () => makeSut())
    const { getByText, container } = screen

    expect(getByText(/Show Data/)).toBeInTheDocument()
    fireEvent.click(getByText(/Show Data/))

    expect(container.querySelector("ul")).toBeInTheDocument()
  });
})
