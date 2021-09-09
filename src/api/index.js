import axios from 'axios';

// const URL =
//   'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const options = {
//   url: 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary',
//   params: {
//     // bottom left top right (boundary)
//     bl_latitude: '11.847676',
//     bl_longitude: '108.473209',
//     tr_longitude: '109.149359',
//     tr_latitude: '12.838442',
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '9aa5e7d366msh7f12e8ad7cafa22p1cbe4ejsn40e9fb7186fa',
//   },
// };
// 7baa4d3e50msh380965153b7a593p16e792jsnaf0432193e70

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          // bottom left top right (boundary)
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        },
      }
    );

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY,
        },
      }
    );

    return data;
  } catch (e) {
    console.log(e);
  }
};
