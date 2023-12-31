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

  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        axis: "y",
        label: 'sale of the week',
        data: work_style,
        fill: false,
        pointBorderWidth: 10,
        backgroundColor: "#554266",
        borderColor: [
        "#331D4A",
        "#F1833A",
        "#458FA3",
        "#363847",
      ],
        borderWidth: 2,
      }
    ]
  }

  const legend = {
    display: false
  }

  const customBorder = {
    id: 'customBorder',
    beforeDraw(chart, args, pluginOptions){
        const {ctx} = chart;
    }
  }

// custom point text
const pointLabels = ['I', 'S', 'C', 'P']

// map letter to each data value
var letterMap = {};
work_style.forEach(function(value, index) {
  letterMap[value] = pointLabels[index];
});

  const options = {
    responsive:true,
    indexAxis: "y",
    plugins:{
        customBorder: customBorder,
        datalabels:{
          display: true,
          color:'white',
          formatter: (value, ctx) => {
            let dataValues = ctx.dataset.data[ctx.dataIndex];
            return letterMap[dataValues];
          }
        },
        lollipop: false
    },
    scales: {
      x: {
        
        beginAtZero: false,
        ticks: {
            display: false,
        },
        grid: {
          display: true,
          color: (context)=>{
            if(context.tick.$context.index === 2){
                return '#331D4A';
            }
            else{
                return 'rgba(0,0,0,0.1)'
            }
          }
        },
      },
      y: {
        ticks: {
            display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="w-full small_chart_wrapper max-w-80 max-h-32">
    <Line options={options} data={data} id="labelLine"/>
    </div>
  )
}

export default LabeledLine