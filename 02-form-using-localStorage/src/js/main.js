document.addEventListener('DOMContentLoaded', function () {
  const formEl = document.getElementById('bmrForm');
  const formContainerEl = document.getElementById('formContainer');
  const closeBtnEl = document.getElementById('close-btn');
  const updateBtn = document.getElementById('updateBtn');


    const historyData = JSON.parse(localStorage.getItem('historyData')) || [];
    if (historyData.length > 0) {
      const lastEntry = historyData[historyData.length - 1];
  
      const currentWeight = document.getElementById('currentWeight');
      const currentHeight = document.getElementById('currentHeight');
      const currentAge = document.getElementById('currentAge');
      const activityStatus = document.getElementById('activityStatus');
      const calEl = document.getElementById('calEl');

  
      currentWeight.textContent = lastEntry.uweight;
      currentHeight.textContent = lastEntry.uheight;
      currentAge.textContent = lastEntry.uage;
      activityStatus.textContent = lastEntry.uactivity;
      calEl.textContent = lastEntry.caloriesResult;
    }


  formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(formEl);
    const formObject = {};
    
    formData.forEach((value, key) => {
      formObject[key] = value;
      if(key === 'uactivity'){
        formObject[key] = getActivityLevelText(parseFloat(value))
       
      }
    });

    formObject['caloriesResult'] = calculateCalories(formData);

    // Get existing data from local storage
    let historyData = JSON.parse(localStorage.getItem('historyData')) || [];

    // Append the new form data
    historyData.push({
      ...formObject,
      dateTime: new Date().toLocaleString(),
    });

    // Store the updated data back in local storage
    localStorage.setItem('historyData', JSON.stringify(historyData));

    // Hide the form
    formContainerEl.style.display = 'none';
    formEl.reset()
    window.location.reload()
    
  });

  function toggleModal() {
    formContainerEl.style.display =
      formContainerEl.style.display === 'none' ||
      formContainerEl.style.display === ''
        ? 'flex'
        : 'none';
  }

  closeBtnEl.addEventListener('click', toggleModal);
  updateBtn.addEventListener('click', toggleModal);

  function calculateCalories(formData) {
    const weight = parseFloat(formData.get('uweight'));
    const height = parseFloat(formData.get('uheight'));
    const age = parseInt(formData.get('uage'));
    const activityLevelInt = parseFloat(formData.get('uactivity'));
    const gender = formData.get('ugender');

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please enter valid values for weight, height, and age.');
        return;
    }

    let basalMetabolicRate;

    if (gender === 'male') {
        // BMR calculation for men
        basalMetabolicRate = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else if (gender === 'female') {
        // BMR calculation for women
        basalMetabolicRate = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    } else {
        // Handle other gender options or provide a default value
        alert('Invalid gender. Please select Male or Female.');
        return;
    }

    const totalCalories = basalMetabolicRate * activityLevelInt;

    return totalCalories.toFixed(2);
}

});

function getActivityLevelText(activityLevel) {
  if (activityLevel <= 1.2) {
    return 'Low';
  } else if (activityLevel <= 1.375) {
    return 'Medium';
  } else if (activityLevel <= 1.55) {
    return 'High';
  } else if (activityLevel <= 1.725) {
    return 'Very';
  } else {
    return 'Extra High';
  }
}