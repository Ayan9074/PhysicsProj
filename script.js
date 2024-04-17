document.getElementById('fieldIntensity').addEventListener('input', function() {
    const intensity = this.value;
    const superconductor = document.querySelector('.superconductor');
    const field = document.querySelector('.magnetic-field');
    const offset = (100 - intensity) * 2.5; // Calculate offset based on intensity
    const fieldSize = 300 + (intensity * 2); // Adjust the size of the field
    superconductor.style.bottom = `${offset}px`;
    field.style.width = `${fieldSize}px`;
    field.style.height = `${fieldSize}px`;
    field.style.bottom = `${-fieldSize / 4}px`; // Center the field around the superconductor
    document.getElementById('intensityValue').textContent = intensity;
});
