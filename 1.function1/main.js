function reverseString(message){
//hello 
  var output=""; 
  var length=message.length-1;
  //console.log(length);
  for(i=length; i>=0; i--)
  {
    //console.log(message.charAt(i));
    output+=message.charAt(i);
  }
  console.log(output);
  return(output);
}
reverseString('hello'); // should return 'olleh'