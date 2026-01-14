/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState, useMemo } from "react";
import banner from "../assets/chatImgs/banner.png";

const nums = new Array(30000000).fill(0).map((_, i) => {
  return {
    index: i, // [index: 0, isMegical: false ]
    isMegical: i == 29000000,
  };
});

const BannerImage = memo(() => {
  return (
    <img
      src={banner}
      alt="sports"
      width={345}
      height={333}
      className="lp-main-image"
      loading="lazy"
    />
  );
});
const MemoPractice = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  console.log("numbers:", numbers);
  // const megical = numbers.find((item) => item.isMegical);

  const megical = useMemo(() => {
    return numbers.find((item) => item.isMegical);
  }, [numbers]);

  return (
    <div className="d-flex justify-content-center align-items-center p-5 flex-column">
      <div
        className="d-flex"
        style={{
          width: "100%",
          overflow: "auto",
        }}
      >
        <h2 className="item">{megical.index}</h2>

      </div>
      <BannerImage />
      <h2>{count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Update Count
      </button>
    </div>
  );
};

export default MemoPractice;
