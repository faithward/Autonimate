function Home() {
    return (
                <div id="MiddleContainer" className="w-full self-stretch items-center grow shrink relative rounded-[20px]">
                    <div id="MiddleGrey" className="w-full h-5/6 top-[32px] flex relative bg-neutral-700 rounded-[20px] justify-center">
                        <div id="MiddleText" className="w-5/6 h-full top-[110px] relative flex flex-col items-center">
                            <div id="HeaderContainer" className="w-full h-1/12 mb-4 left-0 top-0 self-stretch relative">
                                <div className="w-full top-0 relative text-center text-white text-4xl font-semibold leading-relaxed">Header</div>
                                <div className="w-full relative text-center text-gray-200 text-xl font-normal leading-relaxed">Lorem Ipsum</div>
                            </div>
                            <div id="AgentNameContainer" className="w-1/2 h-1/12 left-0 flex flex-col relative">
                                <div className="w-fit left-0 top-0 relative text-gray-200 text-xs font-medium leading-normal mb-1">Agent Name</div>
                                <div className="w-full h-min px-4 py-3 mt-1 left-0 relative bg-neutral-900 rounded-xl gap-3 inline-flex">
                                    <input type="text" id="AgentName" className="grow shrink basis-0 text-gray-100 text-opacity-50 text-xs font-normal bg-neutral-900 leading-tight" placeholder="Type here" />
                                </div>
                            </div>
                            <div id="ObjectiveContainer" className="w-1/2 h-1/5 mb-3 top-[20px] relative">
                                <div className="w-full h-1/6 left-0 top-0 absolute text-gray-200 text-xs font-medium leading-normal">Objective</div>
                                <div className="w-full grow shrink h-5/6 px-4 py-3.5 left-0 top-[26px] absolute bg-neutral-900 rounded-xl justify-start items-start gap-3 inline-flex">
                                    <textarea rows="8" className="grow shrink basis-0 text-gray-100 text-opacity-50 bg-neutral-900 text-xs font-normal leading-tight" placeholder="Type Here" />
                                </div>
                            </div>
                            <div id="TypeContainer" className="w-1/2 h-1/6 gap-x-3 gap-y-0 grid grid-cols-2 top-[20px] relative">
                                <div id="BrowsingContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex active:border-red-400">
                                    <div className="w-10 h-10 bg-violet-500 bg-opacity-20 rounded-xl justify-center items-center flex">
                                    </div>
                                    <div id="BrowsingText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                                        <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">Browsing</div>
                                    </div>
                                </div>
                                <div id="DefaultContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex active:border-red-400">
                                    <div className="w-10 h-10 relative bg-orange-400 bg-opacity-50 rounded-xl" />
                                    <div id="DefaultText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                                        <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">Default</div>
                                    </div>
                                </div>
                                <div id="CodingContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex active:border-red-400">
                                    <div className="w-10 h-10 bg-sky-500 bg-opacity-20 rounded-xl justify-center items-center flex">
                                        <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                                    </div>
                                    <div id="CodingText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                                        <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">Coding</div>
                                    </div>
                                </div>
                                <div id="FileContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex active:border-red-400">
                                    <div className="w-10 h-10 relative bg-green-400 bg-opacity-20 rounded-xl" />
                                    <div id="FileText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                                        <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">File (Pro)</div>
                                    </div>
                                </div>
                            </div>
                            <div id="AutoGenSwitchContainer" className="w-1/2 h-1/12 pb-1  my-2 justify-center inline-flex flex relative">
                                <div className="w-12 h-6 p-0.5 left-0 top-[4px] relative bg-orange-400 rounded-3xl justify-end items-center gap-2 inline-flex">
                                    <div className="w-5 h-5 relative bg-white rounded-3xl" />
                                </div>
                                <div className="w-max pl-2 top-0 relative text-white text-base font-medium leading-loose">Automatically generate tasks</div>
                            </div>
                            <div id="StartContainer" className="w-1/2 h-12 pt-3 pb-4 top-[24spx] relative bg-neutral-900 rounded-xl border border-gray-200 border-opacity-75 justify-center items-center inline-flex active:border-neutral-900">
                                <div className="text-center text-white text-base font-medium leading-tight">Start Agent</div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Home;