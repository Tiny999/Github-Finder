class GitHub{
  constructor(){
    this.client_id = 'c27f430a6084d984';
    this.client_secret = '73ed2d35bdf6fb788a7ee1ffd2014fb5f21106b5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc'; 
  }

  //  Get User
  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`);

    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&?client_secret=${this.client_secret}`);
  
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    
    return {
      profile,
      repos
    }
  };
}

