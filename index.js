function distanceFromHqInBlocks (pickupLocation) {
    const companyHq = 42;
    let closeness;
if (pickupLocation > companyHq) {
   closeness = (pickupLocation - companyHq);
} else {
   closeness = (companyHq - pickupLocation);
}
return closeness;
}

function distanceFromHqInFeet(pickupLocation) {
let xmen = distanceFromHqInBlocks (pickupLocation)
return (xmen * 264)
}

function distanceTravelledInFeet (startBlock, destinationBlock) {

if (destinationBlock > startBlock) {
   return ((destinationBlock-startBlock)*264);
} else {
return ((startBlock - destinationBlock)*264);
}
}

function calculatesFarePrice (startBlock, destinationBlock){

let computationDistance = distanceTravelledInFeet(startBlock, destinationBlock);

if (computationDistance <= 400) {

   return (0);

} else if (computationDistance > 400 && computationDistance < 2000) {

   return ((computationDistance - 400) * 0.02);

} else if (computationDistance > 2000 && computationDistance <= 2500) {

   return (25)

} else {

return ("cannot travel that far"); 

}
}