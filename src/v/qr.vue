<template>
	<div class="qr">
		<header class="qr-header">客户端二维码</header>
		<div class="qr-img">
			<img src="../assets/qr.png">
		</div>
		<a href="https://github.com/soliury/noder-react-native" class="client-address">客户端源码地址</a>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.qr{
		width: 100%;
		background-color: #fff;
		border-radius:3px;
		overflow: hidden;
		margin-top: 15px;
		text-align: center;
		padding-bottom: 10px;
		
		.qr-header{
			width: 100%;
			height: 40px;
			line-height:40px;
			padding-left:10px;
			padding-right:10px;
			background-color:#F5F5F5;
			box-sizing: border-box;
			text-align: left;
		}
		
		.qr-img{
			width: 100%;
			margin:5px 0;
			
			img{
				max-width: 190px;
				max-height: 190px;
			}
		}
		
		.client-address{
			color: #999;
			
			&:hover{
				text-decoration: underline;
			}
		}
	}
	
</style>