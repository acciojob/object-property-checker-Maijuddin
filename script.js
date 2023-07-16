const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let keys = Object.keys(sampleObject);
	for (var i = 0; i < keys.length; i++) {
	  if (key == keys[i]) {
		  return true;
	  }
}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));