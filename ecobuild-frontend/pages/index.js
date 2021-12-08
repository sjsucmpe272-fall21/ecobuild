import { getLocationOrigin } from "next/dist/shared/lib/utils";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import fetcher from "./api/swr_fetcher";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useRouter } from "next/router";

export default function Home() {
  var geolocation = require("geolocation");

  const clientId =
    "998491717109-7pm66r6nuusunh6rrdd2he2vjht6gbl0.apps.googleusercontent.com";

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  const [zip, setZip] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [address, setAddress] = useState({});

  const [showloginButton, setShowloginButton] = React.useState(true);
  const [showlogoutButton, setShowlogoutButton] = React.useState(false);

  const handleZipInput = (event) => {
    setZip(event.target.value);
  };
  const router = useRouter();

  const getLocation = async () => {
    if (showloginButton) {
      alert("Please Login");
    } else {
      geolocation.getCurrentPosition(function (err, position) {
        if (err) throw err;
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        localStorage.setItem("lat", position.coords.latitude);
        localStorage.setItem("long", position.coords.longitude);
        storeAddress(position.coords.latitude, position.coords.longitude);
        router.push("/dashboard");
      });
    }
  };

  const storeAddress = async (lat, long) => {
    const data = await getAddress(lat, long);
    setAddress(data.results[0].locations[0]);
    localStorage.setItem(
      "address",
      JSON.stringify(data.results[0].locations[0])
    );
  };

  const getAddress = async (lat, long) => {
    const res = await fetch(
      "https://open.mapquestapi.com/geocoding/v1/reverse?key=llY4UkwTnJwAx8oCwsI20MELqCAo9RsO&location=" +
        lat +
        "," +
        long +
        "&includeRoadMetadata=true&includeNearestIntersection=true"
    );
    return res.json();
  };

  const storeAddressFromZip = async (zip) => {
    const data = await getAddressFromZip(zip);
    setAddress(data.results[0].locations[0]);
    localStorage.setItem(
      "address",
      JSON.stringify(data.results[0].locations[0])
    );
    router.push("/dashboard");
  };

  useEffect(() => {
    if (localStorage.getItem("articles") == null) {
      var array = [];
      localStorage.setItem("articles", JSON.stringify(array));
      console.log("SET");
    } else {
      console.log("Already there");
    }
  }, []);

  const getAddressFromZip = async (zip) => {
    const res = await fetch(
      "https://www.mapquestapi.com/geocoding/v1/address?key=llY4UkwTnJwAx8oCwsI20MELqCAo9RsO&location=" +
        zip
    );
    return res.json();
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter" && e.target.value != "" && showlogoutButton) {
      storeAddressFromZip(zip);
    } else if(e.key == "Enter"){
      alert("Please Login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex tems-center justify-center w-full flex-1 text-center">
        <div className="flex flex-col flex-1 bg-custom-blue">
          <div className="flex flex-col justify-center items-center h-full">
            <div>
              <p>ECOBUILD</p>
            </div>
            <div className="source-sans text-custom-yellow text-3xl">
              your neighborhood news
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-custom-yellow">
          <div className="flex flex-col justify-center items-center h-full">
            {showloginButton ? (
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="text-custom-blue font-bold border-2 border-custom-blue w-40"
                  >
                    Login with Google
                  </button>
                )}
              />
            ) : null}

            {showlogoutButton ? (
              <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="text-custom-blue font-bold border-2 border-custom-blue w-40"
                  >
                    Logout
                  </button>
                )}
              ></GoogleLogout>
            ) : null}
            <div
              onClick={getLocation}
              className="mt-8 w-2/5 border-2 rounded-full border-custom-blue"
              id="container"
            >
              <button className="learn-more w-full">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Get Location</span>
              </button>
            </div>
            <div className="w-2/5 my-4 text-custom-blue font-bold">
              --- OR ---
            </div>
            <div className="w-2/5">
              <input
                className="w-full px-4 py-3 rounded-full bg-custom-yellow border-2 border-custom-blue outline-none"
                type="text"
                value={zip}
                onChange={handleZipInput}
                placeholder="Zip Code"
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
