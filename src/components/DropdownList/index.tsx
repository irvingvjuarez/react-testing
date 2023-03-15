import React, { useState } from "react"
import { Button } from "../Button"

export const DropdownList: React.FC<DropdownListProps> = ({
  data, onRemoveItem, labels
}) => {
  const [open, setOpen] = useState(false)
  const toggleDropdown = () => setOpen(prev => !prev)

  return (
    <div>
      <Button
        label={open ? labels.hide : labels.show}
        onClick={toggleDropdown}
      />

      {open && (
        <ul data-testid="dropdown-ul">
          {data.map((item, index) => (
            <li key={item.value} data-testid={`dropdown-li-${item.value}`}>
              {item.value}

              <button onClick={() => onRemoveItem(item, index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}