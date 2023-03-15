import { Button } from "./index"
import { render } from "@testing-library/react"

const makeSut = (props: Partial<ButtonProps>) => {
  return render(
    <Button
      label="label"
      onClick={() => console.log("Hello World")}
      {...props}
    />
  )
}

describe("<Button />", () => {
  test("Should render the label correctly", () => {
    const { getByText } = makeSut({ label: "My Button" })
    expect(getByText(/My Button/)).toBeInTheDocument()
  })
})