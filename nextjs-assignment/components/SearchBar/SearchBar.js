import React, { useState } from 'react'


function SearchBar(props) {
    const [searchValue, setSearchValue] = useState('')

    function handleInputChange(event) {
        setSearchValue(event.target.value)
    }

    function handleClearClick() {
        setSearchValue('')
    }

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
            />

            {shouldDisplayButton && (
                <button onClick={handleClearClick}>clear</button>
            )}

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredProducts.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SearchBar