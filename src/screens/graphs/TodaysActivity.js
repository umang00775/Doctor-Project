import React from 'react';
import {Donut} from 'react-native-donut-chart';

const done = 75;

const TodaysActivity = () => {
    const data = [
        {
          value: done, 
          color: "#00B5E2",
        },
        {
          value: 100-done,
          color: 'rgba(0,0,0,0.125)',
        },
      ]
      return(
        <Donut data={data}/>
      )
}

export default TodaysActivity;
export {done};