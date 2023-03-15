import { renderHook } from "@testing-library/react"
import { act } from "@testing-library/react-hooks"
import { useCounter } from "."

const makeSut = () => renderHook(() => useCounter())

describe("useCounter", () => {
  test("The first counter value should be the 0", () => {
    const {result} = makeSut()

    expect(result.current.counter).toBe(0)
  })

  test("It should increment to 1", () => {
    const { result } = makeSut()
    act(() => {
      result.current.increase()
    })

    expect(result.current.counter).toBe(1)
  })

  test("It should decrement to -1", () => {
    const { result } = makeSut()

    act(() => {
      result.current.decrease()
    })

    expect(result.current.counter).toBe(-1)
  })
})