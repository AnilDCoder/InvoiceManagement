import React from "react";
import { Link } from "react-router-dom";

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>This is my profile</h1>
                <Link to="/">Go back to home</Link>
                <div>
                    {/* <img src="https://wallpaperaccess.com/full/30100.jpg"></img> */}
                </div>
            </div>
        );
    }
}


