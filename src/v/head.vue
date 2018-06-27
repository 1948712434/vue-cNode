<template>
	<header id="navbar">
		<div class="navbar-wrapper">
			<div class="navbar-left">
				<img class="navbar-left-logo" src="https://cnodejs.org/public/images/cnodejs_light.svg"/>
				<input class="navbar-left-search" type="text" />
			</div>
			<div class="navbar-right">
				<nav class="navbar-right-list">
					<router-link to="/">首页</router-link>
					<router-link to="/started">新手入门</router-link>
					<router-link to="/api">API</router-link>
					<router-link to="/about">关于</router-link>
					<a href="#">注册</a>
					<a href="#">登录</a>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	@mixin disFlex($justifyContent,$directions){
		display: -webkit-flex;
		display: flex;
		-webkit-justify-content: $justifyContent;
		justify-content: $justifyContent;
		flex-direction:$directions;
		-webkit-flex-wrap:wrap;
		flex-wrap:wrap;
	}
	
	@mixin align-items{
		align-items: center;
		-webkit-align-items: center;
	}
	
	#navbar{
		width: 100%;
		background-color: #424242;
		
	}
	
	.navbar-wrapper{
		@include disFlex(space-between,row);
		width:90%;
		margin-left: auto;
		margin-right: auto;
		padding: 6px 0;
	}
	
	/*navbar-left*/
	.navbar-left{
		margin: auto 0;
		font-size: 0;
		
		.navbar-left-logo{
			width: 120px;
			height: 30px;
		}
		
		.navbar-left-search{
			width: 235px;
			height: 26px;
			font-size: 1.4rem;
			margin-left: 20px;
			margin-top: 2px;
			padding-left: 25px;
			padding-right: 10px;
			border-radius: 27px;
			background-image: url("https://o4j806krb.qnssl.com/public/images/search.e53b380a.hashed.png");
			background-repeat: no-repeat;
			background-position: 5px 4px;
			background-color: #868686;
			box-sizing: border-box;
			vertical-align:top;
		}
	}
	
	/*navbar-right*/
	.navbar-right{
		/*width: 355px;*/
		
		.navbar-right-list{
			@include disFlex(space-between,row);
			@include align-items;
			
			a{
				padding: 10px 15px;
				color: #cacaca;
				
				&:hover{
					text-decoration: none;
					color: #f2f2f2;
				}
			}
		}
	}
	
	@media screen and (max-width:440px){
		.navbar-left{
			text-align: center;
			
			.navbar-left-logo{
				margin:  5px 0;
			}
			
			.navbar-left-search{
				width:100%;
				margin-left: 0;
			}
		}
		
		.navbar-right{
			height: auto;
			margin-top: 10px;
			width: 100%;
		}
	}	
</style>
