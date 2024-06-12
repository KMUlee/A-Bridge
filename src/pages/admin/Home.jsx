import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [embedUrl, setEmbedUrl] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userId = params.get("userId") * 1;
  useEffect(() => {
    const fetchEmbedUrl = async () => {
      try {
        if (userId === 2) {
          const response = await axios.get(
            "https://9w0x5xdop4.execute-api.us-west-2.amazonaws.com/getQuickSight"
          );
          console.log(response.data.body);
          const { embedUrl } = await JSON.parse(response.data.body);
          console.log(embedUrl);
          if (embedUrl) {
            setEmbedUrl(embedUrl);
          }
        } else {
          const response = await axios.post(
            "https://9w0x5xdop4.execute-api.us-west-2.amazonaws.com/getQuickSight",
            {
              test_id: 1,
            }
          );
          console.log(response.data.body);
          const { embedUrl } = await JSON.parse(response.data.body);
          console.log(embedUrl);
          if (embedUrl) {
            setEmbedUrl(embedUrl);
          }
        }
      } catch (error) {
        console.error("Error fetching embed URL:", error);
      }
    };
    if (userId) fetchEmbedUrl();
  }, [userId]);
  return (
    <div className="w-full h-full flex justify-center">
      {embedUrl ? (
        <iframe
          title="QuickSight Dashboard"
          width="90%"
          height="1700px"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading dashboard...</p>
      )}
    </div>
  );
};

export default Home;
