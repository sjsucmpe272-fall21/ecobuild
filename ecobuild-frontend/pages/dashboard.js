import Head from "next/head";
import React, { useState, useEffect } from "react";
import fetcher from "./api/swr_fetcher";
import Article from "../components/article";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

export default function dashboard() {
  const [localStorageData, setLocalStorageData] = useState([]);
  const checkIfSaved = (title) => {
    setLocalStorageData(JSON.parse(localStorage.getItem("articles")));
    const index = localStorageData.findIndex((x) => x.title == title);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  };

  const [address, setAddress] = useState({});

  useEffect(() => {
    setAddress(JSON.parse(localStorage.getItem("address")));
  }, []);

  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArtilces] = useState(false);
  const [mapSrc, setMapSrc] = useState("air");
  const [mapSource, setMapSource] = useState(
    "https://sjsugis.maps.arcgis.com/apps/webappviewer/index.html?id=27796ed377cb4811bee17253d362944b"
  );

  async function getAddress() {
    const response = await fetcher(mapSrc);
    setArticles(response.articles);
  }

  useEffect(() => {
    getAddress();
  }, [mapSrc]);

  useEffect(() => {
    if (mapSrc == "health") {
      setMapSource(
        "https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=6d8ac9e2ac93471a810c81385280b281"
      );
    } else if (mapSrc == "chemical") {
      setMapSource(
        "https://sjsugis.maps.arcgis.com/apps/webappviewer/index.html?id=7b0bf21eb8f7425f88ffa86b94550830"
      );
    } else if (mapSrc == "food") {
      setMapSource(
        "https://sjsugis.maps.arcgis.com/apps/webappviewer/index.html?id=4715264aca854191a9bae81dee1c9466"
      );
    } else if (mapSrc == "fuel") {
      setMapSource(
        'https://sjsugis.maps.arcgis.com/apps/instant/nearby/index.html?appid=06419725df80450c917b7e106f08f17d&sliderDistance=1"'
      );
    } else if (mapSrc == "air") {
      setMapSource(
        "https://sjsugis.maps.arcgis.com/apps/webappviewer/index.html?id=27796ed377cb4811bee17253d362944b"
      );
    } else if (mapSrc == "power plant") {
      setMapSource(
        "https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=9e0fa040832c41539c309bd1b9bf9a9f"
      );
    }
  }, [mapSrc]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex tems-center justify-center w-full flex-1 text-center">
        <div className="flex flex-col flex-1 bg-custom-blue">
          <div className="mt-8 flex justify-around items-center">
            <div className="text-custom-yellow">{address.adminArea5}, {address.adminArea3}, {address.adminArea1}</div>
            <div>
              <label htmlFor="cars" className="text-custom-yellow">
                Choose a map:
              </label>
              <select
                onChange={(e) => setMapSrc(e.target.value)}
                value={mapSrc}
                name="cars"
                id="cars"
                className="outline-none border-2 border-custom-yellow text-custom-yellow rounded-lg px-2 py-2 ml-4 bg-custom-blue"
              >
                <option value="health">Covid - 19</option>
                <option value="chemical">Chemical Safety</option>
                <option value="food">Food Resources</option>
                <option value="fuel">Alternative Fuels</option>
                <option value="air">Air Quality Index</option>
                <option value="power plant">Power Plants</option>
              </select>
            </div>
          </div>
          <div className="w-full h-screen p-8">
            <iframe className="w-full h-4/5 rounded" src={mapSource}></iframe>
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-custom-yellow p-8">
          <div className="flex justify-around">
            <div className="text-xl text-custom-blue font-bold">
              Articles for you
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSavedArtilces(!savedArticles)}
            >
              {savedArticles ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
              <h7 className="text-custom-blue font-bold ml-2">
                Saved Articles
              </h7>
            </div>
          </div>

          <div className="">
            {articles.map((item) => {
              return (
                <Article
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.url}
                  key={item.url}
                  savedArticles={savedArticles}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
