import Image from 'next/image'
import Menu from './components/menu.jsx'
import  Center  from './components/center.jsx'
import RootLayout from './layout.js'

export default function Home() {
  return (
    <>
      <div id="OverallContainer" className="w-screen h-screen bg-black justify-center items-center flex">
        <div id="BackgroundContainer" className="w-screen h-screen grow shrink basis-0 self-stretch bg-neutral-900 justify-start items-start inline-flex">
              <Menu />
              <Center />
              </div>
            </div>
    </>
  )
}
