// const kips_TO_kN = 4.4482216153
const in_TO_mm = 25.4

/**
 * Method to convert data to metric format
 * @param data
 */
export function convertToMetricData(data) {
  let metricData = {...data};
  // if (data.hasOwnProperty('P_e')) {
  //   metricData.P_e = data.P_e * kips_TO_kN;
  // }
  if (data.hasOwnProperty('d_d')) {
    metricData.d_d = data.d_d * in_TO_mm;
  }

  return metricData;
}
