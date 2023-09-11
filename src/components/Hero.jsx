import React from "react";

export default function Hero(props) {
  return (
    <div className="flex flex-col w-[100%] items-center">
      <div>{props.children}</div>

      <div>Hero</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit impedit est provident fugiat nihil dolore unde debitis libero sequi quam voluptatibus qui, distinctio temporibus dicta, aspernatur vero ratione ad fugit.
    </div>
  );
}
