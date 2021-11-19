class Person {
    constructor(friendsList, moviesList, name) {
	this.friendsList = []
	this.moviesList = []
	this.name = name
  }
}

	function grabMovies(friendsList) {
	  let friendsQueue = [...friendsList] //starting with first instance of the class
	  let movieQueue = [...moviesList] //spreading my* friendsList
      let dupes = new Set(this.name)
	  let bestMovie;

	  while (friendsQueue.length > 0) {
	  let friend = friendsQueue.pop() //continues to pop off friendsQueue

      if (dupes.has(friend.name)) { 
        continue;

      } else {
        dupes.add(friend.name)
	    friendsQueue.push(...friend.FriendsList)
	    movieQueue.push(...friend.moviesList)
      }

	  let movieCounter = {}
	  for (let i = 0; i < movieQueue.length; i++) {
	  let movie = moviesList[i]


      if(!(movie in movieCounter)) {
	    movieCounter[movie] = 1

      } else {
	    movieCounter[movie]++
    } 

 	for (const movie in movieCounter) {
	  let max = 0
	  if(movieCounter[movie] > max) {
		max = movieCounter[movie]
		bestMovie = movie	  
      }
    }
  }
}
	return bestMovie
};

let mike = new Person()
mike.friendsList = ["Ronny", "Bobby", "Ricky"]
mike.moviesList = ["Avengers", "Shrek", "Inception"]
movieCounter = {"Avengers": 1, "Shrek": 3, "Inception": 5}


module.export = Person;
