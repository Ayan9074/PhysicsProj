import React from 'react'
import './SingleVideo.css'

function SingleVideo() {
    return (
        <div className="video__player--container">
            <h1 className="video__player--head" >Understanding Superconductors</h1>
            <h1>Discovering Superconductors</h1>
            <div class="container">
                <div class="content">
                    <h2>What Are Superconductors?</h2>
                    <p>Imagine a material that lets electricity flow through it without any resistance. That's what superconductors do at very cold temperatures. There are two main kinds: Type I, which completely expels magnetic fields and has no electrical resistance, and Type II, which can handle stronger magnetic fields before they start to lose these super properties.</p>

                    <h2>Cooper Pairs: The Secret Behind Superconductivity</h2>
                    <p>In superconductors, something magical called Cooper pairs occurs. These are electron pairs that team up and glide through the material without scattering, thanks to forces that attract them together. This unique partnership is what allows superconductors to conduct electricity flawlessly without resistance.</p>
                </div>
        <div class="video">
            <iframe width="100%" height="315" src="https://packaged-media.redd.it/38g6m0q0o4351/pb/m2-res_1080p.mp4?m=DASHPlaylist.mpd&v=1&e=1713286800&s=1b8812bffc1d5ce830af7acda4e933f0a2cfafaf#t=0   " frameborder="0" allowfullscreen></iframe>
        </div>
    </div>



        </div>
    )
}

export default SingleVideo
