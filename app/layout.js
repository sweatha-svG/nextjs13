
import React, { children } from 'react'
import '@styles/globals.css'

import Provider from '@component/Provider'
import Nav from '@component/Nav'
export const metadata={
    title:"Tutorial",
    decription:"discover ai prompts"
}
const Rootlayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <Provider>

        
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav/>
                <Provider/>
                {children}
            </main>
        </Provider>
    </body>

   </html>
  )
}

export default Rootlayout
