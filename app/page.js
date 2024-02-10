'use client'

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import VideoModal from "@/component/VideoModal";
import PageContain from "@/component/PageContain";
import Footer from "@/component/Footer";
import VideoSkeleton from "@/component/VideoSkeleton";

export default function Home() {
  const [videoLink, setVideoLink] = useState("");
  const [videoFinalLink, setVideoFinalLink] = useState([]);
  const [showDownload, setShowDownload] = useState(false);
  const [videoInfo, setVideoInfo] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading status

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

  const handleDownload = async () => {
    try {
      setLoading(true); 
      const res = await axios.get(`/api/downloader?url=${videoLink}`);
      setVideoFinalLink(res.data.videoFormats);
      setVideoInfo(res.data.videoInfo);
      setShowDownload(true);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false); // Stop loading when API request is completed
    }
  };

  const handleDownloadLink = (url) => {
    setSelectedVideoUrl(url);
    setModalOpen(true);
  };

  return (
    <>
      <main className="mainContainer mx-auto md:max-w-6xl px-4">
        <header className="headerMain flex justify-between mx-auto max-w-6xl py-4 pb-0">
          <div>
            <h3 className="text-xl font-semibold tracking-wider">Youtube Downloader</h3>
          </div>
          <p>Share Now</p>
        </header>
        <div className="bannerContainer flex text-white bg-indigo-600 rounded-md flex-col items-center min-h-[450px] w-full justify-center">
          <h3 className="mainHeading">Youtube Video Downloader</h3>
          <div className="mt-4 space-x-2 w-full p-4 flex justify-center">
            <input
              type="text"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              className="p-2 w-[60%] outline-none text-black"
              placeholder="https://youtu.be/516erRJpsWw?si=3azd..."
            />
            <button
              className="border rounded-md py-1 px-4 font-semibold ConvertBTN"
              onClick={(e) => {
                handleDownload();
                e.target.classList.add("clicked");
                setTimeout(() => {
                  e.target.classList.remove("clicked");
                }, 100);
              }}
            >
              Convert
            </button>

          </div>
        </div>

        {loading ? ( // Show loading skeleton when loading is true
          <VideoSkeleton />
        ) : showDownload && videoFinalLink.length !== 0 ? ( // Show downloaded data when available
          <div className="VideoInfoMainContainer">
            <div className="VideoInfoContainer">
              <Image
                className="VideoInfoThumbnail"
                quality={100}
                priority
                src={videoInfo.thumbnail}
                alt="Thumbnail"
                height={130}
                width={200}
              />
              <div className="VideoStatsInfoMainContainer">
                <h3 className="VideoStatsInfoMainContainerHeading">{videoInfo.title}</h3>
                <div className="VideoStatsInfo">
                  <h4 className="VideoStatsInfoDuration">Duration {videoInfo.duration} mins</h4>
                  <h4 className="VideoStatsInfoViews">Views {videoInfo.views}</h4>
                  <h4 className="VideoStatsInfoLikes">Likes {videoInfo.likes ? videoInfo.likes : "Null"}</h4>
                  <h4 className="VideoStatsInfoDisLikes">Dislikes {videoInfo.dislikes ? videoInfo.dislikes : "Null"}</h4>
                </div>
              </div>
            </div>
            <div className="responsive-table">
              <ul>
                <li className="table-header">
                  <div className="col col-1" >Quality</div>
                  <div className="col col-2" >Type</div>
                  <div className="col col-3" >Size</div>
                  <div className="col col-4" >Download</div>
                </li>
                {videoFinalLink.map((item) => (
                  <li className="table-row" key={item.url}>
                    <div className="col col-1" >{item.qualityLabel}</div>
                    <div className="col col-2" >{item.container}</div>
                    <div className="col col-3" >{item.downloadSize ? item.downloadSize : "Null"}</div>
                    <div className="col col-4" onClick={() => handleDownloadLink(item.url)} >Download</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        <PageContain />

        {modalOpen && (
          <VideoModal videoUrl={selectedVideoUrl} onClose={() => setModalOpen(false)} />
        )}
      </main>
      <Footer />
    </>
  );
}
