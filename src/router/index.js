import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Project from "@/components/Project.vue";
import Content from "@/components/Content.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Content",
    component: Content
  },
  {
    path: "/project",
    name: "Project",
    component: Project
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
