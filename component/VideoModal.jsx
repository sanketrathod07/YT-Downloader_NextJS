import { useEffect } from 'react';

const VideoModal = ({ videoUrl, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling on the background content when modal is open
    return () => {
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
    };
  }, []);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="video-modal-overlay" onClick={handleClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <video src={videoUrl} controls autoPlay className="video-modal-video" />
      </div>
      <style jsx>{`
        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black overlay
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .video-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          overflow: hidden;
        }

        .video-modal-video {
          width: 100%;
          height: 100%;
          object-fit: contain; // Ensure the video maintains its aspect ratio
        }
      `}</style>
    </div>
  );
};

export default VideoModal;
