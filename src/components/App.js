import React, {useState, useEffect} from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import Paragraph from "./Paragraph/Paragraph"

const App = () => {
  const [productsState, setProductsState] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsArray => {
        // store the full objects so SearchBar can read title/price/image
        setProductsState(productsArray)
      })
      .catch(err => {
        console.error("Error fetching products:", err)
      })
  }, [])  // important: empty dependency array so it runs only once

  const hasProducts = productsState.length > 0

  return (
    <div>
      <CountButton incrementBy={1} buttonColor={'green'} />
      <CountButton incrementBy={2} buttonColor={"red"} />
      <Paragraph />
     
      {hasProducts
        ? <SearchBar products={productsState} />
        : "Loading..."}
    </div>
  )
}

export default App