//conversion functions
function convertCtoF(temp){
    return ((temp / 5) * 9) + 32;
}
function convertFtoC(temp){
    return ((temp - 32) * 5) / 9;
}
function convertCtoK(temp){
    return temp + 273.15;
}
function convertKtoC(temp){
    return temp - 273.15;
}
function convertFtoK(temp){
    return convertFtoC(temp) + 273.15;
}
function convertKtoF(temp){
    return convertCtoF(temp - 273.15);
}
function convertFeetToInches(dist){
    return dist * 12;
}
function convertFeetToYards(dist){
    return dist / 3;
}
function convertFeetToMeters(dist){
    return dist / 3.2808;
}
function convertInchesToYards(dist){
    return dist / 36; 
}
function convertInchesToFeet(dist){
    return dist / 12;
}
function convertInchesToMeters(dist){
    return (dist / 12) / 3.2808;
}
function convertYardsToFeet(dist){
    return dist * 3;
}
function convertYardsToInches(dist){
    return dist * 36;
}
function convertYardsToMeters(dist){
    return (dist * 3) / 3.2808;
}
function convertMetersToFeet(dist){
    return dist * 3.2808;
}
function convertMetersToInches(dist){
    return (dist * 3.2808) * 12;
}
function convertMetersToYards(dist){
    return (dist * 3.2808) / 3;
}
function convertFeetToCentimeters(dist){
    return convertFeetToMeters(dist) * 100;
}
function convertInchesToCentimeters(dist){
    return convertInchesToMeters(dist) * 100;
}
function convertYardsToCentimeters(dist){
    return convertYardsToMeters(dist) * 100;
}
function convertMetersToCentimeters(dist){
    return dist * 100;
}
function convertCentimetersToFeet(dist){
    return convertMetersToFeet(dist / 100);
}
function convertCentimetersToInches(dist){
    return convertMetersToInches(dist / 100);
}
function convertCentimetersToYards(dist){
    return convertMetersToYards(dist / 100);
}
function convertCentimetersToMeters(dist){
    return dist / 100;
}