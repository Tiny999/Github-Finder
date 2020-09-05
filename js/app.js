const github = new GitHub();

// Search Input
const searchUser = document.querySelector('#search-user');

// Event Listeners
searchUser.addEventListener('keyup', e => {
  // Get Input Text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message == "Not Found"){
          // Show alert

        } else{
          // Show Profile
        }
      }) 
  } else{
    // Clear Profile
    
  }
})

