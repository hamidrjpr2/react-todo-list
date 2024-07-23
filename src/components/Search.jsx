import React, {useState} from 'react'

export default function Search({ handleSearch }) {
    const [search, setSearch] = useState('')
    return (
        <>
            <div className='search-bar'>
                <input type="text"
                       placeholder='Search'
                       value={search}
                       onChange={(e) => setSearch(e.target.value)}
                       onInput={(e) => handleSearch(e.target.value)}
                ></input>
            </div>
        </>
    )
}