import MyMain from "@/pages/MyMain";
import { createRouter, createWebHistory } from "vue-router";
import PostPage from "@/pages/PostPage";
import MyAbout from "@/pages/MyAbout";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";



const routes = [
  {
    path: "/",
    component: MyMain,
  },
  {
    path: "/pages",
    component: PostPage,
  },
  {
    path: "/about",
    component: MyAbout,
  },
  {
    path: "/pages/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore
  }
];


const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
