import Head from "next/head";
import { useState } from "react";
import useSound from "use-sound";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  const [play, { stop }] = useSound("/grubhub.mp3");
  const [playing, setPlaying] = useState(false);
  console.log("play", play);

  const handleClick = () => {
    if (playing) {
      stop();
    } else {
      play();
    }
    setPlaying(!playing);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Deals on the food you love</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg}>
        <h2>ENTREPRENERD</h2>

        <div
          className={`${styles.burgerContainer} ${
            playing ? styles.playing : ""
          }`}
          onClick={handleClick}
        >
          <img className={styles.burger} alt="burger" src="/burger.png" />
          <img
            className={`${styles.diamond1} ${playing ? styles.playing : ""}`}
            alt="diamond"
            src="/Diamond.svg"
          />
          <img
            className={`${styles.diamond2} ${playing ? styles.playing : ""}`}
            alt="diamond"
            src="/Diamond.svg"
          />
          <img
            className={`${styles.diamond3} ${playing ? styles.playing : ""}`}
            alt="diamond"
            src="/Diamond.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
