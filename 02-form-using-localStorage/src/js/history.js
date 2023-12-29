document.addEventListener('DOMContentLoaded', function () {
    const tbody = document.querySelector('#historyTableContainer tbody');
    const historyData = JSON.parse(localStorage.getItem('historyData')) || [];
  
    // Clear existing rows
    tbody.innerHTML = '';
  

  
    historyData.forEach((entry, index) => {
      const tr = document.createElement('tr');
      ['uweight', 'uheight', 'uage', 'uactivity', 'caloriesResult', 'dateTime'].forEach((key) => {
        const td = document.createElement('td');
        td.classList.add('py-2', 'px-4', 'border-b');
        td.textContent = entry[key];
        tr.appendChild(td);
      });
  
      // Add a delete button with an onclick event to handle deletion
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'py-1', 'px-2', 'rounded', 'focus:outline-none');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        // Remove the entry from historyData
        historyData.splice(index, 1);
        // Update local storage with the modified data
        localStorage.setItem('historyData', JSON.stringify(historyData));
        // Refresh the table and update specific elements
        renderTable();
        updateSpecificElements();
      };
  
      const tdActions = document.createElement('td');
      tdActions.classList.add('py-2', 'px-4', 'border-b');
      tdActions.appendChild(deleteButton);
      tr.appendChild(tdActions);
  
      tbody.appendChild(tr);
    });
  
    if (historyData.length === 0) {
      // Display a message if there is no history data
      const tr = document.createElement('tr');
      const tdMessage = document.createElement('td');
      tdMessage.setAttribute('colspan', '7');
      tdMessage.textContent = 'No history data available.';
      tr.appendChild(tdMessage);
      tbody.appendChild(tr);
    }
  });
  
  // Function to refresh the table after deletion
  function renderTable() {
    document.dispatchEvent(new Event('DOMContentLoaded'));
  }
  
  // Function to update specific elements on the page
  function updateSpecificElements() {
    const historyData = JSON.parse(localStorage.getItem('historyData')) || [];
    if (historyData.length > 0) {
      const lastEntry = historyData[historyData.length - 1];
  
      const currentWeight = document.getElementById('currentWeight');
      const currentHeight = document.getElementById('currentHeight');
      const currentAge = document.getElementById('currentAge');
      const activityStatus = document.getElementById('activityStatus');
  
      currentWeight.textContent = lastEntry.weight;
      currentHeight.textContent = lastEntry.height;
      currentAge.textContent = lastEntry.age;
      activityStatus.textContent = lastEntry.activity;
    }
  }
  