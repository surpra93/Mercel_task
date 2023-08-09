export const EngagementHelper = (messageCountList, channels) => {
  const combinedData = {
    series: [],
  };

  channels.forEach((channelList) => {
    const countData = [];

    messageCountList.forEach((countList) => {
      if (countList.channelId === channelList.value) {
        countData.push(Number(countList.count));
      }
    });

    combinedData.series.push({
      data: countData,
    });
  });

  const options = {
    chart: {
      type: "spline", // Specify the default chart type
      backgroundColor: "#22222c",
    },
    title: {
      text: "Engagement Over Time",
      style: {
        color: "#ffffff",
      },
    },
    xAxis: {
      lineWidth: 2,
      crosshair: true,
      labels: {
        style: {
          color: "lightgray",
        },
      },
    },
    yAxis: {
      lineWidth: 2,
      gridLineWidth: 0,
      labels: {
        style: {
          color: "lightgray",
        },
      },
    },
    series: combinedData.series,
    legend: {
      enabled: false,
    },
  };
  return options;
};
