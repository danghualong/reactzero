import { RouteConfig } from "../models"
import { lazy } from "react";
import Todo from "../module/todos/todo_view";
import Index from "../index";

const routes: RouteConfig[] = [
    {
        path:"/",
        component: lazy(()=>import("../index")),
        exact:true,
    },
    {
        path:"/index",
        component: lazy(()=>import("../index")),
        exact:true,
    },
    {
        path:"/todo",
        component: lazy(()=>import("../module/todos/todo_view")),
        exact:true,
    }
];

export default routes;