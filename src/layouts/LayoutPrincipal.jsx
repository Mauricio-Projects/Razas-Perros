import React from 'react'
import Header from 'componets/Header'
import Footer from 'componets/Footer'

const LayoutPrincipal = ( { children }) => {
  return (
    <>
    <div className="mainContainer" >
        <Header />
        <main> { children } </main>
        <Footer /> 
        </div>
    </>
  )
}

export default LayoutPrincipal