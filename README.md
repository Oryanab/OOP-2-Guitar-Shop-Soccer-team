# Topics:

- Class inheritance and the key word "extends"
- calling a method with in method in a class
- key word "super"
- getters
- seters
- getters
- static methods
- private
- public

# First drill

# Guitar Shop

## Follow the requirements and implement the class ClassicGuitar:

Should have the following properties:

- manufactureYear number
- brand string
- price number
- numberOfString number (defaults to 6)
- used (initialized to false)
- id (private property)

Should have constructor and the following methods:

1. play(): string ("🎶🎶🎶").
   A guitar once played, becomes used and it's price drops by 10%
2. getters and setters for price
3. only getters for

- ManufactureYear
- brand
- id

4. a static method: detectSound(sound: string): string - returns the instrument type ("ElectricGuitar", "BassGuitar")
   Example:
   console.log(ClassicGuitar.detectSound("🎸")); // "ElectricGuitar"
   console.log(ClassicGuitar.detectSound("🔊")); // "BassGuitar"

Extend ClassicGuitar and create 2 sub-classes:

## An electric guitar inherits from a classicalGuitar

```
class ElectricGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand,price...) {
    super(manufactureYear);
    ...
  }
}
```

ElectricGuitar should have additional property:
longNeck: boolean

Override:

1. play(): string ("🎸🎸🎸")

### BassGuitar

BassGuitar value for numberOfString should be 4

BassGuitar should have additional method: playSolo(): string - generate and return a random sequence of "💥", "🤘", "🎵", "📢", "💢", "🕺"

Override:

1. play(): string ("🔊🔊🔊")

<!--
Protected properties are usually prefixed with an underscore _.
That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.
-->

# Seconde drill

# Soccer team

Congratulations, you are the owner of the F.C Cyber4s football team.
It's time to sign players.

1. Create a class that represents a Person.

Should have the following properties:

- firstName
- sureName
- salary
- age
- id (private property)

Should have constructor +
getters and setters that makes sense (a person wont change his name).

Extend Person and create 2 sub-classes:

## Player inherits from Person

Player should have additional properties:

- strongLeg
- position
- celebrationSentence

Should have constructor and the following methods:

1. goalClebration().
   The player's celebration sentence will be printed and his salary will increase by 2.5 percent.
2. getters and setters that makes sense (a player may change his celebration sentence).

## GoalKeepr inherits from Person

GoalKeepr should have additional properties:

- isLeftHanded
- lastGoalConceded (defaults to this moment)

Should have constructor and the following methods:

1. concededAGoal().
   The lastGoalConceded property will be updated to this moment and his salary will decreased by 2.5 percent
2. getters and setters that makes sense (a goalKeepr's strong hand wont change).

## Submitting the assignment

- Create a new repo and serve it in the classroom

# bonus:

Select one of the tasks above and create a complete interface for it.
use node + express for the backEnd.
you may use axios + bootstrap for the frontEnd.

- If you chose the guitar store - create an html page and embed buttons on it that will realize the capabilities of creating a guitar and playing it.

1. Add a simple form to allow the use of getters and setters capabilities
2. The software will be built to your choice and you will want to allow the user to use as many capabilities as possible that are built on the server side in object-oriented programming

- If you chose the football drill - create an html page and embed buttons on it that will realize the capabilities of creating a player or a goalkeeper.

1. Add a simple form to allow the use of getters and setters capabilities
2. The software will be built to your choice and you will want to allow the user to use as many capabilities as possible that are built on the server side in object-oriented programming
