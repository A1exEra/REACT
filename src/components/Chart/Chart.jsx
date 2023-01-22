import ChartBars from "./ChartBars";
import "./Chart.css";
const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
