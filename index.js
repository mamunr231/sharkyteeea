// Helper function to calculate the volume of a cube
function calculateCubeVolume(side) {
    return Math.pow(side, 3);
  }
  
  // Helper function to check if a number is a prime number
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Helper function to generate a random string of specified length
  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Volume of a cube with side length 5:", calculateCubeVolume(5)); // Output: 125
    console.log("Is 7 a prime number?", isPrime(7));   // Output: true
    console.log("Is 10 a prime number?", isPrime(10));   // Output: false
  
    // Generate and print 5 random strings of length 8
    console.log("Random strings of length 8:");
    for (let i = 0; i < 5; i++) {
      console.log(generateRandomString(8));
    }
  }
  
  // Call the main function
  main();
  