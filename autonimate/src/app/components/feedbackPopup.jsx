'use client'
import SadIcon from "../icons/SadIcon";
import NeutralIcon from "../icons/NeutralIcon";
import HappyIcon from "../icons/HappyIcon";
import ExcitedIcon from "../icons/ExcitedIcon";
import React, { useState, useEffect } from 'react';

function FeedbackPopup () {
    const [face, setFace] = useState("none");
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);
    const [button4, setButton4] = useState(false);

    function faceHelper (emotion, button) {
        setFace(emotion)
        console.log(button)
        if (button == 1) {
            setButton1(true)
        } else if (button == 2) {
            setButton2(true)
        } else if (button == 3) {
            setButton3(true)
        } else {
            setButton4(true)
        }
    }

    useEffect(() => {
        console.log(face)
    })

    return (
        <div id="LittleGray" className="w-2/5 h-2/5 p-10 bg-neutral-700 rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
        <div id="InnerBoxes" className="flex-col justify-start items-start gap-3 flex">
            <div id="FeedbackTitle" className="text-white text-2xl pb-2 font-semibold leading-10">Feedback</div>
            <div id="MiddleContainer" className="w-full flex-col justify-start items-start flex">
                <div className="flex-col justify-center items-start gap-1 flex">
                    <div id="Subtitle" className="text-white text-lg font-medium leading-normal">Tell us how we can improve</div>
                    <div id="InputBox" className="w-11/12 h-40 pl-5 pr-[443px] pt-3 pb-32 bg-neutral-900 rounded-xl justify-start items-center">
                        <textarea rows="6" id="InputText" className="grow shrink relative text-center text-gray-200 bg-neutral-900 text-opacity-50 text-md font-medium leading-tight" placeholder="Your Feedback..." />
                    </div>
                </div>
                <div id="FaceButtons" className="justify-start items-center pt-5 pb-7 gap-2.5 inline-flex">
                    <button id="Button1" onClick={() => faceHelper("sad", 1)} style={{ backgroundColor: button1 ? "rgb(38 38 38)" : "none" }} className="w-[30px] h-[30px] relative"><SadIcon /></button>
                    <button id="Button2" onClick={() => faceHelper("neutral", 2)} style={{ backgroundColor: button2 ? "rgb(38 38 38)" : "none" }} className="w-[30px] h-[30px] relative"><NeutralIcon /></button>
                    <button id="Button3" onClick={() => faceHelper("happy", 3)} style={{ backgroundColor: button3 ? "rgb(38 38 38)" : "none" }} className="w-[30px] h-[30px] relative"><HappyIcon /></button>
                    <button id="Button4" onClick={() => faceHelper("excited", 4)} style={{ backgroundColor: button4 ? "rgb(38 38 38)" : "none" }} className="w-[30px] h-[30px] relative"><ExcitedIcon /></button>
                </div>
            </div>
            <div id="SendButton" className="w-11/12 h-12 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch px-6 py-3.5 bg-orange-400 rounded-xl justify-center items-center gap-2 flex">
                    <div id="SendText" className="text-neutral-900 text-lg font-semibold leading-normal">Send</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeedbackPopup;