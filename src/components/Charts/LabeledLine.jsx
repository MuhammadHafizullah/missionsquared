import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip, 
} from "chart.js"

import { Line } from "react-chartjs-2";


const LabeledLine = ({work_style}) => {

  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);


// custom plugin

const image = new Image();
image.src = '/small_chartbg.svg';

const imageBackground = {
  id: 'imageBackground',
  beforeDatasetsDraw(chart, args, plugins){
    const {ctx, chartArea: {top, bottom, left, right, width, height } } = chart;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(left, top, width, height);
    ctx.drawImage(image, left, top - 15, width, height + 35);

  }
}


ChartJS.register(imageBackground);


  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        axis: "y",
        label: 'sale of the week',
        data: work_style,
        fill: false,
        pointBorderWidth: 11,
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

// custom point text
const pointLabels = ['I', 'S', 'C', 'P']

// map letter to each data value
var letterMap = {};
work_style.forEach(function(value, index) {
  letterMap[value] = pointLabels[index];
});

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins:{
        imageBackground:imageBackground,
        datalabels:{
          display: true,
          
          color:'white',
          formatter: (value, ctx) => {
            let dataValues = ctx.dataset.data[ctx.dataIndex];
            return letterMap[dataValues];
          },
          font:{
            size:8,
          }
        },
        lollipop: false,
    },
    font:{
      family:'Merriweather',
    },
    scales: {
      x: {
        offset:true,
        beginAtZero: false,
        min:-30,
        max:+30,
        display:false,
      },
      y: {
        offset:true,
        display:false,
      },
    },
  }

  return (
    <div className="small_chart_wrapper lg:w-[430px] md:w-72 max-h-32">
    <Line options={options} data={data} id="labelLine"/>
    </div>
  )
}

export default LabeledLine