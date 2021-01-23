const readLineSync =  require('readline-sync');

const funcToUse = readLineSync.question('Hi, Welcome to Base64 Encoding & Decoding\n\nWe have 2 functions :\n1. base64Encode\n2. base64Decode\n\nPlease Enter 1 if you want to Encode otherwise Enter 2 for Decode : ');

// function for Encoding
function base64Encode(url){
  return Buffer.from(url).toString('base64');
}

// function for Decoding
function base64Decode(url){
  return Buffer.from(url, 'base64').toString('ascii');
}


if(funcToUse == 1){
  console.log(base64Encode(readLineSync.question('Please enter the url to be encoded\n')));
}else if(funcToUse == 2){
  console.log(base64Decode(readLineSync.question('Please enter the url to be decoded\n')));
}else{
  console.log('Invalid option!! Please try again');
}
