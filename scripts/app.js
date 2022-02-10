console.log("(☞ﾟヮﾟ)☞tamagotchi project loaded☜(ﾟヮﾟ☜)");

/*
So we need to make a tamagotchi object, and methods for interacting with it.

the tamagotchi should have properties to track the three stats and the 
methods should be something like:
-feed
-sleep
-play
-increaseAge
-morph
-die
worry about css and stuff like that later.
*/

const tamagotchi = {
    name: prompt("please enter the tamagotchi's name"),
    foodLvl: 0,
    tiredLvl: 0,
    playLvl: 0,
    age: 1,

    /*

    */
    increaseFoodLvl(){
      let food = this.foodLvl;
        food++;
      $('#feed').text('Hunger: ' + food);
        return this.foodLvl += 1;
    },

    increaseTiredLvl(){
      let tired = this.tiredLvl;
        tired++;
      $('#tired').text('Tiredness: ' + tired);
        return this.tiredLvl += 1;
    },

    increasePlayLvl(){
      let play = this.playLvl;
        play++;
      $('#boredom').text('Boredom: ' + play);
        return this.playLvl += 1;
    },

    increaseAge(){
      let age = this.age;
        age++;
      $('#age').text('Age: ' +  age);
        return this.age+=1;
    },

    decreaseFoodLvl(){
      let decFood = this.foodLvl;
        if(this.foodLvl === 0){
          $('#feed').text('Hunger: ' + decFood);
            return this.foodLvl = 0;
        }
        decFood--;
        $('#feed').text('Hunger: ' + decFood);
          return this.foodLvl -= 1;
    },

    decreaseTiredLvl(){
      let decTired = this.tiredLvl;
        if(this.tiredLvl === 0){
          $('#tired').text('Tiredness: ' + decTired);
            return this.foodLvl = 0;
        }
        decTired--;
        $('#tired').text('Tiredness: ' + decTired);
          return this.tiredLvl -= 1;
    },

    decreasePlayLvl(){
      let decPlay = this.playLvl;
        if(this.playLvl === 0){
          $('#bordom').text('Boredom: ' + decPlay);
            return this.foodLvl = 0;
        }
        decPlay--;
        $('#boredom').text('Boredom: ' + decPlay);
          return this.playLvl -= 1;
    },

 
}

/* we'll need a function to initialize the game and start the meters for each metric that we're tracking. For now I'll make a button to just show that things are tracking, but not do the increase on an interval.



*/
/*$("#check").on('click', () => {
    console.log(tamagotchi.increaseFoodLvl());
    console.log(tamagotchi.increaseTiredLvl());
    console.log(tamagotchi.increasePlayLvl());
    console.log(tamagotchi.increaseAge());
}) */


/* button works fine, now i need to make the increase functions to iterate without any clicks. then we make more buttons to assign to other meters, and make them be able to decrease the meters. */

$("#decFood").on('click', () => {
  console.log(tamagotchi.decreaseFoodLvl());
})

$("#decTire").on('click', () => {
  console.log(tamagotchi.decreaseTiredLvl());
})

$("#decPlay").on('click', () => {
  console.log(tamagotchi.decreasePlayLvl());
})


$("#begin").on('click', () => {
  (setInterval(() => {
    tamagotchi.increaseTiredLvl();
    tamagotchi.increasePlayLvl();
    tamagotchi.increaseFoodLvl();}, 1000));
  (setInterval(() => {
    tamagotchi.increaseAge();
  }, 10000));
  //console.log(setInterval(tamagotchi.increasePlayLvl, 1000));
  //console.log(setInterval(tamagotchi.increaseTiredLvl, 1000));
  //console.log(setInterval(tamagotchi.increaseAge, 1000));
});