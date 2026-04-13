import fs from 'fs';
import https from 'https';

const API_KEY = 'AIzaSyAaUwXcNHVrH_mgIMAqS5QX6OuJWO7ihWk';
const PLACE_ID = 'ChIJSbNxmWFnLxMRV79_ZSyEWoI';
const OUTPUT_PATH = './public/reviews.json';

const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&language=it&key=${API_KEY}`;


https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const json = JSON.parse(data);
    if (json.result && json.result.reviews) {
      // Sort reviews by time (most recent first)
      const sorted = json.result.reviews.sort((a, b) => b.time - a.time);
      // Take the 10 most recent
      const top10 = sorted.slice(0, 10);
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(top10, null, 2));
      console.log(`Saved ${top10.length} most recent reviews to ${OUTPUT_PATH}`);
    } else {
      console.error('No reviews found or error in API response:', json);
    }
  });
}).on('error', (err) => {
  console.error('Error fetching reviews:', err);
});
