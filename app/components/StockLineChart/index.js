import React from 'react';
import { View } from 'react-native';
import { StockLine } from 'react-native-pathjs-charts';
import moment from 'moment';

let options = {
  width: 250,
  height: 250,
  color: '#2980B9',
  margin: {
    top: 10,
    left: 35,
    bottom: 30,
    right: 10
  },
  animate: {
    type: 'delayed',
    duration: 200
  },
  axisX: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'bottom',
    tickValues: [],
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E'
    }
  },
  axisY: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'left',
    tickValues: [],
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E'
    }
  }
}


const Chart = ({ data }) => {

  const test = [data.pai.map((elem, i) => ({
    x: i,
    y: elem.value
  }))];

  return (
    <View>
      <StockLine data={test} options={options} xKey='x' yKey='y' />
    </View>
  )
}

export default Chart;
