import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const App = () => {
  const [name, setname] = useState("")
  // render() {
  useEffect(() => {
    setname("Home Page")
  }, [])
  return (
    <div>
      App
    </div>
  );
  // }
}

export default App
