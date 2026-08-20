"use strict";

export function initFilter() {
  const filtersItems = document.querySelectorAll(".filters__item");
  const filtrsButtons = [...document.querySelectorAll(".filters__button")];

  filtrsButtons.forEach(elem => 
    elem.addEventListener("click", filterItems)
  );

  function filterItems(e){
    const clickedButton = e.target.id;

    for (const item of filtersItems) {
    if (item.dataset.type === clickedButton){
      item.classList.remove("hidden");
      continue;
    } else if( e.target.id === "showAll"){
      item.classList.remove("hidden");
      continue;
    }
      item.classList.add("hidden");
    }
  };
}

initFilter();

//===============2==================
// Gallery data
const galleryData = [
  {
    id: 1,
    title: "Mountain Landscape",
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Beautiful mountain scenery with snow-capped peaks"
  },
  {
    id: 2,
    title: "Modern Building",
    category: "architecture",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Contemporary architecture with clean lines"
  },
  {
    id: 3,
    title: "Beach Paradise",
    category: "travel",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Tropical beach with crystal clear water"
  },
  {
    id: 4,
    title: "Gourmet Pizza",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Delicious pizza with fresh ingredients"
  },
  {
    id: 5,
    title: "Forest Path",
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Serene forest path surrounded by tall trees"
  },
  {
    id: 6,
    title: "Historic Castle",
    category: "architecture",
    image:
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Ancient castle with rich history"
  },
  {
    id: 7,
    title: "City Skyline",
    category: "travel",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Vibrant cityscape at dusk"
  },
  {
    id: 8,
    title: "Fresh Salad",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Healthy salad with colorful vegetables"
  },
  {
    id: 9,
    title: "Waterfall",
    category: "nature",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Majestic waterfall in the wilderness"
  },
  {
    id: 10,
    title: "Bridge Design",
    category: "architecture",
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Innovative bridge with unique architecture"
  },
  {
    id: 11,
    title: "Mountain Hike",
    category: "travel",
    image:
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Adventurous hiking trail in the mountains"
  },
  {
    id: 12,
    title: "Dessert Platter",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description: "Decadent dessert selection"
  }
];

// DOM elements
const tabs = document.querySelectorAll(".tab");
const galleryContainer = document.getElementById("gallery");

// Function to generate gallery items
function generateGalleryItems(items) {
  galleryContainer.innerHTML = "";

  if (items.length === 0) {
    galleryContainer.innerHTML =
      '<div class="no-results">No images found in this category.</div>';
    return;
  }

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;

    galleryContainer.appendChild(galleryItem);
  });
}

// Function to filter gallery by category
function filterGallery(category) {
  if (category === "all") {
    generateGalleryItems(galleryData);
  } else {
    const filteredItems = galleryData.filter(
      (item) => item.category === category
    );
    generateGalleryItems(filteredItems);
  }
}

// Event listeners for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Filter gallery
    const category = this.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initialize gallery with all items
generateGalleryItems(galleryData);
