class GitHub{
  constructor(){
    this.client_id = 'Iv1.c27f430a6084d984';
    this.client_secret = 'e0587690814bd1ff9757c0d7ecbb42c5cc9e2369';
  }

  //  Get User
  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&?client_secret=${this.client_secret}`);
  
    const profile = await profileResponse.json();
    
    return {
      profile
    }
  };
}

