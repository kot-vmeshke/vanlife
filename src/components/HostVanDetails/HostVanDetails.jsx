import { NavLink, Outlet, useParams } from 'react-router-dom';
const HostVanDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="container">
        <a href=""></a>
        <div className="bg">
          <div className="header">
            <div>
              <img src="/images/modest-explorer.png" alt="" />
            </div>
            <div>
              <span>Simple</span>
              <h2>Modest Explorer</h2>
              <p>
                $60<small>/day</small>
              </p>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={`/host/vans/${id}`}>Details</NavLink>
              </li>
              <li>
                <NavLink to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
              </li>
              <li>
                <NavLink to={`/host/vans/${id}/photos`}>Photos</NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { HostVanDetails };
