import React, { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  });

  return (
    <>
      <p>
        This is the current time:{" "}
        <b>
          {time.toLocaleDateString()} -{time.toLocaleTimeString()}
        </b>
      </p>
    </>
  );
}

export default CurrentTime;
