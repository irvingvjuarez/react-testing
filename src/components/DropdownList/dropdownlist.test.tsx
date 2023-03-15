import { render, fireEvent } from "@testing-library/react"
import { DropdownListProps, DataItem } from "./type"
import { DropdownList } from "./index"

const items: DataItem[] = [
  { value: "1", label: "Item 1" },
  { value: "2", label: "Item 2" },
  { value: "3", label: "Item 3" },
]

const labels = { show: "Show", hide: "Hide" }

const makeSut = (props: Partial<DropdownListProps>) => {
  return render(
    <DropdownList
      data={items}
      labels = {labels}
      onRemoveItem={jest.fn()}
    />
  )
}

describe("<DropdownList />", () => {
  test("The dropdown should not be rendered at the beginning", () => {
    const { container } = makeSut({})
    expect(container.querySelector("ul")).not.toBeInTheDocument()
  })

  test("The dropdown should be visible after click", () => {
    const { container, getByText } = makeSut({})
    fireEvent.click(getByText(labels.show))

    expect(container.querySelector("ul")).toBeInTheDocument()
  })

  test("The labels change after a click", () => {
    const { getByText } = makeSut({})
    expect(getByText(labels.show)).toBeInTheDocument()
    fireEvent.click(getByText(labels.show))

    expect(getByText(labels.hide)).toBeInTheDocument()
  })

  test("It should render 4 items correctly", () => {
    const { container, getByText } = makeSut({})
    fireEvent.click(getByText(labels.show))

    expect(container.querySelectorAll("li").length).toBe(items.length)
  })

  // test("It should call handleRemoveItem with the correct params", () => {
  //   const handleRemoveItem = jest.fn()
  //   const { getByText, getAllByText } = makeSut({})

  //   fireEvent.click(getByText(labels.show))
  //   fireEvent.click(getAllByText(/Remove/)[2])

  //   expect(handleRemoveItem).toHaveBeenCalledWith(items[2], 2)
  // })
})