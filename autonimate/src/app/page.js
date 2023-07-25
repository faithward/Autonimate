import Image from 'next/image'
import Menu from './components/menu.jsx'
import Home from './components/home.jsx'
import RootLayout from './layout.js'
import Gray from './components/gray.jsx'
import FeedbackPopup from './components/feedbackPopup.jsx'

export default function Homepage() {
  return (
    <>
      <div id="OverallContainer" className="w-screen h-screen bg-black justify-center items-center flex">
        <div id="BackgroundContainer" className="w-screen h-screen grow shrink basis-0 self-stretch bg-neutral-900 justify-start items-start inline-flex">
                <FeedbackPopup />
              </div>
            </div>
    </>
  )
}
