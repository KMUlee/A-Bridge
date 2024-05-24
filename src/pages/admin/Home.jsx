import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [embedUrl, setEmbedUrl] = useState("");
  useEffect(() => {
    const fetchEmbedUrl = async () => {
      try {
        const response = await axios.post(
          "https://zojk8d6ag0.execute-api.us-west-2.amazonaws.com/getquicksight-rest/",
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
      } catch (error) {
        console.error("Error fetching embed URL:", error);
      }
    };

    fetchEmbedUrl();
  }, []);
  return (
    <div className="w-full h-full">
      {embedUrl ? (
        <iframe
          title="QuickSight Dashboard"
          width="100%"
          height="600px"
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
