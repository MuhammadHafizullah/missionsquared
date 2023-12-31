import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip, 
} from "chart.js"

import { Line } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);


const UnlabeledLine = ({work_style}) => {

  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        axis: "y",
        label: 'sale of the week',
        data: work_style,
        fill: false,
      pointBorderWidth: 3,
        backgroundColor: "#554266",
        borderColor: [
        "#331D4A",
        "#F1833A",
        "#458FA3",
        "#363847",
      ],
        borderWidth: 1,
      }
    ]
  }


  const options = {
    indexAxis: "y",
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
        beginAtZero: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="md:w-[150px] w-[100px] h-10">
    <Line options={options} data={data}/>
    </div>
  )
}

export default UnlabeledLine