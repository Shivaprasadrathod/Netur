// Dummy data for demonstration
let tankLevel = 65; // percent
let soilMoisture = [
  { name: "Zone 1", value: 40 },
  { name: "Zone 2", value: 75 },
  { name: "Zone 3", value: 55 }
];
let consumption = 1200; // Liters today
let logs = [
  { date: "2025-08-28", event: "Low Tank Level", details: "Tank below 20%" },
  { date: "2025-08-28", event: "Pump Started", details: "Manual control" },
  { date: "2025-08-27", event: "Predicted Demand", details: "1300L for tomorrow" }
];

// Update tank level UI
function updateTankLevel(level) {
  document.getElementById('tankFill').style.width = level + '%';
  document.getElementById('tankLabel').textContent = level + '% Full';
}

// Update soil moisture UI
function updateMoisture() {
  const moistureList = document.getElementById('moistureList');
  moistureList.innerHTML = '';
  soilMoisture.forEach(zone => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${zone.name}:</strong>
      <div class="moisture-bar">
        <div class="moisture-fill" style="width: ${zone.value}%"></div>
      </div>
      <span>${zone.value}%</span>
    `;
    moistureList.appendChild(div);
  });
}

// Update consumption UI
function updateConsumption() {
  document.getElementById('consumptionLabel').textContent = consumption + ' Liters today';
}

// Update logs UI
function updateLogs() {
  const logTable = document.getElementById('logTable');
  logTable.innerHTML = '';
  logs.forEach(log => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${log.date}</td><td>${log.event}</td><td>${log.details}</td>`;
    logTable.appendChild(tr);
  });
}

// Control buttons
document.addEventListener('DOMContentLoaded', function() {
  updateTankLevel(tankLevel);
  updateMoisture();
  updateConsumption();
  updateLogs();

  document.getElementById('pumpBtn').onclick = function() {
    logs.unshift({ date: "2025-08-28", event: "Pump Started", details: "Manual control" });
    updateLogs();
    alert('Pump started!');
  };
  document.getElementById('valveBtn').onclick = function() {
    logs.unshift({ date: "2025-08-28", event: "Valve Opened", details: "Manual control" });
    updateLogs();
    alert('Valve opened!');
  };
  document.getElementById('downloadPdfBtn').onclick = function() {
    alert('PDF report download feature coming soon!');
  };
  document.getElementById('exportExcelBtn').onclick = function() {
    alert('Excel export feature coming soon!');
  };
});