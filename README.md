For Project 1 the premise was to design a game.  I started to design a maze game that the user would navigate through with their mouse cursor. 
Upon arriving at the site, the user will notice the title of the game, instructions, a timer set at 60 seconds, and an empty box labeled "inventory"

The instructions are quite clear...
1. Press 'GO' to begin navigating the maze with mouse cursor. 
2. Collect your 3 missing belongings (slingshot, sword, and shield)
3. Reach the end of the maze in the allotted time to help Zelda with her Quest. 

User Stories...
1. User sees a black maze with a few trees plotted.
2. When 'GO' is pressed the timer will begin and the mouse cursor will be turned into Link.
3. The first move into the maze will trigger a few spaces to be revealed and as the user continues to move on the road the forest will start to be discovered 
4. The instructions mention collecting lost items, so that will encourage the user to take different paths to find these items. 
5. User will experience dead ends but the places traveled will remain in sight so they know where they haven't been.
6. User will stumble across the first item "shield" and when user travels over item, it will populate in their inventory.
7. User moves off of the item "shield" and will notice that it disappears from the map as well signifying it was picked up.
8. User will move through maze, time will go down, and they will acquire items.
9. If the user reaches the end of the maze without collecting an item they will not win and will have to go back.
10. User has all three items in invertory and reaches Zelda before the time runs out.
11. User will see a Player Won! show up next to their timer and inventory.
12. If the user runs out of time, Player Lost! will show up in the same spot.
13. User will realize how fun Ocarina of Time was and plug in their old Nintendo 64 and start playing.

Wireframe...


![](https://i.imgur.com/OIDGKTds.jpg)

Approach Taken...
I had started with a maze that was timed, player had lives, and was travelling down a floating road with edges that they could fall off.
I used a table in HTML because I knew I could easily identify a correct path and the wrong path using the cells.
This quickly became difficult to understand and hard to play. I needed to make it easier on the user. 
Most video games have a line of sight (LOS) meaning they can only see so far into the map based on character position. 
This allowed for me to implement more of a game theme and the user wouldn't be totally left in the dark ("pun intended")
I also started with a mouse cursor as the game piece and wanted to switch to keypresses but communicating with cells in a different row is difficult. 


Technologies Used...
The gameboard is created using an HTML table.
The game is styled with CSS.
The functionality is created using jQuery

  HTML...
  Header, instructions, and empty div boxes to put inventory and timer.
  The HTML table was an easy way to organize the path and borders of my maze but made everything else difficult.
  Each row has 16 cells and there are 16 rows. (first column is hidden and reserved for start and end cells)
  Each cell has 3-5 classes associated with it to help CSS and jQuery identify what that particular cell is and what it does.
  Classes include:
    -CorrectPath: actual road to travel on that lights up map when travelled on.
    -Warning: the walls of the maze (trees that pop up)
    -Reveal: a class spanning over multiple elements to include them in the LOS discovery when on a 'correctPath'
    -cell position (r1c2 or row1column2) this tells jQuery what to do with this particular cell
    -treasure (and if treasure what kind, ex.'deku shield') jQuery counts how many the player as travelled over to contribute to win logic
  
  CSS...
  Pretty basic styling, classes have properties associated with them and are implemented in the browser. 
  Floated the stopwatch and inventory divs to be aligned.
  Some classes are created specifically to be added when jQuery calls on them pending an event.
    -these have images associated with them and are added to HTML elements as the user discovers more of the map.
    -It wouldn't make sense to have them already showing, then it wouldn't be a maze.
    
  jQuery...
  I didn't want the maze to be discoverable before the timer starts. So almost all functionality is inculded in the start function
  Start button- starts timer, changes mouse cursor to Link, and allows map to be discovered.
  The discovery happens on a mouseover event and each cell in HTML has a specific class associated with them
  The code is a bit repetitive but each cell does something different based on its position and what it is communicating around it.
    -entering a cell will tell the reveal class to add a hidden CSS class to show either a path, a tree, or a item(treasure) to be picked up.
    -there is a jQuery function for each cell that is a correct path.
  A way to prevent cheating and to force the user to navigate the maze is to count and make sure they have picked up all the equipment to win.
    -I have a mouseover event listener to count how many items they have picked up and in order to win they need 3.
    -added on to counting the number of items, I also have an event listener on mouseleave that changes the class of the treasure cell to a tree 
     to denote that the user picked it up and it is no longer on the map. This item also gets appended to the user's inventory
  The last function is the timer, which decreases by seconds from 60 to 0.
    -when it reaches 0, the user loses and the timer is stopped ('you lost' appended to page)
    -If the player reaches the finish line, collects all 3 items, and beats the time, the timer will stop and a 'you win' will be appended to page.
   


Unsolved Problems...
The user is able to "collect" each item and put it in their inventory and that item disappears from the map.
but that cell still has an event listener attached to it that will append that item to the inventory again if the player travels over that empty space again.
I think it is how the hard-coded HTML is and if I get rid of it I might jeopardize the functionality. 







