import "./Navbar.css";
import { BellFilled, CaretDownOutlined, DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <div className="navbar">
      <div className="col-1">
        <button className="btn">
          My Projects
          <DownOutlined className="chevron-down-icon" />
        </button>
        <button className="btn">
          Create
          <PlusOutlined className="plus-icon" />
        </button>
      </div>
      <div className="col-2">
        <div className="input">
          <SearchOutlined className="search-icon" />
          <input className="search" type="text" placeholder="Search" />
        </div>
        <img className="avatar" src="" alt="" />
        <span>Hello, Syed Taha</span>
        <CaretDownOutlined className="icon carret-icon" />
        <BellFilled className="icon bell-icon" />
      </div>
    </div>
  );
}

export default Navbar;
