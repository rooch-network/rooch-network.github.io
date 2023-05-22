import React, { FC } from "react";

type DownloadButtonProps = {
  images: string[];
};

const Brand: FC<DownloadButtonProps> = ({ images }) => {
  const download = (url: string) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = url.slice(url.lastIndexOf("/") + 1);
    downloadLink.click();
  };

  console.log(images);
  console.log(images[0]);

  return (
    <>
      {images.map((url, index) => (
        <div key={url} className="flex flex-row border-t-2 mt-6">
          <div className="basis-1/2 mt-6">
            <h3>MAIN LOGOTYPE</h3>
            <div className="flex flex-row mt-6">
              <button
                className="basis-1/3 rounded-3xl p-2 border hover:border-black hover:bg-black hover:text-white"
                onClick={() => download(images[0])}
              >
                PNG
              </button>
              <button
                className="basis-1/3 ml-8 rounded-3xl p-2 border hover:border-black hover:bg-black hover:text-white"
                onClick={() => download(images[1])}
              >
                SVG
              </button>
            </div>
          </div>
          <div className=" basis-1/2 mt-6">
            <img className="mx-auto" src={url} alt="Image" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Brand;
