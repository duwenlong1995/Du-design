export default[
   {
     path: "/",
     name: "Home",
    component: () => import("../../views/Home.vue"),
    children:[
      {
        path:'',
        name:'button',
        component: () => import("../../components/button/doc/doc.md"),
      },{
        path:'input',
        name:'input',
        component: () => import("../../components/input/doc/doc.md"),
      }
    ] 
}
]