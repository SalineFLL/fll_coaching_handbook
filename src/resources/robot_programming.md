# Programming a robot

Helpful terms we use:

* **Robot launch**: A launch is when, during the robot run a teammate will push a button to send the robot out the score some points. The robot should come bace to either the left or right launch/home areas. A robot run will comprise multiple robot launches. Launches are autonomous, aside from the teammates placing the robot into a launch area and pushing the buttons to initiate the correct launch.
* **Robot run**: a single 2.5 minute period in which the robot will score as many points as possible.

## Helping the kids make a good plan

Like anything else, writing a good robot run program starts with a good plan.
We have started using a programming card game to help gameify plan-making for robot runs.
See the [pdf](https://drive.google.com/file/d/1OCidIG_Qr6-5-M7T2NFcs8RQw6fymQyv/view?usp=sharing) for the cards.

The concept we are trying to teach here is that almost every action the robot takes costs something, but some actions are very helpful (the action is well-controled, precise, and is likely to result in success) and some actions can be fairly harmful (imprecise and likely to lead to significant error during a robot launch).
Actions that are precise either decrease overall score, or add very few points.
Actions that imprecise increase score more dramatically. *Lowest scoring plan wins*.

Have the kids build toy programs for a robot launch using the cards.
In building a program with a low score, they'll have made a good starting plan!
Keep these plans (maybe glue them to a sheet) to place them on the big board.
Then, they can implement their plan in Pybricks Code.


## Coding using Pybricks

We are using Pybricks Code for the first time this year to program our robots.

[Pybricks code](https://code.pybricks.com)

You can find your team's pybricks licence [here](https://docs.google.com/spreadsheets/d/1wmigIlWk96c4rZnW1iBS2owpAYb45o1G9LGGEaVASCU/edit?usp=sharing). All coaches should have "Viewer" permissions, so if you do not have permission to view the file, contact Jeremy to get it.

Please consider taking a simple bot home with you and reading through the [pybricks guide](https://pybricks.com/learn/making-programs/basic-robot-navigation/) to get you started!

We also have some simple example scripts that can be dowloaded from [google drive](https://drive.google.com/drive/folders/1o4VhqPrEOAjG5M4UB7BYrPYEL8G5uTL9?usp=drive_link)
and read into pybricks' web interface to help get you started.
To get a feel for a codebase that might be useful at competition, where your team will have several "launches" in a single 2.5 minute run, look in [this google drive folder](https://drive.google.com/drive/folders/1fE1bXlOYPw0wndZpnIPHOQQzMBV681Ow?usp=sharing) and start by reading the [README google doc](https://docs.google.com/document/d/1RTxCoUCNA13MAsRkxNDE59o10hlKtyaqCYdTtdLFRNg/edit?usp=sharing), following its instructions and experimenting with a robot. Be sure to investigate the "setup" section of launch1.py

Our four teams typically share code snippets frequently for commonly-used routines such as line following or squaring off to a line.
Please upload useful routines your team designs to the google drive above if you think the other three teams would benefit from them!

