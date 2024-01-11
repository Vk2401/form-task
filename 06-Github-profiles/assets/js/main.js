// Write your javascript code here
const interns = [
    "Vk2401",
    "sharif-22",
    "mshajid",
    "yrd369",
    "mushkir",
    "esakki2104prsnl",
    "suriyamassmsd",
    "riyaz1000",
    "hema-venkat3",
    "dineshdevelope",
    "swethadsalvatore",
    "vedhatech002",
    "danielace1",
    "kishorekumar-kp",
    "jeya-rosini",
    "bearcin46",
    "muthukumarimoorthi",
    "gayathrihg",
    "muthuakalya",
  ];

  function fetchAndCreateCards() {
    const cardContainer = document.getElementById('cardContainer');

    interns.forEach((intern) => {
        fetch(`https://api.github.com/users/${intern}`)
            .then(response => response.json())
            .then(data => {
                const card = document.createElement('div');
                card.classList.add('w-72', 'bg-white', 'bg-opacity-10', 'shadow-md', 'rounded-xl', 'duration-500', 'hover:scale-105', 'hover:shadow-xl', 'm-4');

                card.innerHTML = `
                    <a href="#">
                        <div class="p-2 px-5">
                            <img src="${data.avatar_url}" alt="Profile Image" class="h-auto w-72 object-cover rounded-full p-4 border-[5px] border-violet-400" id="profile-img"/>
                        </div>
                        <div class="px-4 py-3 w-72">
                            <p class="text-lg font-bold text-white truncate block capitalize text-center" id="profName">${data.name || 'N/A'}</p>
                            <div class="flex items-center flex-col justify-center">
                                <div class="flex items-center bg-black bg-opacity-50 px-10 py-2 mt-2 rounded-lg justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="text-violet-400" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
                                            <path fill="currentColor" d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zm5.414-4.919a1 1 0 0 1 1.498 1.32l-.084.095L20 13.324a1 1 0 0 1-1.32.083l-.094-.083l-1.414-1.414a1 1 0 0 1 1.32-1.498l.094.084l.707.707zM12 2a5 5 0 1 1 0 10a5 5 0 0 1 0-10"/></g></svg>
                                    <span class="text-lg font-bold text-white">Followers :</span>
                                    <span class="text-lg font-bold text-white" id="followersCount">${data.followers}</span>
                                </div>
                                <div class="flex items-center bg-black bg-opacity-50 px-10 py-2 mt-2 rounded-lg justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" class="text-violet-400" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6.75 11.5c2.75 0 3.49-2.03 3.68-3.1c.91-.29 1.57-1.14 1.57-2.15C18 7 17 6 15.75 6S13.5 7 13.5 8.25c0 .94.57 1.75 1.39 2.08C14.67 11 14 12 12 12c-1.38 0-2.34.35-3 .84V8.87c.87-.31 1.5-1.14 1.5-2.12c0-1.25-1-2.25-2.25-2.25S6 5.5 6 6.75c0 .98.63 1.81 1.5 2.12v6.26c-.87.31-1.5 1.14-1.5 2.12c0 1.25 1 2.25 2.25 2.25s2.25-1 2.25-2.25c0-.93-.56-1.75-1.37-2.07c.28-.68 1.1-1.68 3.62-1.68m-4.5 3a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m0-10.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75m7.5 1.5a.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75"/></svg>
                                    <span class="text-lg font-bold text-white">Public repo :</span>
                                    <span class="text-lg font-bold text-white" id="repoCount">${data.public_repos}</span>
                                </div>
                                <a href="${data.html_url}" target="_blank" class="px-4 py-2 bg-violet-500 hover:bg-violet-700 text-white font-bold rounded-lg mt-8">View Profile</a>
                            </div>
                        </div>
                    </a>
                `;

                cardContainer.appendChild(card);
            })
            .catch(error => {
                console.error(`Error fetching data for ${intern}:`, error);
            });
    });
}

// Call the function to fetch and create cards
fetchAndCreateCards();