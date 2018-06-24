<template>
	<div id="home">
		<div id="home-content">
			<router-view></router-view>
		</div>
		<div id="home-sidebar">
			<div class="home-sidebar-sigin">
				<p class="home-sigin-header">CNode：Node.js专业中文社区</p>
				<p class="home-sigin-center">您可以 <a href="#">登录</a> 或 <a href="#">注册</a>  , 也可以</p>
				<p class="home-sigin-button"><button>通过 GitHub 登录</button></p>
			</div>
			<noreply></noreply>
			<qr></qr>
		</div>
	</div>
</template>

<script>
	import noreply from "./not_reply.vue";
	import qr from "./qr.vue";
	import api from "./api.vue";
	
	
	export default{
		components:{noreply,qr,api}
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
	
	#home{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 100%;
		padding-top: 15px;
	}
	
	#home-content{
		flex:auto;
		border-radius:3px;
		overflow: hidden;
		padding-right: 15px;
	}
	
	
	#home-sidebar{
		width: 290px;
		flex-shrink:0;
	}
	
	.home-sidebar-sigin{
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
		
		.home-sigin-header{
			height: 45px;
			line-height: 45px;
			font-size: 1.4rem;
		}
		
		.home-sigin-center{
			line-height: 30px;
		}
		
		.home-sigin-button{
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
		#home{
			width: 100%;
		}
		
		#home-content{
			padding-right: 0;
		}
		
		#home-sidebar{
			display: none;
		}
	}
	
	@media screen and (max-width:980px){
		.home-item-page{
			width: auto!important;
			position: absolute;
			top: 35px;
			left: 85px;
		}
		
		.home-item-title{
			font-size: 1.5rem!important;
		}
	}
</style>