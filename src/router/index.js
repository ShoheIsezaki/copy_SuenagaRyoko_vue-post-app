import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import Resister from "../components/Resister";
import User from "../views/User";
import Post from "../views/Post";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/signin",
      component: Signin
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/resister",
      component: Resister
    },
    {
      path: "/user/:id",
      component: User
    },
    {
      path: "/post/:id",
      component: Post
    }
  ]
});
