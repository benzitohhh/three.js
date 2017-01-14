// To create a simple animation...

// 1. Add a few boxes (and move their positions)

// 2. Add a pointlight

// 3. Select the pointlight, and add the below script:

function update( event ) {
  // time is in milliseconds (so increases 1000 per second)
  time = event.time * 0.001; // this increases about 1 per second
  this.position.y += 10 * Math.sin(time); // so a cycle every 6 seconds (2*pi ~= 6)
}

// 4. Click "play" to view the animation




// TODO: experiment with adding icoshadedron / torusknot animations
