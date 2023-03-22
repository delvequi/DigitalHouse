const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting and reloading the page
  
  // retrieve values from input fields
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const content = document.getElementById('content').value;
  
  // retrieve existing object from localStorage, or create a new one if none exists
  const existingData = JSON.parse(localStorage.getItem('myData')) || { name: '', lastName: '', content: [] };
  
  // update the object with the new data
  existingData.name = name;
  existingData.lastName = lastName;
  existingData.content.push(content);
  
  // save the updated object back to localStorage
  localStorage.setItem('myData', JSON.stringify(existingData));
  
  // clear the form input fields
  document.getElementById('name').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('content').value = '';
});
