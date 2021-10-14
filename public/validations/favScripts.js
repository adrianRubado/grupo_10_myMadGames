window.addEventListener('load', function(){
   const eliminateGames = document.querySelectorAll('.eliminategame')

   eliminateGames.forEach(eg =>{
       eg.addEventListener('click',async function(event){
           let id = event.path[2].children[0].children[1].children[1].attributes[1].nodeValue
           console.log(id)
           const data = {
               gameId : id
           }
           const res = await axios.delete('http://localhost:3002/favorites/delete',{data : data})
           console.log(res)
           location.reload()

       })
   })
})