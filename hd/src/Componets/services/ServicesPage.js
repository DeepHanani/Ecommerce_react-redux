import React from 'react'
import './Services.css'

export default function ServicesPage(){
  return (
    <>
    
    <div className='feature'>
    <h1>Our Feature and Services</h1>
    <div className='mainServicesdiv'>


    <div className='child'>
       <div className='imgDiv'>
       <img src='https://cdn-icons-png.flaticon.com/512/838/838615.png'/>
       </div>
       <h3>Communications</h3>
       <p>Communication is the solvent of all problems and is the foundation for personal development</p>
    </div>

    <div className='child'>
    <div className='imgDiv'>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjiu7YrDulEiHgcvyxUqfqUQkD6ZBPr6gCQ&usqp=CAU'/>
       </div>
       <h3>Pet Boarding</h3>
       <p>consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.</p>
    </div>

    <div className='child'>
    <div className='imgDiv'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoeLtjkL2RGWPRQlVL0lwbk-fkTgT5RDFNQ&usqp=CAU'/>
    </div>
    <h3>Technology</h3>
    <p>It has become appallingly obvious that our technology has exceeded our humanity..</p>
    </div>


    
    </div>

    </div>

    </>
  )
}
