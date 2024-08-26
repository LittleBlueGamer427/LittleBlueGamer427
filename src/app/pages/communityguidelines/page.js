import Image from "next/image";
import './style.css';
import Link from 'next/link';

export default function LearnMain() {
  return (
    <main style={{
      backgroundColor: "#1b1d21"
    }}>
    <title>community guidelines :)</title>
      <div class="container">
        <div class="navbar">
          <img src="/avatarHead.png" width="70" height="70" />
          <ul>
            <li><a href="/">home</a></li>
          </ul>
        </div>
        <section>
          <h1>community guidelines</h1>
          <p>follow these rules in multiplayer games</p>
          <p>anti-furs homophobes transphobes and any other similar idiots are not allowed</p>
          <p>(if you hate furries or lgbtq GET OFF MY FRICKIN GAME NOW)</p>
          <p>p3d0philes and gr00mers also arent allowed</p>
          <p>no racism and no n*zis. it does NOT matter if its roleplay or not</p>
          <p>remember to respect pronouns btw</p>
          <p>no political topics</p>
          <p>and finally remember your playing with real people</p>
          <p>lbgat rules apply (except for the mostly english rule)</p>
        </section>
      </div>
    </main>
  );
}
