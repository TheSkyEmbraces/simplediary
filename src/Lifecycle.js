import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("마운트");
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div> 언마운트 테스트 컴포넌트</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggle}> on/off</button>
      {isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
