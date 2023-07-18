import Image from 'next/image'

export default function Home() {
  return (
    <div id="OverallContainer" className="w-screen h-full bg-black justify-center items-center flex">
      <div id="BackgroundContainer" className="w-screen grow shrink basis-0 self-stretch bg-neutral-900 justify-start items-start inline-flex">
        <div id="SideContainer" className="grow shrink basis-0 self-stretch bg-neutral-900 flex-col justify-between items-start gap-8 inline-flex">
          <div className="self-stretch h-[547px] flex-col justify-start items-start flex">
            <div className="self-stretch px-6 py-10 justify-between items-center gap-2 inline-flex">
              <img className="w-[212px] h-[71px]" src="https://via.placeholder.com/212x71" />
              <div className="w-[193.53px]" />
              <div className="w-6 h-6 relative">
                <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-neutral-900 rounded-sm border border-gray-200 border-opacity-75" />
                <div className="w-2 h-4 left-[4px] top-[4px] absolute bg-gray-200 bg-opacity-75 rounded-sm" />
              </div>
            </div>
            <div className="self-stretch h-[396px] p-2.5 border-b border-neutral-800 flex-col justify-start items-start flex">
              <div className="self-stretch h-[376px] p-2.5 flex-col justify-start items-center gap-px flex">
                <div className="h-36 relative">
                  <div className="w-[300px] h-12 px-5 py-3 left-0 top-0 absolute rounded-lg shadow shadow-inner justify-start items-center gap-5 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 text-white text-sm font-medium leading-tight">Home</div>
                  </div>
                  <div className="w-[300px] h-12 px-5 py-3 left-0 top-[48px] absolute rounded-lg justify-start items-center gap-5 inline-flex">
                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-5 flex">
                      <div className="w-6 h-6 relative" />
                      <div className="grow shrink basis-0 text-white text-sm font-medium leading-tight">Discover</div>
                    </div>
                  </div>
                  <div className="w-[300px] h-12 px-5 py-3 left-0 top-[96px] absolute rounded-lg justify-start items-center gap-5 inline-flex">
                    <div className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 text-white text-sm font-medium leading-tight">Settings</div>
                  </div>
                </div>
                <div className="w-80 h-[0px] border border-neutral-700 border-opacity-50"></div>
                <div className="w-[300px] h-[210px] justify-center items-center inline-flex">
                  <div className="self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="w-[319.50px] pl-[30px] pr-5 py-3 justify-start items-center gap-[180px] inline-flex">
                      <div className="justify-start items-center gap-5 flex">
                        <div className="w-6 h-6 relative origin-top-left -rotate-180" />
                        <div className="text-gray-100 text-sm font-medium leading-tight">Agents</div>
                      </div>
                    </div>
                    <div className="w-[319px] h-11 pr-[19px] justify-start items-center inline-flex">
                      <div className="w-[300px] pl-[30px] pr-2.5 py-2.5 rounded-lg justify-end items-start gap-[41px] inline-flex">
                        <div className="w-[195px] self-stretch relative">
                          <div className="w-[151px] left-[44px] top-0 absolute text-white text-sm font-semibold leading-normal">Research chatGPT</div>
                          <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-3.5 h-3.5 bg-gray-200 bg-opacity-50 rounded" />
                          </div>
                        </div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                          <div className="w-[16.25px] h-5 relative">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[319px] h-11 pr-[19px] justify-start items-center inline-flex">
                      <div className="w-[300px] pl-[30px] pr-2.5 py-2.5 rounded-lg justify-end items-start gap-[41px] inline-flex">
                        <div className="w-[195px] self-stretch relative">
                          <div className="w-[151px] left-[44px] top-0 absolute text-white text-sm font-semibold leading-normal">Best ice cream</div>
                          <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-3.5 h-3.5 bg-gray-200 bg-opacity-50 rounded" />
                          </div>
                        </div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                          <div className="w-[16.25px] h-5 relative">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-80 h-11 pr-5 justify-start items-center inline-flex">
                      <div className="w-[300px] pl-[30px] pr-2.5 py-2.5 rounded-lg justify-end items-start gap-[41px] inline-flex">
                        <div className="w-[195px] self-stretch relative">
                          <div className="w-[151px] left-[44px] top-0 absolute text-white text-sm font-semibold leading-normal">Youtube content idea </div>
                          <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                            <div className="w-3.5 h-3.5 bg-gray-200 bg-opacity-50 rounded" />
                          </div>
                        </div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                          <div className="w-[16.25px] h-5 relative">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[382px] px-2.5 pt-5 pb-[30px] flex-col justify-start items-center gap-2.5 flex">
            <div className="w-80 h-[0px] border border-neutral-700 border-opacity-50"></div>
            <div className="w-80 px-2.5 justify-between items-start gap-2.5 inline-flex">
              <div className="h-10 px-6 py-2 bg-neutral-700 rounded-[10px] justify-between items-start gap-2.5 flex">
                <div className="text-white text-base font-semibold leading-normal">Updates</div>
              </div>
              <div className="h-10 px-6 py-2 bg-white rounded-[10px] justify-between items-start gap-2.5 flex">
                <div className="text-neutral-900 text-base font-semibold leading-normal">FAQ</div>
              </div>
            </div>
            <div className="h-[272px] relative">
              <div className="w-[300px] h-12 left-0 top-0 absolute rounded-lg flex-col justify-start items-start inline-flex">
                <div className="w-[300px] h-1 bg-neutral-700 rounded-lg" />
                <div className="w-[163px] h-1 bg-gray-200 rounded-lg" />
                <div className="text-gray-200 text-opacity-75 text-sm font-semibold leading-normal">Usage</div>
                <div className="text-right text-gray-200 text-opacity-75 text-sm font-semibold leading-normal">550/1000</div>
              </div>
              <div className="w-[300px] h-36 p-2.5 left-0 top-[58px] absolute bg-neutral-700 rounded-xl flex-col justify-center items-start gap-[5px] inline-flex">
                <div className="self-stretch px-6 py-3 rounded-xl border border-neutral-800 justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-semibold leading-normal">Upgraded to Pro</div>
                </div>
                <div className="w-[280px] grow shrink basis-0 p-2.5 bg-neutral-900 rounded-xl border border-neutral-800 border-opacity-50 justify-start items-start gap-4 inline-flex">
                  <div className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-green-200 rounded-[25px] justify-center items-center inline-flex">
                      <img className="w-[78.75px] h-[78.78px]" src="https://via.placeholder.com/79x79" />
                    </div>
                    <div className="w-3 h-3 p-0.5 left-[28px] top-[28px] absolute justify-center items-center gap-2 inline-flex">
                      <div className="w-2.5 h-2.5 p-2 bg-neutral-700 rounded-[40px] border-2 border-neutral-900" />
                    </div>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch justify-between items-start inline-flex">
                      <div className="w-48 text-white text-sm font-semibold leading-normal">John Doe</div>
                      <div className="px-3 bg-neutral-700 rounded-lg justify-center items-center gap-2 flex">
                        <div className="text-center text-neutral-900 text-xs font-bold leading-normal">Free</div>
                      </div>
                    </div>
                    <div className="self-stretch h-4 text-gray-200 text-opacity-50 text-xs font-semibold leading-normal">johndoe@email.com</div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] h-[60px] pl-2.5 py-2.5 left-0 top-[212px] absolute rounded-lg justify-between items-center gap-5 inline-flex">
                <div className="w-[100px] h-10 relative">
                  <div className="w-10 h-10 p-2 left-0 top-0 absolute bg-gradient-to-b from-sky-400 to-sky-500 rounded-[40px] justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="w-10 h-10 px-[6.67px] pt-2.5 pb-[9.79px] left-[60px] top-0 absolute bg-indigo-500 rounded-xl justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[20.21px] relative flex-col justify-start items-start flex" />
                  </div>
                </div>
                <div className="px-6 py-2 bg-neutral-700 rounded-[10px] justify-center items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative" />
                  <div className="text-white text-sm font-semibold leading-normal">Feedback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="MiddleContainer" className="w-full h-5/6 grow shrink relative rounded-[20px]">
          <div id="MiddleGrey" className="w-11/12 h-5/6 mx-5 top-[40px] relative bg-neutral-700 rounded-[20px] justify-center">
            <div id="MiddleText" className="w-5/6 h-full top-[50px] relative flex flex-col justify-self-center">
              <div id="HeaderContainer" className="w-full h-1/6 left-0 top-0 self-stretch relative">
                <div className="w-full inset-x-0 top-0 relative text-center text-white text-4xl font-bold leading-relaxed">Header</div>
                <div className="w-full inset-x-0 relative text-center text-gray-200 text-xl font-semibold leading-relaxed">Lorem Ipsum</div>
              </div>
              <div id="AgentNameContainer" className="w-full h-1/12 left-0 top-[10px] relative">
                <div className="w-fit left-0 top-0 relative text-gray-200 text-sm font-semibold leading-normal">Agent Name</div>
                <div className="w-fit h-min px-4 py-3.5 left-0 relative bg-neutral-900 rounded-xl items-center gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-gray-100 text-opacity-50 text-sm font-medium leading-tight">Lorem Ipsum</div>
                </div>
              </div>
              <div id="ObjectiveContainer" className="w-5/6 h-1/3 top-[30px] relative">
                <div className="w-full h-1/6 left-0 top-0 absolute text-gray-200 text-sm font-semibold leading-normal">Objective</div>
                <div className="w-full grow shrink h-5/6 pl-4 py-3.5 left-0 top-[26px] absolute bg-neutral-900 rounded-xl justify-start items-start gap-3 inline-flex">
                  <div className="grow shrink basis-0 text-gray-100 text-opacity-50 text-sm font-medium leading-tight">Lorem Ipsum</div>
                </div>
              </div>
              <div id="TypeContainer" className="w-5/6 h-1/5 top-[40px] relative">
                <div id="BrowsingContainer" className="w-1/3 h-1/3 pl-4 pr-6 py-2.5 left-0 top-0 absolute bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 pl-[12.67px] pr-[12.33px] pt-[12.67px] pb-[12.33px] bg-violet-500 bg-opacity-20 rounded-xl justify-center items-center flex">
                    <div className="w-[15px] h-[15px] relative flex-col justify-start items-start flex">
                      <div className="w-80 h-80 relative" />
                      <div className="w-[15px] h-[15px] relative">
                      </div>
                    </div>
                  </div>
                  <div id="BrowsingText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-lg font-semibold leading-loose">Browsing</div>
                    <div className="p-2 rounded-[40px] justify-center items-center gap-2 flex" />
                  </div>
                </div>
                <div id="DefaultContainer" className="w-1/3 h-1/3 pl-4 pr-6 py-2.5 left-[315.87px] top-0 absolute bg-neutral-900 rounded-xl shadow border border-gray-100 justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 relative bg-orange-400 bg-opacity-50 rounded-xl" />
                  <div id="DefaultText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-lg font-semibold leading-loose">Default</div>
                  </div>
                </div>
                <div id="CodingContainer" className="w-1/3 h-1/3 pl-4 pr-6 py-2.5 left-0 top-[61px] absolute bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 px-2 pt-[8.50px] pb-[7.50px] bg-sky-500 bg-opacity-20 rounded-xl justify-center items-center flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                  <div id="CodingText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-lg font-semibold leading-loose">Coding</div>
                    <div className="p-2 rounded-[40px] justify-center items-center gap-2 flex" />
                  </div>
                </div>
                <div id="FileContainer" className="w-1/3 h-1/3 px-5 py-2.5 left-[315.87px] top-[61px] absolute bg-neutral-900 rounded-xl justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 relative bg-green-400 bg-opacity-20 rounded-xl" />
                  <div id="FileText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-lg font-semibold leading-loose">File (Pro)</div>
                    <div className="p-2 rounded-[40px] justify-center items-center gap-2 flex" /></div>
                </div>
              </div>
              <div id="AutoGenSwitchContainer" className="w-1/2 h-1/12 top-[26px] relative">
                <div className="w-12 h-6 p-0.5 left-0 top-[4px] relative bg-orange-400 rounded-3xl justify-end items-center gap-2 inline-flex">
                  <div className="w-5 h-5 relative bg-white rounded-3xl" />
                </div>
                <div className="w-max left-14 top-0 absolute text-white text-lg font-semibold leading-loose">Automatically generate tasks</div>
              </div>
              <div id="StartContainer" className="w-5/6 h-12 pt-3 pb-4 top-[36px] relative bg-neutral-900 rounded-xl border border-gray-200 border-opacity-75 justify-center items-center inline-flex">
                <div className="text-center text-white text-lg font-semibold leading-tight">Start Agent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
