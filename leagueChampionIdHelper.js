export class leagueHelper {
  
  getChampionData(championID) {

    const getPatch = 
      axios.get('https://ddragon.leagueoflegends.com/realms/na.json')
      .then((response) => {
        const patchData = response.data;
        
        for(const [key, value] of Object.entries(patchData)) {
          if(key == "v"){
            const currentPatch = value;
            return currentPatch;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
  
  
    getPatch.then((patch) => {
      axios.get('https://ddragon.leagueoflegends.com/cdn/' + patch + '/data/en_US/champion.json')
      .then((response) => {
        const championList = response.data.data;
        
        for (const [id, value] of Object.entries(championList)) {
          if (value.key == championID) {
            const outputResolvedData = value;
            console.log(outputResolvedData);
            return outputResolvedData;
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
    })
  }
}
