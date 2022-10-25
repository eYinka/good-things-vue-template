import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      websiteName: "Good Things Foundation",
      topBarLinks: [
        { title: "Learn", route: "#" },
        { title: "Donate", route: "#" },
      ],
      menuLinks: [
        { title: "Home", route: "home" },
        { title: "What we do", route: "about" },
        { title: "The digital divide", route: "services" },
        { title: "Get involved", route: "" },
        { title: "Our network", route: "" },
        { title: "Insights", route: "" },
      ],
      services: [
        {
          title: "Get online week",
          description: "Lorem ipsum dolor sit amet",
          link: "#",
        },
        {
          title: "Learn my way",
          description: "Lorem ipsum dolor sit amet",
          link: "#",
        },
        {
          title: "Make it click",
          description: "Lorem ipsum dolor sit amet",
          link: "#",
        },
        {
          title: "Digital you",
          description: "Lorem ipsum dolor sit amet",
          link: "#",
        },
      ],
      copyright: "© 2022. Good Things Foundation."
    };
  },
});

export default store;
