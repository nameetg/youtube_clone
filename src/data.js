export const API_KEY = 'AIzaSyC4TOMMlSFCSWcgjKu3od7Mde5Rdc2O-tE';


export const value_converter = (value) => {
  if(value >= 1000000) return Math.floor(value/1000000) + "M";
  else if(value>=1000) return Math.floor(value/1000) + "K";
  return value;
}