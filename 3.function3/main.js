function alphabetSort(message){
  // wirte your code here
  var message2=message.split("");
  message2.sort();
  var output="";
  for(let i=0; i<message2.length; i++)
  {
    output+=message2[i];
  }
  return output;

}
console.log(alphabetSort('hello')); // should return 'ehllo'