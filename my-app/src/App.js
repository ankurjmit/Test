import './App.css';
import { useState } from 'react'
import AutocompleteInput from './AutocompleteInput'
import { debounce } from './utils'
import ItemList from './itemList';

function App() {
  const noResultId = 'test'
  const [suggestions, setSuggestions] = useState([])
  const onChangeHandler = (e) => {
    betterGetData(e.target.value)
  }
  const hideListHandler = (e) => {
    setSuggestions([])
  }

  const getAutoCompleteResults = async (text) => {
    try {
      const results = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`)
      if (results.status === 200) {
        const response = await results.json()
        setSuggestions(response.results)
      } else {
        setSuggestions([{ id: noResultId, name: 'No result found, Try changing keyword' }])
      }
    } catch (error) {
      console.log(error)

    }

  }
  const itemOnClickHandler = (item) => {
    if (item.id === noResultId) return;
    alert(`You have selected ${item.name}`)

  }
  const betterGetData = debounce(getAutoCompleteResults, 300)

  return (
    <div className="App" onClick={hideListHandler}>
      <h1>Welcome to CARS24</h1>
      <AutocompleteInput onChangeHandler={onChangeHandler} />
      <ItemList data={suggestions} onClickHandler={itemOnClickHandler} />
    </div >
  );
}

export default App;
