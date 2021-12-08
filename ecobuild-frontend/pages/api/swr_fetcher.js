const fetcher = async (topic) => {
  const res = await fetch(
    "https://cors-everywhere.herokuapp.com/http://ecobuild-env.eba-p5qfhucf.us-east-1.elasticbeanstalk.com/get-articles/california " + topic,
    {
      headers: {
        "origin": "x-requested-with"
      }
    }
  ).then((res) => {
    return res.json();
  });
  return res;
};

export default fetcher;
