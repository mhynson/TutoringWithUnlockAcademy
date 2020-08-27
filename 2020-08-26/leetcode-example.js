var kidsWithCandies = function(candies, extraCandies) {
  var result = [];
  
  // Clone the array
  var candiesClone = [...candies];
  
  // What is the greatest number of candies out of all the kids?
  var kidsByCandieCount = candiesClone.sort();
  var theMostCandies = kidsByCandieCount.pop();   // 5
      
  // If we added extraCandies, could this kid have the most?
  for( var i=0; i < candies.length; i++) {
      // First, get the candy count.
      var candyCount = candies[i];    // 2
      
      // Get the sum of the candy count and the extra candies.
      var newCandyCount = candyCount + extraCandies;  // 5
      
      // Compare the newCandyCount to see if it is greater than or equal to the most candies.
      var haveGreatest = newCandyCount >= theMostCandies; // true
      
      result.push(haveGreatest);
  }
  
  return result;
};