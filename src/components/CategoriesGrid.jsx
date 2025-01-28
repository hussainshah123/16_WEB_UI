import dishes from '../assets/images/dishes.png'


const categories = [
  { title: "Explore Food", image: dishes},
  { title: "Master Chefs", image: dishes},
  { title: "Desserts", image: dishes },
  { title: "Events", image: dishes},
  { title: "Birthdays", image:dishes},
];

const CategoriesGrid = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-title">
        Browse by <span className="highlight">Categories</span>
      </h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${index === 0 ? "large-item" : ""}`}
          >
            <img
              src={category.image}
              alt={category.title}
              className="category-image"
            />
            <div className="category-overlay">
              <h3 className="category-title">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
