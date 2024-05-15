import Image from "next/image";
import './style.css';
import Link from 'next/link';

export default function LearnMain() {
  return (
    <main style={{
      backgroundImage: "url('/render1.png')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      color: "#ffffff"
    }}>
    <title>LBG Learn - platformer</title>
      <div class="container">
        <div class="navbar">
          <img src="/avatarHead.png" width="70" height="70" />
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/mewo">404</a></li>
            <li><a href="/pages/learn/learnmain">back</a></li>
          </ul>
        </div>
        <section>
          <h1>scratch series: platformer</h1>
          <p>this is not the same system as roltycore 1 and 2 those games are tile based</p>
          <p>what were going to make in this series doesnt use tiles,= it uses a level sprite and touching block for player collisions</p>
          <p>well be starting from basics</p>
          <div>
            <button><Link href="/pages/learn/scratch/vanilla/series/simpleplatformer/part1">part 1: collision and movement</Link></button>
            <button>more coming soon</button>
          </div>
        </section>
      </div>
    </main>
  );
}
