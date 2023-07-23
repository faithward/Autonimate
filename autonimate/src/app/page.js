import Image from 'next/image'

export default function Home() {
  return (
    <div id="OverallContainer" className="w-screen h-screen bg-black justify-center items-center flex">
      <div id="BackgroundContainer" className="w-screen h-screen grow shrink basis-0 self-stretch bg-neutral-900 justify-start items-start inline-flex">
        <div id="SideContainer" className="grow shrink basis-0 self-stretch bg-neutral-900 flex-col justify-start items-start gap-2">
          <div id="TopSideContainer" className="self-stretch h-1/2 flex-col justify-start items-start flex">
            <div id="LogoContainer" className="self-stretch grow shrink h-1/4 px-6 pt-2 justify-between items-center gap-2 inline-flex">
              <img id="Logo" className="w-3/4 grow shrink" src="https://via.placeholder.com/212x71" />
              <div id="Spacing" className="w-2/3" />
              <div id="CondenseButton" className="w-6 h-6 relative">
                <div className="w-5 h-5 left-[2px] top-[2px] absolute bg-neutral-900 rounded-sm border border-gray-200 border-opacity-75" />
                <div className="w-2 h-4 left-[4px] top-[4px] absolute bg-gray-200 bg-opacity-75 rounded-sm" />
              </div>
            </div>
            <div id="MenuContainer" className="self-stretch h-3/4 p-1 border-b border-neutral-800 flex-col justify-start items-start flex">
              <div id="InnerMenuContainer" className="self-stretch h-11/12 p-1 flex-col justify-start items-center gap-px flex">
                <div id="NavigateContainer" className="h-2/5 w-full flex pb-1 flex-col relative">
                  <div id="HomeLink" className="h-1/3 px-5 left-0 relative flex rounded-lg shadow shadow-inner justify-start items-center gap-2 inline-flex">
                    <div id="HomeIcon" className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 text-white text-xs font-normal leading-tight">Home</div>
                  </div>
                  <div id="DiscoverLink" className="h-1/3 px-5 left-0 relative flex rounded-lg justify-start items-center gap-2 inline-flex">
                      <div id="DiscoverIcon" className="w-6 h-6 relative" />
                      <div className="grow shrink basis-0 text-white text-xs font-normal leading-tight">Discover</div>
                  </div>
                  <div id="SettingsLink" className="h-1/3 px-5 left-0 relative flex rounded-lg justify-start items-center gap-2 inline-flex">
                    <div id="SettingsIcon" className="w-6 h-6 relative" />
                    <div className="grow shrink basis-0 text-white text-xs font-normal leading-tight">Settings</div>
                  </div>
                </div>
                <div className="w-full h-[0px] m-1 border border-neutral-700 border-opacity-50"></div>
                <div id="AgentsContainer" className="w-full h-3/5 justify-center items-center">
                  <div id="InnerAgentsContainer" className="w-full self-stretch flex-col justify-start items-start gap-1 inline-flex">
                    <div id="AgentsLabel" className="h-1/4 pl-1 py-2 justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-center gap-3 flex">
                        <div className="w-6 h-6 relative origin-top-left -rotate-180" />
                        <div className="text-gray-100 text-xs font-normal leading-tight">Agents</div>
                      </div>
                    </div>
                    <div id="AgentOption1" className="h-1/4 justify-start items-center inline-flex">
                      <div className="w-[300px] pl-1 rounded-lg justify-end items-start gap-1 inline-flex">
                        <div className="w-[195px] self-stretch relative">
                          <div className="w-[151px] left-[44px] top-0 absolute text-white text-xs font-medium leading-normal">Research chatGPT</div>
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
                    <div id="AgentOption2" className="h-1/4 justify-start items-center inline-flex">
                      <div className="w-[300px] pl-1 rounded-lg justify-end items-start gap-1 inline-flex">
                        <div className="w-[195px] self-stretch relative">
                          <div className="w-[151px] left-[44px] top-0 absolute text-white text-xs font-medium leading-normal">Best ice cream</div>
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
                    <div id="AgentOption3" className="h-1/4 justify-start items-center inline-flex">
                      <div className="w-[300px] pl-1 rounded-lg justify-end items-start gap-1 inline-flex">
                        <div className="w-[195px] self-stretch relative">
                          <div className="w-[151px] left-[44px] top-0 absolute text-white text-xs font-medium leading-normal">Youtube content idea </div>
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
          <div id="BottomSideContainer" className="self-stretch h-1/3 px-2.5 flex-col justify-start items-center gap-2.5 flex">
            <div className="w-80 h-[0px] border border-neutral-700 border-opacity-50"></div>
            <div id="InfoContainer" className="w-80 px-2.5 justify-between items-start gap-2.5 inline-flex">
              <div id="UpdatesLink" className="h-10 px-6 py-2 bg-neutral-700 rounded-[10px] justify-between items-start gap-2.5 flex">
                <div className="text-white text-sm font-medium leading-normal">Updates</div>
              </div>
              <div id="FAQLink" className="h-10 px-6 py-2 bg-white rounded-[10px] justify-between items-start gap-2.5 flex">
                <div className="text-neutral-900 text-sm font-medium leading-normal">FAQ</div>
              </div>
            </div>
            <div id="PersonalContainer" className="h-[272px] relative">
              <div id="UsageContainer" className="w-[300px] h-12 left-0 top-0 relative rounded-lg flex-col justify-start items-start inline-flex">
                <div className="w-[300px] h-1 bg-neutral-700 rounded-lg" />
                <div className="w-[163px] h-1 bg-gray-200 rounded-lg" />
                <div className="text-gray-200 text-opacity-75 text-xs font-medium leading-normal">Usage</div>
                <div className="text-right text-gray-200 text-opacity-75 text-xs font-medium leading-normal">550/1000</div>
              </div>
              <div id="UserContainer" className="w-[300px] h-36 p-2.5 left-0 top-[20px] relative bg-neutral-700 rounded-xl flex-col justify-center items-start gap-[5px] inline-flex">
                <div id="ProButton" className="self-stretch px-6 py-3 rounded-xl border border-neutral-800 justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-xs font-medium leading-normal">Upgraded to Pro</div>
                </div>
                <div id="ProfileSection" className="w-[280px] grow shrink basis-0 p-2.5 bg-neutral-900 rounded-xl border border-neutral-800 border-opacity-50 justify-start items-start gap-4 inline-flex">
                  <div id="ProfilePicture" className="w-10 h-10 relative">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-green-200 rounded-[25px] justify-center items-center inline-flex">
                      <img className="w-[78.75px] h-[78.78px]" src="https://via.placeholder.com/79x79" />
                    </div>
                    <div className="w-3 h-3 p-0.5 left-[28px] top-[28px] absolute justify-center items-center gap-2 inline-flex">
                      <div className="w-2.5 h-2.5 p-2 bg-neutral-700 rounded-[40px] border-2 border-neutral-900" />
                    </div>
                  </div>
                  <div id="NameSection" className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch justify-between items-start inline-flex">
                      <div id="Name" className="w-48 text-white text-xs font-medium leading-normal">John Doe</div>
                      <div id="AccountType" className="px-3 bg-neutral-700 rounded-lg justify-center items-center gap-2 flex">
                        <div className="text-center text-neutral-900 text-xs font-semibold leading-normal">Free</div>
                      </div>
                    </div>
                    <div id="Email" className="self-stretch h-4 text-gray-200 text-opacity-50 text-xs font-medium leading-normal">johndoe@email.com</div>
                  </div>
                </div>
              </div>
              <div id="LinkContainer" className="w-[300px] h-[60px] pl-2.5 py-2.5 left-0 top-[30px] relative rounded-lg justify-between items-center gap-3 inline-flex">
                <div id="SocialMediaContainer" className="w-[100px] h-10 relative">
                  <div id="MediaLink1" className="w-10 h-10 p-2 left-0 top-0 absolute bg-gradient-to-b from-sky-400 to-sky-500 rounded-[40px] justify-center items-center inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                  <div id="MediaLink2" className="w-10 h-10 px-[6.67px] pt-2.5 pb-[9.79px] left-[60px] top-0 absolute bg-indigo-500 rounded-xl justify-center items-center inline-flex">
                    <div className="w-[26.67px] h-[20.21px] relative flex-col justify-start items-start flex" />
                  </div>
                </div>
                <div id="FeedbackButton" className="px-6 py-2 bg-neutral-700 rounded-[10px] justify-center items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative" />
                  <div className="text-white text-xs font-medium leading-normal">Feedback</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <div id="BrowsingContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 bg-violet-500 bg-opacity-20 rounded-xl justify-center items-center flex">
                  </div>
                  <div id="BrowsingText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">Browsing</div>
                  </div>
                </div>
                <div id="DefaultContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 relative bg-orange-400 bg-opacity-50 rounded-xl" />
                  <div id="DefaultText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">Default</div>
                  </div>
                </div>
                <div id="CodingContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex">
                  <div className="w-10 h-10 bg-sky-500 bg-opacity-20 rounded-xl justify-center items-center flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                  <div id="CodingText" className="grow shrink basis-0 self-stretch justify-start items-center gap-1 flex">
                    <div className="grow shrink basis-0 text-white text-base font-medium leading-loose">Coding</div>
                  </div>
                </div>
                <div id="FileContainer" className="w-full pl-3 h-2/3 relative bg-neutral-900 rounded-xl border border-neutral-900 justify-start items-center gap-6 inline-flex">
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
              <div id="StartContainer" className="w-1/2 h-12 pt-3 pb-4 top-[24spx] relative bg-neutral-900 rounded-xl border border-gray-200 border-opacity-75 justify-center items-center inline-flex">
                <div className="text-center text-white text-base font-medium leading-tight">Start Agent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
