import MainComponent from "./components/MaiComponent/MainComponent";

function App() {
  const data = {
    fontFamily: "'Space Mono', monospace",
    bgColor: "#fff",
    secondaryColor: "#D9D9D9",
    textColor: "#000",
    weekNumber: "Week 4",
    placeName: "My Home",
    withWhoom: "with Mr Davies",
    title: "Learning Schedule",

    scheduleInfo: {
      // heading

      // number of heading and number of row item should have to be same
      dayAndDayNo: [
        {
          day: "Monday",
          dayNo: "16",
        },
        {
          day: "Tuesday",
          dayNo: "17",
        },
        {
          day: "Wednesday",
          dayNo: "18",
        },
        {
          day: "Thursday",
          dayNo: "19",
        },
        {
          day: "Friday",
          dayNo: "20",
        },
      ],
      topics: [
        // number of heading and number of row item should have to be same
        //first row
        [
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
        ],
        // number of heading and number of row item should have to be same
        //second row
        [
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s.",
          },
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  since the 1500s.",
          },
          {
            title: "Activity",
            info: "Lorem  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Activity",
            info: "Lorem  standard dummy text ever since the 1500s.",
          },
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s.",
          },
        ],

        // number of heading and number of row item should have to be same
        //third row
        [
          {
            title: "Writing",
            info: "Lorem Ipsum is simply dummy text ever since the 1500s.",
          },
          {
            title: "Writing",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ldummy text ever since the 1500s.",
          },
          {
            title: "Assignment",
            info: "Lorem Ipsum is simply dummy text of  industry.  since the 1500s.",
          },
          {
            title: "Writing",
            info: "Lorem Ipsum is simply ",
          },
          {
            title: "Writing",
            info: " text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
        ],
      ],
    },
  };
  return (
    <div
      style={{
        "--bgColor": data.bgColor,
        "--secondaryColor": data.secondaryColor,
        "--textColor": data.textColor,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
/*    const data = {
    fontFamily: "'Space Mono', monospace",
    primaryColor: "#ff",
    secondaryColor: "#D9D9D9",
    textColor: "#000",
    weekNumber: "Week 4",
    placeName: "My Home",
    withWhoom: "with Mr Davies",
    title: "Learning Schedule",

    scheduleInfo: [
      {
        dayAndDayNo: {
          day: "Monday",
          dayNo: "17",
        },
        topics: [
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
          },
          {
            title: "Writing",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          },
        ],
      },
      {
        dayAndDayNo: {
          day: "Tuesday",
          dayNo: "18",
        },
        topics: [
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text. ",
          },
          {
            title: "Writing",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ",
          },
        ],
      },
      {
        dayAndDayNo: {
          day: "Wednesday",
          dayNo: "19",
        },
        topics: [
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          },
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text. ",
          },
          {
            title: "Writing",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
        ],
      },
      {
        dayAndDayNo: {
          day: "ThursDay",
          dayNo: "20",
        },
        topics: [
          {
            title: "Video/Road",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          },
          {
            title: "Activity",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ipsum is simply dummy text. ",
          },
          {
            title: "Writing",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          },
        ],
      },
    ],
  }; */
