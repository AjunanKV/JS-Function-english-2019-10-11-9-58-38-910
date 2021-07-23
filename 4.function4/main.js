function countWords(message){
  // wirte your code here
  var message2=message.split(" ");
  return message2.length;
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5