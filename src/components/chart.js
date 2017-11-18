import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data) / data.length);
}

const Chart = ({ data, color, units }) => (
  <div>
    <Sparklines height={120} width={180} data={data}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(data)} {units}
    </div>
  </div>
);

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  color: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired
};

export default Chart;
