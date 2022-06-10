//Các trang dùng chung
import Header from "./components/Header";
import Footer from "./components/Footer";
import router from "./helpers/router";
import "bootstrap/dist/css/bootstrap.min.css";
const render = (content) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#content").innerHTML = content.render();
  document.querySelector("#footer").innerHTML = Footer.render();
};

// Home
import { Home } from "./pages/Home";

router.on({
  //router home
  "/": () => render(Home),
});
router.resolve();
