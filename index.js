// Code your solution in this file!

let distanceFromHqInBlocks = function(location) {
    let distance = location - 42;
    let absDistance = Math.abs(distance);
    return absDistance;
};

distanceFromHqInBlocks(32);


function distanceFromHqInFeet(blocks) {
   let blockLength = 264;
   let blocksTravelled = distanceFromHqInBlocks(blocks);
   return blocksTravelled * blockLength;
};

distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
    let blockLength = 264;
    let feetTravelled = Math.abs(start - destination) * blockLength;
    return feetTravelled;
};

function calculatesFarePrice(start, destination) {
    let feetToTravel = distanceTravelledInFeet(start, destination);

    if(feetToTravel > 2500) {
        return 'cannot travel that far';
    }

    if(feetToTravel > 2000) {
        return 25;
    }

    if(feetToTravel < 400) {
        return 0;
    }

     let distanceWithoutFreeFeet = feetToTravel - 400 
     return distanceWithoutFreeFeet * 0.02;
}

