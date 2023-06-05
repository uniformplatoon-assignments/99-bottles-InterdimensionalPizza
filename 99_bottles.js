function bottleSong(num) {
  for (let i = num; i > 2; i--) {
    console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.')
    console.log('Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.') 
  }  
  console.log('2 bottles of beer on the wall, 2 bottles of beer.')
  console.log('Take one down and pass it around, 1 bottle of beer on the wall.')
  console.log('1 bottle of beer on the wall, 1 bottle of beer.')
  console.log('Take one down and pass it around, no more bottles of beer on the wall.')
  console.log('No more bottles of beer on the wall, no more bottles of beer.')
  console.log('Go to the store and buy some more, ' + num + ' bottles of beer on the wall.')
};


bottleSong(99);
