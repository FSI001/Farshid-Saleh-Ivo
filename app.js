const APIkey = "AIzaSyA0xGajIiT6R2rfQdaSNdZek3K4cxlhBqk";  // Replace with your valid API key
const youtubeID = "UCwjhIjcKGbFv_1wh8PyUExQ";  // Channel ID

const subCount = document.querySelector(".sub-count");

const getYouTubeSubs = async () => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`
        );
        console.log(response);  // Check response in console
        const ytSubs = response.data.items[0].statistics.subscriberCount;
        subCount.innerHTML = ytSubs.toLocaleString(); // Format with commas
    } catch (error) {
        console.error("Error fetching subscriber count:", error.response ? error.response.data : error.message);
        subCount.innerHTML = "Error loading subscriber count";
    }
};

getYouTubeSubs();

// Hamburger menu toggle
document.getElementById("hamburgerMenu").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("showNav");
});
