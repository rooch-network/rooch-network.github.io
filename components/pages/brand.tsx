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

  return (
    <>
      <p className="text-2xl mt-8">Assets</p>
      <button
        className="w-64 rounded-3xl mt-6 p-2 border hover:border-black hover:bg-black hover:text-white"
        onClick={() => download("/rooch.zip")}
      >
        DOWNLOAD ASSETS (.ZIP FILE)
      </button>

      {images.map((url, index) => (
        <div key={url} className="flex flex-row border-t-2 mt-6">
          <div className="basis-1/2 mt-6">
            <h3>MAIN LOGOTYPE</h3>
            <div className="flex flex-row mt-6">
              <button
                className="basis-1/3 rounded-3xl p-2 border hover:border-black hover:bg-black hover:text-white"
                onClick={() => download(url)}
              >
                PNG
              </button>
              <button
                className="basis-1/3 ml-8 rounded-3xl p-2 border hover:border-black hover:bg-black hover:text-white"
                onClick={() => download(url)}
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
