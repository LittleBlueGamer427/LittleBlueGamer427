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
            <li><Link href="/pages/plannedstreams">PLANNED STREAMS</Link></li>
            <li><a href="/mewo">404</a></li>
          </ul>
        </div>
        <section>
          <h1>hello</h1>
          <p>i am stupid</p>
          <div>
            <button>This site is under construction, it's not fully finished yet.</button>
          </div>
          <div>
            <button><Link href="https://gamejolt.com/@LittleBlueGamer">gamejolt profile</Link></button>
            <button><Link href="https://discord.gg/YsqKHeMCyW">discord</Link></button>
          </div>
        </section>
      </div>
    </main>
  );
}
