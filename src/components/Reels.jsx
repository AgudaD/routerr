import React from "react";
import video from "./video";

function Reels(){
    return(
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nobis incidunt? Quisquam incidunt porro dolor ipsum. Sequi repudiandae fuga deserunt ratione consequatur nihil officia officiis optio iusto asperiores? Animi, minima.
            </p>
            <div>
                <video controls autostart autoPlay src={video}></video>
            </div>
        </div>
    );
}

export default Reels; 