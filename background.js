// Set your price threshold (cents/kWh)
let PRICE_THRESHOLD = 10.0;

// ComEd 5-minute pricing API
const API_URL = "https://hourlypricing.comed.com/api?type=5minutefeed&format=json";

// Check prices every 5 minutes
chrome.alarms.create('priceCheck', { periodInMinutes: 5 });

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'priceCheck') {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      if (data?.length > 0) {
        const latestPrice = parseFloat(data[0].price);
        
        if (latestPrice >= PRICE_THRESHOLD) {
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Price Alert!",
            message: `Current price: ${latestPrice}¢/kWh (Threshold: ${PRICE_THRESHOLD}¢)`
          });
        }
      }
    } catch (error) {
      console.error("Price check failed:", error);
    }
  }
});

  
