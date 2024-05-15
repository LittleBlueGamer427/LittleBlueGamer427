import Image from "next/image";
import './style.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      backgroundImage: "url('/render1.png')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      color: "#ffffff"
    }}>
    <title>LBG</title>
      <div class="container">
        <div class="navbar">
          <img src="avatarHead.png" width="70" height="70" />
          <ul>
            <li><Link href="/pages/learn/learnmain">LEARN</Link></li>
            <li><a href="/mewo">404</a></li>
          </ul>
        </div>
        <section>
          <h1>stupid gamedev</h1>
          <p>literally a gamedev and an extension (not to be mistaken for browser ones i mentioned turbowarp extensions) developer</p>
          <div>
            <button>TEST</button>
            <button>TEST</button>
          </div>
          <div class="line stripesLoader"></div>
        </section>
      </div>
    </main>
  );
}
