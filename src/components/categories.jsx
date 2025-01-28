import dishes from '../assets/images/dishes.png'

const categories = [
  { id: 1, name: "Explore Food",
    price: 200, img: dishes},
  { id: 2, name: "House Grill",price: 200, img:dishes },
  { id: 3, name: "Desserts",price: 200, img: dishes },
];

const Categories = () => {
  return (
    <section className="categories">
        <div className='text'>
      <h2>Our Most <br /> <span>Pololar dishes</span><br /> This Month</h2>
      <button>See All</button>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
            <p>QAR {category.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
