const genre= async ()=>{
    let data = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=4e44d9029b1270a757cddc766a1bcb63`)
        let parsedData = await data.json()
     console.log(parsedData)
}

genre()