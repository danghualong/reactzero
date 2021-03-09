import { RouteConfig } from "../models"
import { lazy } from "react";

const routes: RouteConfig[] = [
    {
        path:"/",
        component: lazy(()=>import("../module/chat_room/index")),
        exact:true,
    },
    {
        path:"/index",
        component: lazy(()=>import("../module/chat_room/index")),
        exact:true,
    },
    {
        path:"/todo",
        component: lazy(()=>import("../module/todos/todo_view")),
        exact:true,
    }
];

export default routes;