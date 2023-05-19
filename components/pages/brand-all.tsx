import { useState } from 'react';
import fs from 'fs';
import archiver from 'archiver';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const [isZipping, setIsZipping] = useState(false);

  const handleDownloadClick = async () => {
    try {
      setIsZipping(true);

      const outputZip = fs.createWriteStream('rooch.zip');
      const archive = archiver('zip');

      outputZip.on('close', () => {
        setIsZipping(false);
        console.log('Zip file created successfully.');
      });

      archive.pipe(outputZip);
      archive.directory('/logo', false);
      archive.finalize();
    } catch (error) {
      console.error('Error while creating zip file:', error);
      setIsZipping(false);
    }
  };

  return (
    <div>
      <h1>Download Zip</h1>
      <button disabled={isZipping} onClick={handleDownloadClick}>
        {isZipping ? 'Zipping...' : 'Download Zip'}
      </button>
    </div>
  );
};

export default IndexPage;
