import React, { useState } from "react";
import styles from "./welcome.module.css";
import Statistics from "../statistics";

const Welcome = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [urls, setUrls] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://shrtlnk.dev/api/v2/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "ujwEIkbEREBOExwRgWgwvpQkMnwTlFDEg1eV7F55oBWBF",
        },
        body: JSON.stringify({ url: originalUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setUrls([...urls, data.shrtlnk]);
      setError("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  //this function for copy link
  const copyToClipboard = async (e:string) => {
    try {
      await navigator.clipboard.writeText(e);
      alert("copy success !")
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.left}>
          <h1 className="very-dack-Violet max-font">
            <b>More than just shorter links</b>
          </h1>
          <p className="font-size-2">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-cyan-raduis-50">Get Started</button>
        </div>
        <div className={styles.rigth}>
          <img src="images/illustration-working.svg" alt="welcome-image" />
        </div>
      </div>

      <div className={styles.supCardContainer}>
        <div className={styles.card}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                required
              />
              <button className="btn-cyan-raduis-15" type="submit">
                Shorten It!
              </button>
            </form>
            {error && <p>{error}</p>}
        </div>
      </div>
      <div className={styles.stat}>
        <div className={styles.subStat}>
        {urls.map((url, index) => (
              <div className={styles.response} key={index}>
                <div className={styles.ResponseLft}><p>{originalUrl}</p></div>
                <div className={styles.ResponseRigth}><p>{index + 1}: {url}</p><button className="btn-cyan-raduis-10" onClick={()=>copyToClipboard(url)}>Copy</button></div>
              </div>
            ))};
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default Welcome;
