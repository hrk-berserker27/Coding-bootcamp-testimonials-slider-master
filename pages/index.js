import Head from "next/head";
export default function App() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is a slider" />
        <meta
          name="keywords"
          content="Next.js,react,javascript,SASS,SCSS,CSS,HTML-5,Progressive-Web-app,Slider"
        />

        <title>Frontend Mentor | Coding Bootcamp Testimonials Slider</title>
      </Head>
      <main>
        <p className="review">
          <span className="quotes">“</span>I’ve been interested in coding for a
          while but never taken the jump, until now. I couldn’t recommend this
          course enough. I’m now in the job of my dreams and so excited about
          the future. ” Tanya Sinclair UX Engineer “ If you want to lay the best
          foundation possible I’d recommend taking this course. The depth the
          instructors go into is incredible. I now feel so confident about
          starting up as a professional developer.
          <span className="quotes">”</span>
        </p>
        <div className="writer-container">
          <div className="writer">John Tarkpor</div>
          <div className="writer-profession">Junior Front-end Developer</div>
        </div>
        <div className="hero-section">
          <div className="slider-container">
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </div>
      </main>
    </>
  );
}
