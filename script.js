function calculateBCT() {
    // Get input values
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const layers = parseFloat(document.getElementById('layers').value);
    const pallets = parseFloat(document.getElementById('pallets').value);
    const loss = parseFloat(document.getElementById('loss').value);
    const flute = document.getElementById('flute').value;

    // Example board specifications based on flute type
    const fluteSpecs = {
        'A': { ECT: 44, thickness: 4.8 },
        'B': { ECT: 37, thickness: 3.2 },
        'C': { ECT: 39, thickness: 4.0 },
        'E': { ECT: 23, thickness: 1.6 }
    };

    const boardSpec = fluteSpecs[flute];
    const perimeter = 2 * (length + width);

    // McKee formula constant (example value, should be calibrated)
    const k = 5.87;

    // Calculate BCT Minimum using McKee formula
    const bctMin = k * boardSpec['ECT'] * Math.sqrt(perimeter * boardSpec['thickness']);

    // Calculate BCT Required (example calculation, should be adjusted)
    const bctRequired = (weight * layers * pallets) * (1 - (loss / 100));

    // Display results
    document.getElementById('boardSpec').innerText = `Board Specification: ${JSON.stringify(boardSpec)}`;
    document.getElementById('bctRequired').innerText = `BCT Required: ${bctRequired.toFixed(2)} N`;
    document.getElementById('bctMin').innerText = `BCT Minimum: ${bctMin.toFixed(2)} N`;
}
