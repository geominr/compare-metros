

function createMapLegend(metric, description, paint) {
  // Get the fill color ramp and stops from the paint object
  var fillColor = paint['fill-color'];
  var stops = fillColor.slice(3);
  var colors = stops.filter((color, index) => index % 2 !== 0)

  // Create a container for the legend
  const legendContainer = document.createElement('div');
  legendContainer.classList.add('legend-container');
  legendContainer.id = 'legend';

  // Create a title for the legend
  const legendTitle = document.createElement('p');
  legendTitle.classList.add('legend-title');
  legendTitle.textContent = metric;
  legendContainer.appendChild(legendTitle);

  // Create a hidden description for the legend
  const legendDescription = document.createElement('p');
  legendDescription.classList.add('legend-description');
  legendDescription.id = 'legend-desc';
  legendDescription.textContent = description;
  legendContainer.appendChild(legendDescription);

  // Create an info icon that toggles the description.
  const infoToggle = document.createElement('span');
  infoToggle.classList.add('toggle-description');
  infoToggle.textContent = 'More Info';
  infoToggle.addEventListener('click', () => {
    if (infoToggle.textContent === 'Hide Info') {
      document.getElementById('legend-desc').style.display = 'none';
      infoToggle.textContent = 'More Info';
    }
    else {
      document.getElementById('legend-desc').style.display = 'block';
      infoToggle.textContent = 'Hide Info';
    }

  });
  legendContainer.appendChild(infoToggle);

  // Create a gradient bar for the legend
  const gradientBar = document.createElement('div');
  gradientBar.classList.add('gradient-bar');
  gradientBar.style.background = `linear-gradient(to right, ${colors.join(", ")})`;
  gradientBar.style.opacity = paint['fill-opacity'].slice(-1)[0];
  legendContainer.appendChild(gradientBar);

  const labelContainer = document.createElement('div');
  labelContainer.classList.add('legend-labels');
  // Create a div for each stop in the fill color ramp
  for (var i = 0; i < stops.length; i += 2) {
    var stop = stops[i];
    const stopLabel = document.createElement('div');
    //stopLabel.style.width = legendContainer.style.width / colors.length;
    stopLabel.classList.add('stop-label');
    stopLabel.textContent = stop.toLocaleString();
    labelContainer.appendChild(stopLabel);
    legendContainer.appendChild(labelContainer);
  }

  return legendContainer;
}
