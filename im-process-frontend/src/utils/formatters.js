export const chartDataFormatter = (labels, data) => ({
  labels: labels,
  datasets: [
    {
      label: "Histogram of pixels per color",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: data,
    },
  ],
});
