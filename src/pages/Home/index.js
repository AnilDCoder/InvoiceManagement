import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button } from "antd";

const Home = () => {
    const [name, setname] = useState("")
    // render() {
    useEffect(() => {
        setname("Home Page")
    }, [])
    return (
        <div>
            <h1>{name}</h1>

            <Link to="/profile">Go back to profile</Link>
            <Button>Hello</Button>
            <div>
                {/* <img src="https://wallpaperaccess.com/full/30100.jpg"></img> */}
            </div>
        </div>
    );
    // }
}

export default Home
