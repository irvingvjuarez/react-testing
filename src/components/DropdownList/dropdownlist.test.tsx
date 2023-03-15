import { render, fireEvent } from "@testing-library/react"
import { DropdownList } from "./index"

const items: DataItem[] = [
  {
    value: "11",
    label: "First Item"
  },
  {
    value: "12",
    label: "Second Item"
  },
  {
    value: "13",
    label: "Third Item"
  },
  {
    value: "14",
    label: "Fourth Item"
  }
]

const handleRemoveItem = (item: DataItem, index: number) => {
  const itemExists = items.findIndex(i => i.value === item.value)
  if (itemExists >= 0) {
    const chosenIndex = items.splice(index, 1)[0]
    return chosenIndex
  }
  
  return null
}

const makeSut = (props: Partial<DropdownListProps>) => {
  return render(
    <DropdownList
      data={items}
      labels = {{
        show: "Show",
        hide: "Hide"
      }}
      onRemoveItem={handleRemoveItem}
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
    fireEvent.click(getByText(/Show/))

    expect(container.querySelector("ul")).toBeInTheDocument()
  })

  test("The labels change after a click", () => {
    const { getByText } = makeSut({})
    expect(getByText(/Show/)).toBeInTheDocument()
    fireEvent.click(getByText(/Show/))

    expect(getByText(/Hide/)).toBeInTheDocument()
  })
})