var json_movie = {
    title: 'Back to the Future',
    director: 'Robert Zemeckis',
    stars: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
    plot: 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
    oscar: 1,
    tags: ['Adventure', 'Comedy', 'Sci-Fi']
}

let json_string = JSON.stringify(json_movie)
let json_again = JSON.parse(json_string)

console.log(json_again)