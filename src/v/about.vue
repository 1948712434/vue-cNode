<template>
	<div id="about">
		<div id="about-content">
			<header class="about-head">
				<a href="http://localhost:8081/577b5dab4e3c2a8305cc0e73#/">首页</a>/ 关于
			</header>
			<div class="about-main">
				<!--关于-->
				<div class="about-main-about">
					<h4>关于</h4>
					<p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
					<p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
					<p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
					<p>
						社区目前由 
						<a href="https://cnodejs.org/user/alsotang">@alsotang </a>
						在维护，有问题请联系：
						<a href="https://github.com/alsotang">https://github.com/alsotang</a>
					</p>
					<p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs">http://weibo.com/cnodejs</a></p>
				</div>
				
				<!--移动客户端-->
				<div class="about-main-client">
					<h4>移动客户端</h4>
					<p>客户端由 <a href="https://cnodejs.org/user/soliury">@soliury</a>开发维护。</p>
					<p>源码地址： <a href="https://github.com/soliury/noder-react-native">https://github.com/soliury/noder-react-native</a>。</p>
					<p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
					<p>
						另，安卓用户同时可选择：
						<a href="https://github.com/TakWolf/CNode-Material-Design">https://github.com/TakWolf/CNode-Material-Design </a>
						，这是 Java 原生开发的安卓客户端。
					</p>
				</div>
				
				<!--友情链接-->
				<div class="about-main-link">
					<h4>友情链接</h4>
					<a href="https://www.huoban.com/">
						<img src="../assets/huoban.jpg"/>
					</a>
					
					<a href="https://cn.100offer.com/">
						<img src="../assets/100offer.jpg"/>
					</a>
					
					<a href="https://www.teambition.com/">
						<img src="../assets/teambition.gif"/>
					</a>
					
					<a href="https://www.cloudwise.com/">
						<img src="../assets/cloudwlse.jpg"/>
					</a>
					
					<a href="https://www.jiguang.cn/">
						<img src="../assets/jigaung.jpg"/>
					</a>
					
					<a href="https://segmentfault.com/">
						<img src="../assets/segmentfault.jpg"/>
					</a>
					
					<a href="http://ionichina.com/">
						<img src="../assets/ionic.jpg"/>
					</a>
				</div>
				
				<!--logo-->
				<div class="about-main-logo">
					<h4>LOGO</h4>
					<p>白底：<a href="https://cnodejs.org/public/images/cnodejs.svg">/public/images/cnodejs.svg</a></p>
					<p>黑底：<a href="https://cnodejs.org/public/images/cnodejs_light.svg"> /public/images/cnodejs_light.svg</a></p>
				</div>
			</div>
		</div>
		
		
		<div id="about-sidebar">
			<div class="about-sidebar-sigin">
				<p class="about-sigin-header">CNode：Node.js专业中文社区</p>
				<p class="about-sigin-center">您可以 <a href="#">登录</a> 或 <a href="#">注册</a>  , 也可以</p>
				<p class="about-sigin-button"><button>通过 GitHub 登录</button></p>
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
		components:{noreply,qr}
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
	
	#about{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 100;
		padding-top: 15px;
	}
	
	#about-content{
		flex:auto;
		border-radius:3px;
		overflow: hidden;
		padding-right: 15px;
	}
	
	.about-head{
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
	
	.about-main{
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
		background-color: #fff;
		font-size: 1.4rem;
		
		h4{
			display: inline-block;
			width: 100%;
			line-height: 40px;
			font-size: 2.4rem;
			border-bottom: 1px solid #eee;
			font-weight: 100;
			margin-bottom: 10px;
		}
		
		.about-main-link,
		.about-main-about,
		.about-main-client,
		.about-main-link{
			padding:20px 0;
		}
		
		p{
			display: inline-block;
			width: 100%;
			vertical-align: middle;
			line-height: 40px;
		}
		
		span{
			display: inline-block;
			width: 100%;
			height: 30px;
			line-height: 40px;
			box-sizing: border-box;
		}
		
		img{
			max-height:60px;
		}
		
		a:hover{
			text-decoration: underline;
		}
	}
	
	
	#about-sidebar{
		width: 290px;
		flex-shrink:0;
	}
	
	.about-sidebar-sigin{
		width: 100%;
		height: 117px;
		background-color: #fff;
		border-radius: 3px;
		
		p{
			display: inline-block;
			width: 100%;
			padding-left: 10px;
			padding-right: 10px;
			box-sizing: border-box;	
		}
		
		.about-sigin-header{
			height: 45px;
			line-height: 45px;
			font-size: 1.4rem;
		}
		
		.about-sigin-center{
			line-height: 30px;
		}
		
		.about-sigin-button{
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
		#about{
			width: 100%;
		}
		
		#about-content{
			margin-right: 0;
		}
		
		#about-sidebar{
			display: none;
		}
	}
	
	@media screen and (max-width:980px){
		#about-content{
			padding-right: 0;
		}
		
	}
</style>