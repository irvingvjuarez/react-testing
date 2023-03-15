import { Button } from "./index"
import { render, fireEvent } from "@testing-library/react"

const makeSut = (props: Partial<ButtonProps>) => {
  return render(
    <Button
      label="label"
      onClick={jest.fn()}
      {...props}
    />
  )
}

describe("<Button />", () => {
  test("Should render the label correctly", () => {
    const { getByText } = makeSut({ label: "My Button" })
    expect(getByText(/My Button/)).toBeInTheDocument()
  })

  test("Should call onClick successfully", () => {
    const spy = jest.fn()
    const { getByText } = makeSut({ onClick: spy })

    fireEvent.click(getByText(/label/))

    expect(spy).toHaveBeenCalled()
  })
})