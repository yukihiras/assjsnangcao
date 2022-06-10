import { Popover } from "bootstrap";
import { getCategories } from "../api/category";
const Header = {
  render: async () => {
    const response = await getCategories();
    const { data } = response;
    console.log("response", response);

    return `<header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
          </a>
  
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>

          <div class="dropdown">
            <a class="nav-link px-2 text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Danh Mục
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              ${data.map(
                (category) =>
                  `<li><a class="dropdown-item" href="#">${category.name}</a></li>
              `
              )}
            </ul>
          </div>

            <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
          </ul>
  
          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-dark text-white bg-dark" placeholder="Search..." aria-label="Search">
          </form>
  
          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>`;
  },
};

export default Header;
