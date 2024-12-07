/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Main from './components/main/weather__page.jsx'
// import { Modal } from 'antd'
// import { Carousel } from 'antd'
const App = () => {
  const [open, setOpen] = useState(false)
  // const contentStyle = {
  //   margin: 0,
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };
  return (
    <>
  <Main/>
  {/* <button onClick={() => setOpen(true)}>Open module window</button>
  <Modal open={open} onCancel={() => setOpen(false)}>
  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero hic a consequatur laboriosam quod!</h1>
  </Modal> */}
  {/* <Carousel autoplay={true} arrows={true}>
    <div>
      <h1 style={contentStyle}>Pervii</h1>
    </div>
    <div>
      <h1 style={contentStyle}>Vtoroi</h1>
    </div>
    <div>
      <h1 style={contentStyle}>Tretii</h1>
    </div>
  </Carousel> */}
    </>
  )
}

export default App
