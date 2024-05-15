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
    <title>LBG Learn - Scratch Tutorials</title>
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
          <h1>series list - scratch vanilla or modded</h1>
          <div>
            <button><Link href="/pages/learn/scratch/vanilla/series/simpleplatformer/list">simple platformer</Link></button>
            <button>more coming soon</button>
          </div>
        </section>
      </div>
    </main>
  );
}
