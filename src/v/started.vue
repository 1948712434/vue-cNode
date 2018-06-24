<template>
	<div id="started">
		<div id="started-content">
			<header class="started-head">
				<a href="http://localhost:8081/577b5dab4e3c2a8305cc0e73#/">首页</a>/ Node.js 新手入门
			</header>
			<div class="started-main">
				
				<div class="started-main-start">
					<h3>Node.js 入门</h3>
					<div class="start-item" v-for="item in startList">
						<p>{{item.title}}</p>
						<a :href="item.link">{{item.link}}</a>
					</div>
				</div>
				
				<div class="started-main-resource">
					<h3>Node.js 资源</h3>
					<div class="resource-item" v-for="item in resourceList">
						<p>{{item.title}}</p>
						<a :href="item.link">{{item.link}}</a>
					</div>
				</div>
				
				<div class="started-main-celebrity">
					<h3>Node.js 名人</h3>
					<p>名人堂</p>
					<a href="https://github.com/cnodejs/nodeclub/wiki">https://github.com/cnodejs/nodeclub/wiki/名人堂</a>
				</div>
				
				<div class="started-main-server">
					<h3>Node.js 服务器</h3>
					<p>新手搭建 Node.js 服务器，推荐使用无需备案的<a class="a-inline" href="https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com/)</a></p>
				</div>
			</div>
		</div>
		<div id="started-sidebar">
			<div class="started-sidebar-sigin">
				<p class="started-sigin-header">CNode：Node.js专业中文社区</p>
				<p class="started-sigin-center">您可以 <a href="#">登录</a> 或 <a href="#">注册</a>  , 也可以</p>
				<p class="started-sigin-button"><button>通过 GitHub 登录</button></p>
			</div>
			<noreply></noreply>
			<qr></qr>
		</div>
	</div>
</template>

<script>
	import noreply from "./not_reply.vue";
	import qr from "./qr.vue";
	
	
	export default{
		components:{noreply,qr},
		data(){
			return{
				startList:[
					{
						title:"《快速搭建 Node.js 开发环境以及加速 npm》",
						link:"http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html"
					},
					
					{
						title:"《Node.js 包教不包会》",
						link:"https://github.com/alsotang/node-lessons"
					},
					
					{
						title:"《ECMAScript 6入门》",
						link:"http://es6.ruanyifeng.com/"
					},
					
					{
						title:"《七天学会NodeJS》",
						link:"https://github.com/nqdeng/7-days-nodejs"
					}
				],
				
				resourceList:[
					{
						title:"《前端资源教程》",
						link:"https://cnodejs.org/topic/56ef3edd532839c33a99d00e"
					},
					
					{
						title:"《国内的 npm 镜像源》",
						link:"http://cnpmjs.org/"
					},
					
					{
						title:"《node weekly》",
						link:"http://nodeweekly.com/issues"
					},
					
					{
						title:"《node123-node.js中文资料导航》",
						link:"https://github.com/youyudehexie/node123"
					},
					
					{
						title:"《A curated list of delightful Node.js packages and resources》",
						link:"https://github.com/sindresorhus/awesome-nodejs"
					},
					
					{
						title:"《Node.js Books》",
						link:"https://github.com/pana/node-books"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	@mixin flex{
		display:-webkit-flex;
		display: flex;
	}
	
	@mixin justify-content{
		-webkit-justify-content: space-between;
		justify-content:space-between;
	}
	
	@mixin flex-direction{
		-webkit-flex-direction:row;
		flex-direction:row;
	}
	
	@mixin color{
		color: #7CBB1E;
	}
	
	#started{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 100;
		padding-top: 15px;
	}
	
	#started-content{
		flex:auto;
		border-radius:3px;
		overflow: hidden;
		padding-right: 15px;
	}
	
	.started-head{
		width: 100%;
		padding: 10px;
		background-color: #eee;
		font-size: 1.6rem;
		color: #999;
		box-sizing: border-box;
		
		a{
			color: #7EBC13;
		}
	}
	
	.started-main{
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
		background-color: #fff;
		font-size: 1.6rem;
		
		.started-main-start,
		.started-main-resource,
		.started-main-celebrity,
		.started-main-server{
			width: 100%;
			margin-top: 20px;
		}
		
		
		h3{
			display: inline-block;
			width: 100%;
			font-size: 2.4rem;	
			line-height: 40px;
			border-bottom: 1px solid #eee;
		}
		
		p,a{
			display: inline-block;
			width: 100%;
			vertical-align: middle;
			line-height: 45px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		
		a:hover{
			text-decoration: underline;
		}
	}
	
	.start-item,
	.resource-item{
		width: 100%;
		font-size: 1.6rem;
	}
	
	
	
	#started-sidebar{
		width: 290px;
		height: 500px;
		flex-shrink:0;
	}
	
	.started-sidebar-sigin{
		width: 100%;
		height: 117px;
		background-color: #fff;
		border-radius: 3px;
		
		p{
			display: inline-block;
			width: 100%;
			padding-left: 10px;
			padding-right: 10px;
		}
		
		.started-sigin-header{
			height: 45px;
			line-height: 45px;
			font-size: 1.4rem;
		}
		
		.started-sigin-center{
			line-height: 30px;
		}
		
		.started-sigin-button{
			button{
				width: 150px;
				height: 35px;
				background-color: #5BBEDC;
				color: #fff;
				font-size: 1.6rem;
				border-radius: 3px;
				
				&:hover{
					background-color: #2F96B4;
				}
			}
		}
		
	}
	
	@media screen and (max-width:980px){
		#started{
			width: 100%;
		}
		
		#started-content{
			margin-right: 0;
		}
		
		#started-sidebar{
			display: none;
		}
	}
	
	.started-topic-list{
		width: 100%;
	}
	
	.started-topic-item{
		width: 100%;
		padding-left: 10px;
		padding-right: 10px;
		border-bottom: 1px solid #EEEEEE;
		background-color: #fff;
		box-sizing: border-box;
		position: relative;
		
		&:hover{
			background-color: #F5F5F5;
		}
		
		a{
			display: inline-block;
		}
		
		.started-item-logo{
			margin: 10px 0;
			
			img{
				width: 30px;
				height: 30px;
				border-radius: 2px;
				vertical-align: middle;
			}
		}
		
		.started-item-page{
			display: inline-block;
			width: 65px;
			text-align: center;
			
			span{
				color: #B2B2B2;
			}
			
			.started-page-reply{
				color: #9E78BD;
			}
		}
		
		.started-item-type{
			width: 32px;
			height: 18px;
			line-height: 18px;
			border-radius: 2px;
			text-align: center;
			color: #999999;
			background-color: #e5e5e5;
		}
		
		.top-good{
			background-color: #80BD01;
			color: #fff;
		}
		
		.started-item-title{
			width: 60%;
			font-size: 1.6rem;
			color: #313131;
			text-overflow:ellipsis;
			white-space:nowrap;
			overflow:hidden;
			vertical-align: middle;
			
			&:hover{
				text-decoration: underline;
			}
		}
		
		.started-item-date{
			position: absolute;
			right: 10px;
			bottom: 0;
			color: #757E85;
		}
	}
	
	@media screen and (max-width:980px){
		#started-content{
			padding-right: 0;
		}
		
		.started-item-page{
			width: auto!important;
			position: absolute;
			top: 35px;
			left: 85px;
		}
		
		.started-item-title{
			font-size: 1.5rem!important;
		}
	}
</style>