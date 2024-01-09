import data from "../js/data.json";

function createCard(food) {
    const card = document.createElement("div");
    card.classList.add("w-72", "bg-white", "shadow-md", "rounded-xl", "duration-500", "hover:scale-105", "hover:shadow-xl");

    card.innerHTML = `
      <a href="#">
        <img src="${food.image}" alt="${food.name}" class="h-80 w-72 object-cover rounded-t-xl" />
        <div class="px-4 py-3 w-72">
          <p class="text-lg font-bold text-black truncate block capitalize">${food.name}</p>
          <div class="flex items-center">
            <p class="text-lg font-semibold text-black cursor-auto my-3">${food.description}</p>
          </div>
        </div>
      </a>
    `;

    return card;
}

const appContainer = document.querySelector("#foodContainer");

// Loop through the JSON data and append cards to the container
data.forEach(food => {
    const card = createCard(food);
    appContainer.appendChild(card);
});