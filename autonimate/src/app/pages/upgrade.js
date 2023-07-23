import Menu from './components/menu.jsx'
import Gray from './components/gray.jsx'

export default function Upgrade() {
    return (
        <>
            <div id="OverallContainer" className="w-screen h-screen bg-black justify-center items-center flex">
                <div id="BackgroundContainer" className="w-screen h-screen grow shrink basis-0 self-stretch bg-neutral-900 justify-start items-start inline-flex">
                    <Menu />
                    <Gray />
                </div>
            </div>
        </>
    )
}