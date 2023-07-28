
import "./Home.css"
import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default class Home extends Component {
results = [
  {
    "adult": false,
    "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 298618,
    "original_language": "en",
    "original_title": "The Flash",
    "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    "popularity": 5312.805,
    "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    "release_date": "2023-06-13",
    "title": "The Flash",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 1630
  },
  {
    "adult": false,
    "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    "genre_ids": [
      35,
      12,
      14
    ],
    "id": 346698,
    "original_language": "en",
    "original_title": "Barbie",
    "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    "popularity": 5224.37,
    "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "release_date": "2023-07-19",
    "title": "Barbie",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 1244
  },
  {
    "adult": false,
    "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 667538,
    "original_language": "en",
    "original_title": "Transformers: Rise of the Beasts",
    "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "popularity": 4835.711,
    "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    "release_date": "2023-06-06",
    "title": "Transformers: Rise of the Beasts",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 1940
  },
  {
    "adult": false,
    "backdrop_path": "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
    "genre_ids": [
      12,
      10751,
      14,
      10749
    ],
    "id": 447277,
    "original_language": "en",
    "original_title": "The Little Mermaid",
    "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
    "popularity": 2909.533,
    "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
    "release_date": "2023-05-18",
    "title": "The Little Mermaid",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 1053
  },
  {
    "adult": false,
    "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
    "genre_ids": [
      16,
      10751,
      14,
      35
    ],
    "id": 1040148,
    "original_language": "en",
    "original_title": "Ruby Gillman, Teenage Kraken",
    "overview": "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
    "popularity": 2631.829,
    "poster_path": "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
    "release_date": "2023-06-28",
    "title": "Ruby Gillman, Teenage Kraken",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 246
  },
  {
    "adult": false,
    "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 447365,
    "original_language": "en",
    "original_title": "Guardians of the Galaxy Vol. 3",
    "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "popularity": 2300.773,
    "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "release_date": "2023-05-03",
    "title": "Guardians of the Galaxy Vol. 3",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 3481
  },
  {
    "adult": false,
    "backdrop_path": "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
    "genre_ids": [
      16,
      12,
      10751,
      14
    ],
    "id": 459003,
    "original_language": "uk",
    "original_title": "Мавка: Лісова пісня",
    "overview": "Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.",
    "popularity": 1952.718,
    "poster_path": "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
    "release_date": "2023-03-02",
    "title": "Mavka: The Forest Song",
    "video": false,
    "vote_average": 7.5,
    "vote_count": 128
  },
  {
    "adult": false,
    "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "id": 385687,
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 1906.767,
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "release_date": "2023-05-17",
    "title": "Fast X",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 2949
  },
  {
    "adult": false,
    "backdrop_path": "/J0XkW5toJLGEucm1pLDvTHXaKC.jpg",
    "genre_ids": [
      28,
      18,
      10752
    ],
    "id": 1076487,
    "original_language": "en",
    "original_title": "Warhorse One",
    "overview": "A gunned down Navy SEAL Master Chief must guide a child to safety through a gauntlet of hostile Taliban insurgents and survive the brutal Afghanistan wilderness.",
    "popularity": 1712.952,
    "poster_path": "/laFhAOqkWFi4sFeGPg8uun2Julw.jpg",
    "release_date": "2023-06-30",
    "title": "Warhorse One",
    "video": false,
    "vote_average": 7,
    "vote_count": 59
  },
  {
    "adult": false,
    "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    "genre_ids": [
      18,
      36
    ],
    "id": 872585,
    "original_language": "en",
    "original_title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
    "popularity": 1330.42,
    "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "release_date": "2023-07-19",
    "title": "Oppenheimer",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 743
  },
  {
    "adult": false,
    "backdrop_path": "/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg",
    "genre_ids": [
      14,
      28,
      12
    ],
    "id": 455476,
    "original_language": "en",
    "original_title": "Knights of the Zodiac",
    "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
    "popularity": 1285.258,
    "poster_path": "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
    "release_date": "2023-04-27",
    "title": "Knights of the Zodiac",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 624
  },
  {
    "adult": false,
    "backdrop_path": "/uyi0Ytkkw4pgT4GkYZHdqravjT5.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 678512,
    "original_language": "en",
    "original_title": "Sound of Freedom",
    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    "popularity": 1165.548,
    "poster_path": "/1laG6ntAYpTOxx2H5Gh0Ku0HZON.jpg",
    "release_date": "2023-07-03",
    "title": "Sound of Freedom",
    "video": false,
    "vote_average": 8,
    "vote_count": 200
  },
  {
    "adult": false,
    "backdrop_path": "/s381LdkcRY27rVsIiEZK5IPOe4W.jpg",
    "genre_ids": [
      16,
      28,
      27
    ],
    "id": 1083862,
    "original_language": "ja",
    "original_title": "バイオハザード：デスアイランド",
    "overview": "In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.",
    "popularity": 1139.274,
    "poster_path": "/qayga07ICNDswm0cMJ8P3VwklFZ.jpg",
    "release_date": "2023-06-22",
    "title": "Resident Evil: Death Island",
    "video": false,
    "vote_average": 8.3,
    "vote_count": 169
  },
  {
    "adult": false,
    "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "genre_ids": [
      28,
      12,
      16,
      878
    ],
    "id": 569094,
    "original_language": "en",
    "original_title": "Spider-Man: Across the Spider-Verse",
    "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "popularity": 1066.694,
    "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "release_date": "2023-05-31",
    "title": "Spider-Man: Across the Spider-Verse",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 2476
  },
  {
    "adult": false,
    "backdrop_path": "/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 603692,
    "original_language": "en",
    "original_title": "John Wick: Chapter 4",
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "popularity": 1066.305,
    "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    "release_date": "2023-03-22",
    "title": "John Wick: Chapter 4",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 3911
  },
  {
    "adult": false,
    "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    "genre_ids": [
      16,
      10751,
      12,
      14,
      35
    ],
    "id": 502356,
    "original_language": "en",
    "original_title": "The Super Mario Bros. Movie",
    "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "popularity": 1041.732,
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "release_date": "2023-04-05",
    "title": "The Super Mario Bros. Movie",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 5862
  },
  {
    "adult": false,
    "backdrop_path": "/msBuBppEFq3QvaRsJYz0r595gC5.jpg",
    "genre_ids": [
      12
    ],
    "id": 1059638,
    "original_language": "pl",
    "original_title": "Pan Samochodzik i templariusze",
    "overview": "A well-known art historian, treasure hunter and owner of an unusual car stumbles upon a Templar treasure, which is the key to a great power that can upset the balance of good and evil in the world. Supported by friendly scouts, Mr. Car starts a big race against time and a hostile organization, the stake of which is the heritage of knightly orders.",
    "popularity": 1035.154,
    "poster_path": "/xEAXVe0BzW4K9Ky6eTo4CJwzJ8P.jpg",
    "release_date": "2023-07-12",
    "title": "Mr. Car and the Knights Templar",
    "video": false,
    "vote_average": 6.3,
    "vote_count": 40
  },
  {
    "adult": false,
    "backdrop_path": "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      14,
      10749
    ],
    "id": 976573,
    "original_language": "en",
    "original_title": "Elemental",
    "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    "popularity": 983.361,
    "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
    "release_date": "2023-06-14",
    "title": "Elemental",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 617
  },
  {
    "adult": false,
    "backdrop_path": "/hjyqNFHx5wIO8dqaRi0v2ix1wiR.jpg",
    "genre_ids": [
      28,
      80,
      27
    ],
    "id": 808396,
    "original_language": "en",
    "original_title": "God Is a Bullet",
    "overview": "Based on true events and the novel of the same name. Vice detective Bob Hightower finds his ex-wife murdered and daughter kidnapped by a cult. Frustrated by the botched official investigations, he quits the force and infiltrates the cult to hunt down the leader with the help of the cult’s only female victim escapee, Case Hardin.",
    "popularity": 924.003,
    "poster_path": "/5kiLS9nsSJxDdlYUyYGiSUt8Fi8.jpg",
    "release_date": "2023-06-22",
    "title": "God Is a Bullet",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 34
  },
  {
    "adult": false,
    "backdrop_path": "/tmDdFWtXwq7alX2dPG3LPPNNVs2.jpg",
    "genre_ids": [
      53,
      18,
      878,
      27
    ],
    "id": 805320,
    "original_language": "es",
    "original_title": "Bird Box Barcelona",
    "overview": "After a mysterious force decimates the world’s population, Sebastian must navigate his own survival journey through the desolate streets of Barcelona. As he forms uneasy alliances with other survivors and they try to escape the city, an unexpected and even more sinister threat grows.",
    "popularity": 906.133,
    "poster_path": "/hOb6ODI7QQFKkOe3eJU2Fdh2fk1.jpg",
    "release_date": "2023-07-14",
    "title": "Bird Box Barcelona",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 297
  }
]
constructor(){
super()
this.state = {
  popularMovies : this.results
}


}

async componentDidMount (){
  let data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
let parsedData =  await data.json()
console.log(parsedData.results)

this.setState({
  popularMovies : parsedData.results
})

}




  render() {
    return (
      <>
      <div className="poster">
      <Carousel autoPlay={true} showThumbs={false}  transitionTime={1} infiniteLoop={true} showStatus={false} showArrows={true}>
                <div>
                    <img className="immg"   src="https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" />
               
                </div>
                <div>
                    <img className="immg" src="https://images.unsplash.com/photo-1690261003258-0bbe37fa0209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                
                </div>
                <div>
                    <img className="immg" src="https://plus.unsplash.com/premium_photo-1690164161383-f5ff30a790bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80" />
                
                </div>
            </Carousel>
      </div>
      
      </>
    )
  }
}

