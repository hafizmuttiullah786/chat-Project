import React from 'react'
import GreatGrandChild from './GreatGrandChild';

const GrandChild = () => {
  return (
    <div className="grand-child">
      <p style={{ fontSize: "17px", fontWeight: "700" }}>
        {" "}
        Grand Child Component
      </p>
     <GreatGrandChild/>
    </div>
  );
}

export default GrandChild
