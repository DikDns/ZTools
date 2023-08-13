"use client";
import { useState } from "react";
import Input from "@/components/Input";
import { MotionOpacity } from "@/components/Motion";

export default function page() {
  const [input, setInput] = useState("");
  return (
    <MotionOpacity>
      <div className="flexCenterMargin">
        <div>
          <h1>Send whatsapp message{" "}
            <span className="text-aqua">without save number</span>
          </h1>
          <p className="descCenter">
            Just simply put number and you ready to go
          </p>
        </div>
        <form className="w-full h-full flex flex-col gap-5 items-center">
          <Input
            label="Number"
            name="Send Whatsapp"
            placeholder="ex: 62555666777"
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn h-12">
            <a href={`https://wa.me/${input}`}>send</a>
          </button>
        </form>
      </div>
    </MotionOpacity>
  );
}
