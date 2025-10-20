import { useState, useEffect } from "react";
import axios from "axios";

const MemeMachine = () => {
  const [meme, setMeme] = useState(null);
  const [memeTitle, setMemeTitle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const toTitleCase = (str) => {
    const words = str.replace(/([A-Z])/g, " $1").split(" ");
    const titleCaseWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    return titleCaseWords.join(" ");
  };

  const fetchMeme = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://meme-api.com/gimme");
      setMemeTitle(response.data.title);
      setMeme(response.data.url);
    } catch (error) {
      console.error("Error fetching meme: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div className="main-content-wrapper">
      {loading ? (
        <section className="main-content">
          <div className="loader"></div>
        </section>
      ) : (
        <section className="main-content">
          <button className="btn" onClick={fetchMeme}>
            Refresh Meme
          </button>
          <h2 className="meme-title">{toTitleCase(memeTitle)}</h2>
          <img src={meme} alt={memeTitle} className="meme-image" />
        </section>
      )}
    </div>
  );
};

export default MemeMachine;
