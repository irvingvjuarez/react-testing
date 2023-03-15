export const apiFetch = () => {
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        { value: "1", label: "Item 1" },
        { value: "2", label: "Item 2" },
        { value: "3", label: "Item 3" }
      ]
    })
  })
}