import React, { FC } from "react";
import styles from "./downloadButton.module.css";

type DownloadButtonProps = {
  images: string[];
};

const DownloadButton: FC<DownloadButtonProps> = ({ images }) => {
  const downloadImage = (imageUrl: string) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = "image.jpg";
    downloadLink.click();
  };

  const downloadAllImages = () => {
    images.forEach((imageUrl) => {
      downloadImage(imageUrl);
    });
  };

  return (
    <div className={styles.container}>
      {images.map((imageUrl, index) => (
        <div key={imageUrl}>
          <img src={imageUrl} alt="Image" />
          <button className={styles.button} onClick={() => downloadImage(imageUrl)}>
            Download
          </button>
          <br></br>
          {index === images.length - 1 && (
            <button className={styles.downloadAllButton} onClick={downloadAllImages}>
              Download All Images
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DownloadButton;
