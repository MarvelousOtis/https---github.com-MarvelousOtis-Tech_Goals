const currentDayElement = document.querySelector('[data-testid="currentDay"]');
const currentTimeUTCelement = document.querySelector('[data-testid="currentTimeUTC"]');

function updateDateTime() {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const timeUTC = now.toLocaleTimeString('en-US', { timeZone: 'UTC' });
  
  currentDayElement.textContent = day;
  currentTimeUTCelement.textContent = timeUTC;
}

updateDateTime(); 
setInterval(updateDateTime, 1000); 
