const music = [
    {artist: "Judy Garland", song:"Man That Got Away", genre:"Big Band", rating:4 },
    {artist: "Guns N' Roses", song:"Sweet Child of Mine", genre:"Rock", rating: 3},
    {artist: "Linkin Park", song:"In the End", genre:"Rock", rating: 5},
    {artist: "Britney Spears", song:"Out From Under", genre:"Pop", rating: 4},
    {artist: "Earth Wind and Fire", song:"September", genre:"Funk", rating: 2},
    {artist: "1975", song:"UGH!", genre:"Alternative", rating: 3},
    {artist: "Famous", song:"Xuitcasecity", genre:"R&B", rating: 5},
    {artist: "Eminem", song:"Lose Yourself", genre:"Rap", rating: 4}
];


music.sort((a,b)=>b.rating-a.rating);
//console.log(music);

music.sort((a,b)=> a.artist.toLowerCase() > b.artist.toLowerCase()? 1:-1);
//console.log(music);

//Find first instance of Rock genre
let rockSongs = music.find((data)=>data.genre == "Rock");
//console.log(rockSongs);

let allRockSongs = music.filter((data)=> data.genre == "Rock");
//console.log(allRockSongs);


let allSongsHighRating = music.filter((data)=> data.rating > 3);
//console.log(allSongsHighRating);

let artists = music.map((data)=>{
   if(data.artist==="Britney Spears" || data.artist==="Judy Garland") data.rating = data.rating*100;
    return data;
});
//console.log(artists);


let isAllPop = music.every((data)=> data.genre=="Pop");
//console.log(isAllPop);


let isAnyPop = music.some((data)=> data.genre=="Pop");
//console.log(isAnyPop);

function groupBy(arr, groupBy){
    return arr.reduce((total, item)=>{
        //{age:''}
        let key = item[groupBy];
        console.log(key);
        console.log(groupBy);
 
        if(!total[key]){
            total[key]=[];      
             console.log('total[groupBy]',total[key]);
        }
        total[key].push(item);
        
        return total;

    },{});
}

let groupedByGenre = groupBy(music, "genre");
console.log(groupedByGenre);