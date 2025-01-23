import Image from "next/image";
import './style.css';
import Link from 'next/link';

export default function LearnMain() {
  return (
    <main style={{
      backgroundColor: "#1b1d21"
    }}>
    <title>planned twitch streams</title>
      <div class="container">
        <div class="navbar">
          <img src="/avatarHead.png" width="70" height="70" />
          <ul>
            <li><a href="/">home</a></li>
          </ul>
        </div>
        <section>
          <h1>planned streams</h1>
          <p>follow these rules in multiplayer games</p>
          <div>
            <button>none yet</button>
          </div>
          <div>
            <button><Link href="https://twitch.tv/LittleBlueGamer_">twitch</Link></button>
          </div>
        </section>
      </div>
    </main>
  );
}
