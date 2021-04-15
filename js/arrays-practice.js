//STEP 1
console.log ("***** Step 1 *******");
let moviesArray = ['Ben Hur', 'Cleopatra', 'Mission Impossible', 'Sound Of Music', 'Last Emperor'];
console.log("List of Movies from the array: " + moviesArray);
console.log("Second Movie from arrayList is " + moviesArray[1]);
 
//STEP 2
console.log ("***** Step 2 *******");
let movies = new Array(5);
movies[0] = 'Ben Hur';
movies[1] = 'Cleopatra';
movies[2] = 'Mission Impossible';
movies[3] = 'Sound Of Music';
movies[4] = 'Last Emperor';
console.log("Movies from arrayList is " + movies);
console.log("First Movie from array List is " + movies[0]);

//STEP 3
console.log ("***** Step 3 *****");
movies.splice(2, 0, 'Pretty Woman');
console.log("Adding a new movie to the array list at position 3");
console.log("Length of movies array is  " + movies.length);

//STEP 4
console.log ("***** Step 4 ******");
let movies1 = [];
movies1[0] = 'Ben Hur';
movies1[1] = 'Cleopatra';
movies1[2] = 'Mission Impossible';
movies1[3] = 'Sound Of Music';
movies1[4] = 'Last Emperor';
delete movies1[0];
console.log("Movies from array List after deleting first item \n" + movies1);

//STEP 5
console.log ("***** Step 5 ******");
movies = null;
movies = [];
movies[0] = 'Ben Hur';
movies[1] = 'Cleopatra';
movies[2] = 'Mission Impossible';
movies[3] = 'Sound Of Music';
movies[4] = 'Last Emperor';
movies[5] = 'Lost World';
movies[6] = 'Little Woman';
console.log("Displaying all 7 movies using for/in loop");
for ( let movie in movies){
    console.log(movies[movie]);
}

//STEP 6
console.log ("***** Step 6 ******");
movies = null;
movies = [];
movies[0] = 'Ben Hur';
movies[1] = 'Cleopatra';
movies[2] = 'Mission Impossible';
movies[3] = 'Sound Of Music';
movies[4] = 'Last Emperor';
movies[5] = 'Lost World';
movies[6] = 'Little Woman';
console.log("Displaying all 7 movies using for/of");
for ( let movie of movies){
    console.log(movie);
}

//STEP 7
console.log ("***** Step 7 ******");
movies = null;
movies = [];
movies[0] = 'Ben Hur';
movies[1] = 'Cleopatra';
movies[2] = 'Mission Impossible';
movies[3] = 'Sound Of Music';
movies[4] = 'Last Emperor';
movies[5] = 'Lost World';
movies[6] = 'Little Woman';
movies.sort();
console.log("Displaying all 7 movies in sorted order");
for ( let movie of movies){
    console.log(movie);
}

//STEP 8
console.log ("***** Step 8 ******");
movies = null;
movies = [];
movies[0] = 'Ben Hur';
movies[1] = 'Cleopatra';
movies[2] = 'Mission Impossible';
movies[3] = 'Sound Of Music';
movies[4] = 'Last Emperor';
movies[5] = 'Lost World';
movies[6] = 'Little Woman';

let leastFavMovies = [];
let temp;
temp = movies.splice(2, 1);
leastFavMovies.push(temp);

temp = movies.splice(4, 1);
leastFavMovies.push(temp);

temp = movies.splice(4, 1);
leastFavMovies.push(temp);
//console.log("Like movies array " + movies);
//console.log("Least Favorite movies " + leastFavMovies);

console.log(" Movies I like");
for ( let movie in movies){
      console.log("Movie: " + movies[movie]);
}
console.log("Movies I regret Watching");
for ( let movie in leastFavMovies){
      console.log("Movie: " + leastFavMovies[movie]);
}

//STEP 9
console.log ("***** Step 9 ******");
movies = movies.concat(leastFavMovies);
//sort the movies and reverse it
movies = movies.sort();
movies = movies.reverse();
console.log("concatenated sorted and reversed movies array\n" + movies);

//STEP 10
console.log ("***** Step 10 ******");
console.log("Last Item in the movies array " + movies[movies.length - 1]);

//STEP 11
console.log ("***** Step 11 ******");
console.log("First Item in the movies array " + movies[0]);

//STEP 12
console.log ("***** Step 12 ******");
// Get the indexes of movies that are disliked
let dislikeIndexesArray = [];
let dislikedMovies = [];
for ( let movie in movies){
    for ( let dislikeMovie in leastFavMovies) {
        if (movies[movie] === leastFavMovies[dislikeMovie]){
            // add that index to an array of dislike movies
            dislikeIndexesArray.push(movie);
        }
    }
}
//Make a new array of disliked movies
dislikedMovies = movies.splice(1,3);
// Add the remaining movies to the disliked movie list
console.log( "Programatically made a list of disliked movies");
console.log("Disliked movies " + dislikedMovies);
console.log("List of liked movies after removing the disliked movies from the movie list \n" + movies);

//STEP 13
console.log ("***** Step 13 *******");
let movieOnly = [];
let i ;
movies = [['Ben Hur', 1], ['Mission Impossible', 2], ['Sound Of Music', 3], 
          ['Little Woman', 4], ['Pretty Woman', 5]];

movies.forEach((item => {
    item.filter((i => {
        //console.log(" fileterd item is i " + i);
        if ( typeof i === 'string'){
            console.log(" Movie Name filtered from the list using typeof is  " + i);
        }
    }));
}));

//STEP 14
console.log ("***** Step 14 ******");
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
let showEmployee = function(items){
    console.log("Employees: ")
    for ( let employee of items){
        console.log(employee);
    }
}
showEmployee(employees);

//STEP 15
console.log ("***** Step 15 ******");
let data = [58, '', 'abcd', true, null, false, 0];
let filterList = [];

//The function filterValues filters null, '', 0 and false
let filterValues = function(items){
    items.filter((i => {
        if ( i ){
            //console.log("data filtered from the list   " + i);
            filterList.push(i);
        }
    }));
    return filterList;
}
//filterList = filterData(data);
console.log("The list is " + data );
console.log("false, null, 0, and blank values are filtered \n" + 
             "Expected values in the list after filtering \n" + filterValues(data));

//STEP 16
console.log ("***** Step 16 ******");
let numList = [2, 8, 56, 89, 25, 75, 35, 54, 95, 37];
console.log("The number list is \n" + numList);

let getRandomItem = function(items, min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        let index =  Math.floor(Math.random() * (max - min + 1)) + min; 
        return items[index];
}
console.log( "The random number from list is " + getRandomItem(numList, 0, 9));


//STEP 17
console.log ("***** Step 16 ******");
let getLargestNumber = function( items){
    items.sort();
    return items[items.length - 1];
}
console.log("The number list is \n" + numList);
console.log("The largest number from the list is " + getLargestNumber(numList));