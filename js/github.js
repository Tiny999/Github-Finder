class GitHub{
  constructor(){
    this.client_id = 'Iv1.c27f430a6084d984';
    this.client_secret = '73ed2d35bdf6fb788a7ee1ffd2014fb5f21106b5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'; 
  }

  //  Get User
  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`,
    { 
      headers: {
        authorization: "token d253343cc12b1f4ba99abf41de70bdc4908f4db8"
      }
    });

    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repose_sort}&client_id=${this.client_id}&?client_secret=${this.client_secret}`,
    {
      headers: {
        authorization: "token d3cd2793e870771de9c40fbc2d48440ca11a96ae"
      }
    });
  
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    
    return {
      profile,
      repos
    }
  };
}

