<template>
	<footer class="footer-wra">
		<div class="footer">
			<p>
				<a href="https://cnodejs.org/rss" class="a-clolr">RSS</a> | <a class="a-clolr" href="https://github.com/cnodejs/nodeclub/">源码地址</a>
			</p>
			<p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
			<p>
				服务器赞助商为<a href="https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
					<img src="../assets/ucloufd.jpg"/>，
				</a>
				存储赞助商为<a href="https://www.qiniu.com/?ref=cnode">
					<img src="../assets/qiniu.jpg"/>，
				</a>
				由<a href="https://www.aliyun.com/product/nodejs?ref=cnode">
					<img src="../assets/alinode.jpg"/>提供应用性能服务。
				</a>
			</p>
			
			<p>新手搭建 Node.js 服务器，推荐使用无需备案的<a class="a-link" href="https://www.digitalocean.com/">DigitalOcean(https://www.digitalocean.com/)</a></p>
		</div>
	</footer>
</template>

<script>
</script>

<style lang="scss">
	.footer-wra{
		width: 100%;	
		background-color: #fff;
	}
	
	.footer{
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		color: #999;
		padding: 15px;
		font-size:1.4rem;
		
		a{
			color: #999;
		}
		
		.a-link{
			color: #110CED;
		}
		
		.a-clolr{
			color: #555555;
		}
		
		p{
			line-height: 40px;
		}
		
		img{
			max-width: 100%;
			max-height: 40px;
			vertical-align: middle;
		}
	}
	
</style>