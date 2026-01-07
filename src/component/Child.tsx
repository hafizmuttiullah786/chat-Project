import React from 'react'
import GrandChild from './GrandChild';

const Child = () => {
  return (
    <>
      <div className="child">
        <p style={{ fontSize: "17px", fontWeight: "700" }}>Child Component</p>
        <GrandChild/>
      </div>
    </>
  );
}

export default Child
