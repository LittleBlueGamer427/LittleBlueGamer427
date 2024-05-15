import Image from "next/image";
import './style.css';
import Link from 'next/link';
import React from 'react';

export default function LearnMain() {
  const backgroundImageUrl = "url('/render1.png')";
  return (
    <main style={{
      backgroundImage: backgroundImageUrl,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      color: "#ffffff",
      width: "100%",
      height: "10500px",
    }}>
    <title>LBG Learn - platformer</title>
      <div class="container">
        <div class="navbar">
          <img src="/avatarHead.png" width="70" height="70" />
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/pages/learn/learnmain">LEARN</a></li>
            <li><a href="/pages/learn/scratch/vanilla/series/simpleplatformer/list">BACK</a></li>
          </ul>
        </div>
        <section>
          <h1>scratch platformer part 1</h1>
          <img src="/learnimage/scratchpf1.png" width="800" height="800" />
          <p>again this series will be about making platformer in scratch. however not the same system as roltycore 1 and 2.</p>
          <p>grab your carton of milk already lets do this</p>
          <h1>the actual tutorial</h1>
          <p>start by making these scripts in sprite1</p>
          <img src="/learnimage/svompfp1s1.png" width="800" height="800" />
          <p>also rename sprite1 to player</p>
          <p>make a new sprite (note to beginners: DONT CHOOSE FROM COSTUME LIBRARY, HOVER OVER THE ICON AND HIT PAINT) and call it "level"</p>
          <p>go into costume editor and make a simple level this one will do perfectly fine</p>
          <img src="/learnimage/scratchpfp1level.png" width="800" height="800" />
          <p>go back to player sprite. remove scratch cat or dangocat (depending on what youre using) in costume editor and get rid of costume2 if it exists</p>
          <p>make a LITERAL B O X, i made mine turbowarp red. this will represent player until we bring in proper player animations</p>
          <p>heres what mine looks like for some reason</p>
          <img src="/learnimage/Screenshot 2024-04-09 222122.png" width="500" height="500" />
          <p>now drag player like right here on the stage</p>
          <img src="/learnimage/Screenshot 2024-04-09 222421.png" width="1000" height="800" />
          <p>... and then go back to the code editor</p>
          <p>make a new custom block</p>
          <img src="/learnimage/Screenshot 2024-04-09 222713.png" width="800" height="800" />
          <p>(f**k off "my variable") make 2 new variables both for this sprite only in player</p>
          <p>-sx</p>
          <p>-sy</p>
          <p>now code this</p>
          <img src="/learnimage/block_4_9_2024-9_32_59 PM (2).png" width="800" height="800" />
          <p>make another block called "collision" with an input of (collision cycles). DO run without screen refresh</p>
          <p>code all of this</p>
          <img src="/learnimage/script.png" width="800" height="800" />
          <img src="/learnimage/script (1).png" width="800" height="800" />
          <p>and put a reset block above start game loop in the already existing when green flag clicked</p>
          <p>send super mecha death christ after the green flag and collision works</p>
          <img src="/learnimage/pfcollisionworks.gif" width="800" height="800" />
          <p>we did collisions so lets do player movement now</p>
          <p>make yet another custom block, label of "player movement", input of (friction), another input of (acceleration), and one last input of (jump power). tick run without screen refresh.</p>
          <p>put a player movement block above collision block and move [change [sy v] by (-1)] from the top of the tick player script into the player movement block</p>
          <p>make a new variable (falling) for this sprite only</p>
          <p>go to define collision. modify the blocks code to be like this</p>
          <img src="/learnimage/script (2).png" width="800" height="800" />
          <p>and in reset script set falling to 99</p>
          <p>then finally do these</p>
          <img src="/learnimage/image.png" width="800" height="800" />
          <img src="/learnimage/script (3).png" width="800" height="800" />
          <p>(forgot to set inputs in that block, first one should be 0.7, second should be 3, and third should be something like 18)</p>
          <p>send super mecha death christ after greenflag and you did epic if you got this far</p>
          <p>BUT WERE NOT FINISHED YET. after the repeat until touching level in both but inside the if, we set (sx on first one and sy on second one) to 0</p>
          <p>and after fixing that problem i told you to fix above were done in this part this works</p>
          <img src="/learnimage/movementdone.gif" width="800" height="800" />
        </section>
      </div>
    </main>
  );
}
