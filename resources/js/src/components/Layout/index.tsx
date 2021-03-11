import Navbar from '@components/Navbar'
import React from 'react'

interface ILayout {
  children: React.ReactNode
  isSinglePage?: boolean
}
function Layout(props: ILayout) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-lg pt-5 pb-20">
        <div className="flex flex-row">
          {!props.isSinglePage && <div className="w-3/12"></div>}

          <div className={`${props.isSinglePage ? 'w-full' : 'w-9/12 pl-5'} `}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
