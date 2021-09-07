import { createApp, h } from "vue";
import FourOhFour from "./routes/FourOhFour.vue";
import routes from "./routes/";
import "./index.css";

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || FourOhFour;
    },
  },

  render() {
    return h(this.ViewComponent);
  },

  created() {
    window.addEventListener("popstate", () => {
      this.currentRoute = window.location.pathname;
    });
  },
};

createApp(SimpleRouter).mount("#app");
