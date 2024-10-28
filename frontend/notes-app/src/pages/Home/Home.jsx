import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='container mx-auto'>
      <NoteCard 
      title={"test"} 
      date={"2023-01-01"} 
      content={"content long test content long test content long test content long test content long test content long test"} 
      tags="tag 1"
      isPinned={true}
      onEdit={() => {}}
      onDelete={() => {}}
      onPinNote={() => {}}
      />
    </div>
    </>
  )
}

export default Home