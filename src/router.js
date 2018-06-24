import Vue from "vue";
import VueRouter from "vue-router";

import home from "./v/home.vue";
import started from "./v/started.vue";

/*详情页*/
import detials from "./v/detials.vue";

/*主页和用户页面*/
import content from "./v/content.vue"
import user from "./v/user.vue"

//api页面
import api from "./v/api.vue"

//关于页面
import about from "./v/about.vue"

Vue.use(VueRouter);

var routes = [
	{ 
		path: '/' ,
		component: home, 
		redirection:"/home",
		children:[
			{path:"/",component:content,redirection:"/content"},
			{name:"/user",path:"/user",component:user}
		]
	},
	
	{ 
		path:"/started", 
		component:started
	},
	
	{ 
		path:"/detials/:id", 
		component:detials,
		name:'/detials'
	},
	
	{ 
		path:"/api", 
		component:api
	},
	
	{ 
		path:"/about", 
		component:about
	}
	
];

var router = new VueRouter({
	routes:routes
});

export default router;
