import React from 'react'
import './SingleVideo.css'

function SingleVideo1() {
    return (
    <div class="container">
        <div>
        <h1>Understanding the Meissner Effect</h1>
        <img src="data:image/jpeg;base64,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" alt="Meissner Effect Diagram" class="diagram"></img>
        </div>
        <div class="content">
            <h2>Overview</h2>
            <p>The Meissner effect is a fundamental phenomenon observed in superconducting materials when they transition into the superconducting state below their critical temperature. This effect involves the expulsion of all magnetic fields from the interior of the superconductor.</p>
            <h2>Key Points</h2>
            <ul>
                <li><strong>Critical Temperature:</strong> Superconductors need to be cooled below a specific temperature to exhibit superconductivity.</li>
                <li><strong>Exclusion of Magnetic Fields:</strong> Upon entering the superconducting state, the material expels internal magnetic fields to maintain zero internal magnetic flux.</li>
                <li><strong>Perfect Diamagnetism:</strong> The expulsion of magnetic fields is due to the material becoming a perfect diamagnet, where it completely repels external magnetic fields.</li>
                <li><strong>Flux Pinning:</strong> In type-II superconductors, magnetic fields can penetrate in the form of quantized tubes surrounded by supercurrents, without destroying superconductivity.</li>
                <li><strong>Applications:</strong> The Meissner effect allows for applications like magnetic levitation, used in technologies such as Maglev trains.</li>
            </ul>
        </div>
    </div>
    )
}

export default SingleVideo1