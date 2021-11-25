import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import axios from 'axios';
import AppBar from './AppBar';



export default function SelectAutoWidth() {
  let payload={};

  
  const [mapid, setMapid] = React.useState("");
  const [srcmap, setSrcmap] = React.useState("");
  const handleChange = (event) => {
    setMapid(event.target.value);
    console.log(event.target.value);
    switch(event.target.value){
      case 10: {
        // Health

        const url = "http://localhost:7000/get-articles/health";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });



        setMapid("6d8ac9e2ac93471a810c81385280b281");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=6d8ac9e2ac93471a810c81385280b281");
        break;
      }
      case 11: {
        // Chemical Safety
        const url = "http://localhost:7000/get-articles/chemical safety";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });
        setMapid("7b0bf21eb8f7425f88ffa86b94550830");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=7b0bf21eb8f7425f88ffa86b94550830");
        break;
      }
      case 12: {
        // Food Resources
        const url = "http://localhost:7000/get-articles/food resources";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });
        setMapid("7b0bf21eb8f7425f88ffa86b94550830");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=7b0bf21eb8f7425f88ffa86b94550830");
        break;
      }
      case 13: {
        // Hurricane Evacution Routes
        const url = "http://localhost:7000/get-articles/hurricane evacution routes";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });
        setMapid("096a182403bd4ba5b5752efa9a31c772");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=096a182403bd4ba5b5752efa9a31c772");
        break;
      }
      case 14: {
        // Alternative Fuels
        const url = "http://localhost:7000/get-articles/alternative fuels";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });
        setMapid("06419725df80450c917b7e106f08f17d");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=06419725df80450c917b7e106f08f17d");
        break;
      }
      case 15: {
        // Air Quality Index
        const url = "http://localhost:7000/get-articles/united states air quality";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });
        setMapid("7b0bf21eb8f7425f88ffa86b94550830");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=7b0bf21eb8f7425f88ffa86b94550830");
        break;
      }
      case 16: {
        // Fire Safety
        const url = "http://localhost:7000/get-articles/fire safety";
        axios.get(url, payload, {headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        }).then((res) => {
          console.log(res);
        }).catch(function (err) {
          console.log('error');
        });
        setMapid("7b0bf21eb8f7425f88ffa86b94550830");
        setSrcmap("https://sjsugis.maps.arcgis.com/apps/instant/interactivelegend/index.html?appid=7b0bf21eb8f7425f88ffa86b94550830");
        break;
      }
      default:{
        setSrcmap("");
        break;
      }
    }
  };
  
  

    return (
      
    <Box pt={25} pl={80}>
      <AppBar></AppBar>
      <div>
        <h1>Select Map</h1>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            onChange={handleChange}
            autoWidth
            label="/"
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value={10}>Health</MenuItem>
            <MenuItem value={11}>Chemical Safety</MenuItem>
            <MenuItem value={12}>Food Resources</MenuItem>
            <MenuItem value={13}>Hurricane Evacution Routes</MenuItem>
            <MenuItem value={14}>Alternative Fuels</MenuItem>
            <MenuItem value={15}>Air Quality Index</MenuItem>
            <MenuItem value={16}>Fire Safety</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mapContainer">
        <iframe width="1000" height="800" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={srcmap}></iframe>
      </div>
    </Box>
    
    
  );
}
