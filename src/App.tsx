import React, { useState, useEffect } from 'react';
import { DataItem } from './components/DropdownList/type';
import { apiFetch } from './services/api-fetch';
import { DropdownList } from "./components/DropdownList"
import './App.css';

function App() {
  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(true)
  const handleRemoveItem = (item: DataItem, index: number) => {
    const filteredData = data.filter(i => i.value !== item.value)
    setData(filteredData)
  }

  useEffect(() => {
    apiFetch()
      .then((items: any) => {
        setLoading(false)
        setData(items.data)
      })
  }, [])

  return (
    <div className="App">
      {loading && (
        <h2>Loading...</h2>
      )}

      {data.length > 0 && (
        <DropdownList
          data={data}
          onRemoveItem={handleRemoveItem}
          labels={{
            show: "Show Data",
            hide: "Hide Data"
          }}
        />
      )}
    </div>
  );
}

export default App;
