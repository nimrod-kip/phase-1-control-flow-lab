function scuberGreatingForFeet(){
    // Write your code here!
}

function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
      return 'This one is on me!';
    } else if (distance > 400 && distance <= 2000) {
      return 'That will be twenty bucks.';
    } else if (distance > 2000 && distance <= 2500) {
      return 'I will gladly take your thirty bucks.';
    } else {
      return 'No can do.';
    }
  }
  
  function ternaryCheckCity(){
    // Write your code here!
  
  
  }
  function ternaryCheckCity(city) {
    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }
  
  // Call it:
  console.log(ternaryCheckCity('NYC'));  // Output: Ok, sounds good.
  console.log(ternaryCheckCity('LA'));   // Output: No go.
  
  function switchOnCharmFromTip(){
    // Write your code here!
  }
  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }