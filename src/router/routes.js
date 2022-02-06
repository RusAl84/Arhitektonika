const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Index.vue")
        }],
    },
    {
        path: "/pro",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Pro.vue")
        }],
    },
    {
        path: "/help",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Help.vue")
        }],
    },
    {
        path: "/mes",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Mes.vue")
        }],
    },
    {
        path: "/set",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Set.vue")
        }],
    },
    {
        path: "/about",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/About.vue")
        }],
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () =>
            import ("pages/Error404.vue"),
    },
];

export default routes;