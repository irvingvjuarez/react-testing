import { renderHook } from "@testing-library/react"
import { useCounter } from "."

const makeSut = () => renderHook(() => useCounter())

describe("useCounter", () => {
  test("The first counter value should be the 0", () => {
    const {result} = makeSut()

    expect(result.current.counter).toBe(0)
  })
})