import { Link } from "react-router-dom";
import products from '../data';

const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <div className="products">
        {products.map((product)=>{
          return (
            <article key={product.id}>
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          )
        })}
      </div>
    </section>
  );
};

export default Products;
