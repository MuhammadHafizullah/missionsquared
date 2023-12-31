import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip, 
} from "chart.js"
import Annotation from "chartjs-plugin-annotation";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from "react-chartjs-2";


const ScoresChart = ({work_style}) => {


const lollipop = {
  id:'lollipop',
  afterDatasetsDraw(chart, args, option){
    const {ctx} = chart;
    ctx.save();
    for (let i = 0; i < chart.getDatasetMeta(0).data.length; i++) {
      const x = chart.getDatasetMeta(0).data[i].x;
      const y = chart.getDatasetMeta(0).data[i].y;
      circle(x, y);
    }
    function circle(xPos, yPos) {
      const angle = Math.PI / 180;
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.strokeStyle = '#458FA3';
      ctx.lineWidth = 3;
      ctx.arc(xPos, yPos, 6, angle * 0, angle * 360, false);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
}


  ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Annotation,
  ChartDataLabels
);

  ChartJS.register(
  lollipop
  )

  const data = {
    labels: [["Emotional", "Self-Awareness"], "Resilience", "Self-Blame", "Self-Confidence", "Achievement", "Change", "Independence", "Order", "Empathy", "Relationship", "Supportiveness"],
    datasets: [
      {
        axis: "y",
        label: 'sale of the week',
        data: work_style,
        fill: false,
        backgroundColor: "#458FA3",
        barPercentage:0.1,
      }
    ]
  }

  const options = {
    indexAxis: "y",
    plugins:{
        annotation:{
          annotations: {
            box1:{
              drawTime:"beforeDraw",
              type:"box",
              xMin:-50,
              xMax:50,
              yMin:-0.5,
              yMax:0.5,
              backgroundColor: '#F1F1ED',
              borderColor:'transparent'
            },
            box2:{
              drawTime:"beforeDraw",
              type:"box",
              xMin:-50,
              xMax:50,
              yMin:1.5,
              yMax:2.5,
              backgroundColor: '#F1F1ED',
              borderColor:'transparent'
            },
            box3:{
              drawTime:"beforeDraw",
              type:"box",
              xMin:-50,
              xMax:50,
              yMin:3.5,
              yMax:4.5,
              backgroundColor: '#F1F1ED',
              borderColor:'transparent'
            },
            box4:{
              drawTime:"beforeDraw",
              type:"box",
              xMin:-50,
              xMax:50,
              yMin:5.5,
              yMax:6.5,
              backgroundColor: '#F1F1ED',
              borderColor:'transparent'
            },
            box5:{
              drawTime:"beforeDraw",
              type:"box",
              xMin:-50,
              xMax:50,
              yMin:7.5,
              yMax:8.5,
              backgroundColor: '#F1F1ED',
              borderColor:'transparent'
            },
            box6:{
              drawTime:"beforeDraw",
              type:"box",
              xMin:-50,
              xMax:50,
              yMin:9.5,
              yMax:10.5,
              backgroundColor: '#F1F1ED',
              borderColor:'transparent'
            },
          }
        },
        datalabels:{
          anchor: (context) => {
            const anchor = [];
            if (context.dataset.data[context.dataIndex] >= 0) {
              anchor.push('end')
            } else {
              anchor.push('start')
            }
            return anchor;
          },
          align: (context) => {
            const align = [];
            if (context.dataset.data[context.dataIndex] >= 0) {
              align.push('right')
            } else {
              align.push('left')
            }
            return align;
          },
        },
        tooltip:{
          yAlign: 'top'
        },
        lollipop: lollipop
    },
    scales: {
      x: {
          min: -50,
          max: +50,
          beginAtZero: false,
          grid: {
            display: true,
          },
          position: 'top', // Display labels on top
        },
      x2: {
          min: -50,
          max: +50,
          beginAtZero: false,
          grid: {
            display: true,
          },
          position: 'bottom', // Display labels on bottom
        },
      y: {
        ticks:{
          color:'#458FA3'
        },
        grid: {
          display: true,
        },
      },
    },
  }

  return (
    <div className="w-full lollipop p-5 rounded-lg">
    <Bar options={options} data={data} id="scoreChart"/>
    </div>
  )
}

export default ScoresChart