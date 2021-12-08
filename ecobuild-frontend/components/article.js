import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

export default function article({ img, title, description, link, savedArticles }) {
  const [saved, setSaved] = useState(false);
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    setLocalStorageData(JSON.parse(localStorage.getItem("articles")));
    const index = localStorageData.findIndex((x) => x.title == title);
    if(index>-1){
      setSaved(true);
    }
  }, [localStorageData, saved]);

  const handleClick = (e) => {
    setSaved(!saved);

    if (!saved) {
      console.log("IF: ", localStorageData);
      localStorageData.push({ title: title });
      localStorage.setItem("articles", JSON.stringify(localStorageData));
    } else {
      console.log("ELSE:", localStorageData);
      console.log({ title: title });

      const index = localStorageData.findIndex((x) => x.title == title);
      console.log("INDEX: ", index);
      var arr = localStorageData;
      if (index > -1) {
        arr.splice(index, 1);
        setLocalStorageData(arr);
        localStorage.setItem("articles", JSON.stringify(localStorageData));
      }
    }
  };

  return (
    <div className={`${(savedArticles)?((saved)?(""):("hidden")):("")} shadow justify-center items-start m-3 mx-16 p-2 border-2 border-custom-blue rounded-lg text-custom-blue`}>
      <div className="text-left text-xl font-semibold">{title}</div>
      <div className="text-left">{description}</div>
      <div className="flex justify-between items-center">
        <div
          className="cursor-pointer flex items-center text-sm"
          onClick={handleClick}
        >
          {saved ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
        </div>
        <div className="text-xs italic my-2">
          <a
            className="text-custom-yellow bg-custom-blue rounded-full px-4 py-2"
            target="_blank"
            href={link}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
