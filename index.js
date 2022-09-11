function distanceFromHqInBlocks(someValue){
    return Math.abs(42-someValue);
}
function distanceFromHqInFeet(someValue){
    return (distanceFromHqInBlocks(someValue)*264);
}
function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination)*264);
}
function calculatesFarePrice(start, destination){
    let distance = Math.abs((start-destination)*264)
    if (distance < 400){
        return 0;
    }
    else if (distance > 2500){
        return "cannot travel that far";
    }
    else if (distance > 2000){
        return 25;
    }
    else if(distance >= 400){
        return (distance-400)*.02;
    }
    
}

