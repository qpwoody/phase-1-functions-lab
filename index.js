// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    
    const hqLocation = 42;
    return Math.abs(location - hqLocation)
  }
  const distance = distanceFromHqInBlocks(43)
  console.log(distance)

  function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feetPerBlock = 264; 
    return blocks * feetPerBlock;
  }
function distanceTravelledInFeet(start, destination) {
    
    const feetPerBlock = 264;
    return Math.abs(start-destination) * feetPerBlock
  }
  const startBlock = 10;
  const endBlock = 15;
  const distanceFeet = distanceTravelledInFeet(startBlock, endBlock);
  console.log(distanceFeet);

  function calculatesFarePrice(start, destination) {
   

    const feetPerBlock = 264; 
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  
  const fare1 = calculatesFarePrice(10, 15); 
  const fare2 = calculatesFarePrice(10, 20); 
  const fare3 = calculatesFarePrice(10, 30); 
  const fare4 = calculatesFarePrice(10, 40); 
  
  console.log("Fare 1:", fare1);
  console.log("Fare 2:", fare2);
  console.log("Fare 3:", fare3);
  console.log("Fare 4:", fare4);