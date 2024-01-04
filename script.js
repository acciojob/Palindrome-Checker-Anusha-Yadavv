// complete the given function

function palindrome(s){
	 const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original cleaned string with its reverse
  return cleanedString === cleanedString.split('').reverse().join('');

}
module.exports = palindrome
