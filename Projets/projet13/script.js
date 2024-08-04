let categories = ["all", "breakfast", "lunch", "shakes", "dinner"];

categories.forEach(category => {
    let categoryElement = document.querySelector(`.c${category}`);
    categoryElement.addEventListener("click", () => {
        let allDishes = document.querySelectorAll('.plat');
        allDishes.forEach(dish => {
            if (dish.classList.contains(category) || category === "all") {
                dish.style.display = "flex";
                dish.querySelector('img').classList.add('fixed-dimensions');
            } else {
                dish.style.display = "none";
            }
        });
    });
});