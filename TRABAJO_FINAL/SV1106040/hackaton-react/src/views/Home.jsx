import { Link } from "react-router-dom"; 
import { useProductos } from "/src/hooks/useProductos.js";
import "./Home.css";

export default function Home() {
  const { productos } = useProductos();

  // Agrupar productos por categoría
  const categorias = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
      acc[producto.categoria] = {
        categoria: producto.categoria,
        imagen: producto.imagen,
      };
    }
    return acc;
  }, {});

  return (
    <div className="home-container">
      {/* Banner */}
      <section className="banner text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1 className="fw-bold">Bienvenido a Nuestra Tienda</h1>
          <p className="lead">
            Descubre lo mejor en cada categoría, con productos seleccionados para ti.
          </p>
          <Link to="/productos" className="btn btn-light mt-3">
            Ver todos los productos
          </Link>
        </div>
      </section>

      {/* Tarjetas por Categoría */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Categorías</h2>

        <div className="row">
          {/* Bloque 1 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
                <img src="/images/categoria1.png" className="img-fluid mb-3" alt="Electronics" />
                <Link to="/productos?categoria=electronics" className="btn btn-warning">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Jewelery</h5>
                <img src="/images/categoria2.png" className="img-fluid mb-3" alt="Jewelery" />
                <Link to="/productos?categoria=jewelery" className="btn btn-warning">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Men's clothing</h5>
                <img src="/images/categoria3.png" className="img-fluid mb-3" alt="Men's clothing" />
                <Link to="/productos?categoria=men's clothing" className="btn btn-warning">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>

          {/* Bloque 4 */}
          <div className="col-md-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5 className="card-title">Women's clothing</h5>
                <img src="/images/categoria4.png" className="img-fluid mb-3" alt="Women's clothing" />
                <Link to="/productos?categoria=women's clothing" className="btn btn-warning">
                  Ver productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
