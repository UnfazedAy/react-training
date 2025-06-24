import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="pathWrapper">
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
        doloremque, modi aperiam tempore veniam laborum veritatis repudiandae
        vero iure rem autem reiciendis eveniet eaque voluptates? Culpa autem
        itaque illo corporis.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        ipsum dolorum in eum reprehenderit? Qui ipsum iusto, optio, illum,
        debitis reprehenderit necessitatibus odit earum architecto voluptates
        quo excepturi hic molestiae?
      </p>
      <div className="btnGroup">
        <Link to="frontend">Frontend </Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
