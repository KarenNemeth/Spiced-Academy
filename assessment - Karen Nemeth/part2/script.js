//Karen Nemeth Javascript Assessment

function Actor(name,age,oscars) {
  this.name = name;
  this.age = age;
  this.oscars = oscars;

  this.hello = function() {
    console.log("Hello my name is " + this.name);
  };

  this.hasMoreOscarsThan = function(actor) {
      if (this.oscars > actor.oscars) {
        console.log(this.name + " has more oscars than " + actor.name)
        return true;
      }
      else if (this.oscars === actor.oscars) {
        console.log(actor.name + " has the same number of Oscars as " + this.name)
        return false;
      }
      else {
        console.log(actor.name + " has the most Oscars!")
        return false;
      };
    };
};

var leo = new Actor("Leonardo DiCaprio", 41, 1);
var jlaw = new Actor("Jennifer Lawrence", 25, 1);
var sam = new Actor("Samuel L. Jackson", 67, 0);
var jcho = new Actor("John Cho", 43, 0);
var meryl = new Actor("Meryl Streep", 66, 3);

var actors = [leo, jlaw, sam, jcho, meryl];

/* hasMoreOscarsThan Test
jlaw.hasMoreOscarsThan(jcho);
jlaw.hasMoreOscarsThan(meryl);
leo.hasMoreOscarsThan(jlaw);*/

/*hello Test
meryl.hello();
leo.hello();*/

function getActorByName (name) {
    for (var x in actors) {
        if (name === actors[x].name) {
            console.log(actors[x]);
        }
    }
};

/*getActorByName Test
getActorByName('Jennifer Lawrence');
getActorByName('John Cho');
getActorByName('Meryl Streep');*/

function getAverageAge () {
  var total = 0;
  for (var x in actors) {
    total += actors[x].age;
  };
  console.log(total / actors.length);
};

//getAverageAge();
