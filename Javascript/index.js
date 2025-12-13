let filmPerYear=198;
switch (true) {
    case filmPerYear <= 50:
        console.log("You are a Noob");
        break;
    case filmPerYear <= 75:
        console.log("You are a beginner");
        break;
    case filmPerYear <= 150:
        console.log("You are a Cinephile");
        break;
    case filmPerYear >= 150:
        console.log("You are a God");
        break;
    default:
        console.log("Watch Movies man");
}
