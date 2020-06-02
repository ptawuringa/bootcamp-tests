// don't change the countRegNumber function


// Note that valid reg numbers starts with CY or CJ
function countRegNumber(regList){
    var counter = 0;
    const regNumbers = regList.split(",");
    for (var i=0;i<regNumbers.length;i++) {
        var regNumber = regNumbers[i].trim();
        if (regNumber.startsWith("CY")) {
          counter++;
        } else if (regNumber.startsWith("CJ")) {
          counter++;
        }
    }
    
    return counter;
  }