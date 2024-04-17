import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="video__container">
      <h1>Topic</h1>
      <ul className="video__card--ul">
        <li className="video__card"><a href="/learn/super1">Understanding Superconductors</a></li>
        <li className="video__card"><a href="/learn/super2">The Meissner Effect</a></li>
        <li className="video__card"><a href="/learn/super3">High-Temperature Superconductors</a></li>
        <li className="video__card"><a href="/learn/super4">Applications of Superconductivity</a></li>
        <li className="video__card"><a href="/learn/super5">The Future of Superconductivity</a></li>
      </ul>
    </div>
  )
}

export default Video;
