import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {

  const [seachQuery, setSearchQuery] = useState("");

  const onLogout = () => {
    const navigate = useNavigate;

    navigate("/login")
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const onClearSearch = () => { 
    setSearchQuery("")
  }

  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
          <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

          <SearchBar value={seachQuery} onChange={onChange} onClearSearch={onClearSearch}/>

          <ProfileInfo onLogout={onLogout}/>
      </div>
    </>
  )
}

export default Navbar