import React from 'react';

const subdomains = [
  'josh.sdcard.photos',
  'brandon.sdcard.photos',
  'johnathan.sdcard.photos',
];

const SubdomainList = () => {
  return (
    <div className="subdomain-list mt-8">
      <h2 className="font-ibm-mono text-lg sm:text-2xl mt-2">Photo Blogs</h2>
      <ul className="list-disc list-inside text-gray-400">
        {subdomains.map((subdomain, index) => (
          <li key={index}>
            <a href={`https://${subdomain}`} className="font-ibm-mono text-gray-400 underline hover:font-bold">
              {subdomain}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubdomainList;