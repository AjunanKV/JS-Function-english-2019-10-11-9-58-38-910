function palindrome(message){
  // wirte your code here
var bool="true";
var output=""; 
  //console.log(message.charAt(1));
  var length=message.length-1;
  //console.log(length);
  for(i=length; i>=0; i--)
  {
    //console.log(message.charAt(i));
    output+=message.charAt(i);
  }
  if(message==output)
  {
    
    return bool;
  }
  else
  {
    bool="false";
    return bool;
  }

}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true