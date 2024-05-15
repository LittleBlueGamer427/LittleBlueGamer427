import Image from "next/image";
import '/style.css';
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
    <title>LBG Learn</title>
      <div class="container">
        <div class="navbar">
          <img src="/avatarHead.png" width="70" height="70" />
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/mewo">404</a></li>
          </ul>
        </div>
        <section>
          <h1>tutorials</h1>
          <p>ready to learn from the stupid</p>
          <div>
            <button><Link href="/pages/learn/scratch/vanilla/series/serieslist">vanilla or modded scratch</Link></button>
            <button>modded scratch only (coming soon)</button>
          </div>
        </section>
      </div>
    </main>
  );
}
