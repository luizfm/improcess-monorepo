// eslint-disable-next-line no-unused-vars
import { Line as LineJS } from "chart.js/auto";
import { useCallback, useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { chartDataFormatter } from "../../utils/formatters";

import "./App.css";

const labelsArray = Array.from({ length: 256 }, (_, index) => index);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function App() {
  const [imageData, setImageData] = useState([]);
  const [formattedChartData, setFormattedChartData] = useState();
  const inputRef = useRef(null);

  const onUploadImageClick = useCallback(() => {
    inputRef.current.click();
  }, []);
  const onUploadImage = useCallback(async (event) => {
    console.log(event.target.files[0]);
    const selectedImage = event.target.files[0];
    if (!selectedImage) {
      return;
    }

    const data = new FormData();
    data.append("files", selectedImage);
    fetch("http://192.168.0.31:3333/image", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        console.log("passou", response);
        response.json().then((data) => setImageData(data.imageHistogram));
      })
      .catch((err) => {
        console.log({ err }, "aqui", err.message);
      });
  }, []);

  useEffect(() => {
    setFormattedChartData(chartDataFormatter(labelsArray, imageData));
  }, [imageData]);

  return (
    <div className="App">
      <main className="main-content">
        <p>APS Image processing - Lucas Dias, Luiz F. de Morais</p>
        <div className="chart-container">
          {imageData.length > 0 && (
            <Line
              data={formattedChartData}
              options={options}
              className="line-chart"
            />
          )}

          <button className="upload-image-button" onClick={onUploadImageClick}>
            Upload an image
          </button>
          <input
            type="file"
            className="file-input"
            ref={inputRef}
            onChange={onUploadImage}
            multiple={false}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
