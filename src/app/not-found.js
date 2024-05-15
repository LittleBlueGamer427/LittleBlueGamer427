import Image from 'next/image'
import './style.css'

export default function Custom404() {
    return (
        <main style={{
            backgroundImage: "url('/not-found.png')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            color: "#ffffff"
          }}>
          <title>:(</title>
            <div class="container">
              <div class="navbar">
                <img src="/avatarHead.png" width="70" height="70" />
              </div>
              <section>
                <h5>not what you were looking for</h5>
                <div>
                  <button><a href="/">go back home</a></button>
                </div>
              </section>
            </div>
          </main>
    )
}
