import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import pic1 from "../public/images/image-tanya.jpg";
import pic2 from "../public/images/image-john.jpg";
export default function App() {
  let data = [
    [
      pic1,
      "Tanya Sinclair",
      "UX Engineer",
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    ],
    [
      pic2,
      "John Tarkpor",
      "Junior Front-end Developer",
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    ],
  ];
  let index = 0;
  const [state, setState] = useState(index);
  let setQuote = () => {
    return data[state][3];
  };
  let setName = () => {
    return data[state][1];
  };
  let setProfession = () => {
    return data[state][2];
  };
  let setImage = () => {
    return data[state][0];
  };
  const increment = () => {
    if (state >= data.length) {
      return;
    }
    if (state === 0) {
      setState(state + 1);
    }
  };
  const decrement = () => {
    if (state <= 0) {
      return;
    }
    if (state > 0) {
      setState(state - 1);
    }
  };
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
        <div className="image-container">
          <Image
            alt="writer-image"
            src={setImage()}
            layout="fill"
            placeholder="blur"
          />
        </div>

        <p className="review">
          <span className="quotes">“&nbsp;{setQuote()}&nbsp;”</span>
        </p>
        <div className="writer-container">
          <div className="writer">{setName()}</div>
          <div className="writer-profession">{setProfession()}</div>
        </div>
        <div className="hero-section">
          <div className="slider-container">
            <button className="left" onClick={decrement}>
              L
            </button>
            <button className="right" onClick={increment}>
              R
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
