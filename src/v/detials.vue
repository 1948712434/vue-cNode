<template>
	<div id="detials">
		<div id="detials-content">
			<header class="detials-header">
				<h1 class="detials-header-title" >
					<span class="top" v-if="data.top">置顶</span>
					<span class="top" v-else-if="data.good">精华</span>
					<span v-else-if="data.tab === 'share'">分享</span>
					<span v-else="data.top === 'ask'">问答</span>
					{{data.title}}
				</h1>
				
				<div class="detials-header-changes">
					<span>发布于 {{createTime | transformTime}}</span>
					<span>作者 <a href="#">{{author.loginname}} </a>
					</span>
					<span>{{data.visit_count}}次浏览</span>
					<span v-if="data.tab === 'share'">来自 分享</span>
					<span v-else="data.top === 'ask'">来自 问答</span>
				</div>
			</header>
			
			<div class="detials-body" v-html="data.content"></div>
			
			<div class="detials-panel">
				<header class="detials-panel-header">{{data.reply_count}} 个回复</header>
				<div class="detials-panel-item"  v-for="(item,index) in data.replies">
					<div class="detials-item-top">
						<a><img :src="item.author.avatar_url"/></a>
						<a :id="item.id" class="detials-item-loginName">
							{{item.author.loginname}}
						</a>
						<a :href="'#'+ item.id"> {{index+1}} 楼 •{{item.create_at.split('T')[0] | transformTime}}</a>
						<span class="detials-item-author" v-if="item.author.loginname === data.author.loginname">作者</span>
						<span class="detials-item-good iconfont icon-dianzan"> {{item.ups.length}}</span>
					</div>
					<p v-html="item.content"></p>
				</div>
			</div>
		</div>
		
		<div id="detials-sidebar">
			<div class="detials-sidebar-sigin">
				<p class="detials-sigin-header">CNode：Node.js专业中文社区</p>
				<p class="detials-sigin-center">您可以 <a href="#">登录</a> 或 <a href="#">注册</a> , 也可以</p>
				<p class="detials-sigin-button"><button>通过 GitHub 登录</button></p>
			</div>
			<qr></qr>
		</div>
	</div>
</template>

<script>
	//引入模块
	import qr from "./qr.vue";
	
	export default{
		
		components:{qr},
		
		data(){
			return{
				data:{},
				author:{},
				createTime:""
			}
		},
		
		created(){
			this.getContent();
		},
		
		methods:{
			//获取页面内容
			getContent:function(){
				//获取页面id
				var id = this.$route.params.id;
				
				this.$http({
					url : "https://cnodejs.org/api/v1/topic/" + id,
					method:"get"
				}).then(function(data){
					var data = data.body.data;
					this.data = data;
					this.author = data.author;
					this.createTime = data.create_at.split("T")[0]; //截取创建时间
					this.replyTime = data.replies.create_at;//回帖的时间
					console.log(this.createTime);
					console.log(this.data);
					console.log(this.author);
				})
				
			}
		},
		
		filters:{
			//转换时间
			transformTime:function(str){
				var 
				date_ = new Date(),
				
				//currentTime中每一项为num
				currentTime = [
					date_.getFullYear(), //当前时间：年
					date_.getMonth() + 1, //当前时间：月
					date_.getDate() //当前时间：日
				],
				
				pastTime = str.split("-"), //pastTime每一项为字符串
				len = pastTime.length;
				
				if(currentTime[0] > Math.abs(pastTime[0])){
					var num = currentTime[0] - Math.abs(pastTime[0]) + " 年前";
					return num;
				}else if(currentTime[1] > Math.abs(pastTime[1])){
					var num = currentTime[1] - Math.abs(pastTime[1]) + "个月前";
					return num;
				}else{
					var num = currentTime[2] - Math.abs(pastTime[2]) + "天前";
					return num;
				}
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
	
	
	#detials{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 90%;
		padding-top: 15px;
	}
	
	#detials-content{
		width:100%;
		margin-right: 15px;
		border-radius:3px;
		overflow: hidden;
	}
	
	.detials-header{
		width:100%;
		background-color: #fff;
		border-bottom:1px solid #eee;
		padding: 10px;
		box-sizing: border-box;
		
		.detials-header-title,
		.detials-header-info{
			display: block;
			width: 100%;
			word-wrap:break-word;
		}
		
		.detials-header-title{
			font-size: 2.2rem;
			word-break:break-all;
			
			span{
				display: inline-block;
				width: 32px;
				height: 18px;
				line-height: 18px;
				border-radius: 2px;
				text-align: center;
				color: #999999;
				background-color: #e5e5e5;
				font-size: 1.4rem;
				font-weight: 100;
				margin-right: 10px;
			}
			
			.top{
				background-color:#80BD01;
				color: #fff;
			}
		}
		
		.detials-header-changes{
			color:#828282;
			
			span:before{
				content: "•";
				margin-right: 5px;
			}
			
		}
		
		.top-good{
			background-color: #80BD01;
			color: #fff;
		}
	}
	
	.detials-body{
		background-color: #fff;
		overflow: hidden;
		padding: 15px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		overflow: hidden;
		
		h3,h2{
			font-size: 2.2rem;
			font-weight: 100;
			line-height: 40px;
			margin: 20px 0;
			border-bottom: 1px solid #eee;
		}
		
		h4{
			font-size:2.0rem;
			font-weight: bold;
			color: #333;
			margin: 20px 0;
			border-bottom: 1px solid #eee;
		}
		
		p{
			line-height: 30px;
			font-size: 1.6rem;
			color: #333;
		}
		
		.markdown-text{
			
			img{
				max-width: 100%;
			}
		}
	}
	
	.detials-panel{
		width: 100%;
		margin-top: 20px;
		border-radius: 5px;
		overflow: hidden;
		font-size: 1.4rem;
		
		.detials-panel-header{
			width: 100%;
			height: 50px;
			line-height: 30px;
			padding: 10px;
			box-sizing: border-box;
			background-color: #F6F6F6;
		}
	}
	
	.detials-panel-item{
		width: 100%;
		border-bottom: 1px solid #EEE;
		background-color: #fff;
		
		.detials-item-top{
			padding: 10px;
			width: 100%;
			box-sizing:border-box;
			position:relative;
			
			a{
				display: inline-block;
				color: rgba(17, 12, 236,0.5);
				
				img{
					width: 30px;
					height: 30px;
					vertical-align:middle;
				}
			}
			
			.detials-item-loginName{
				color: #7EBC13;
			}
			
			.detials-item-author{
				background-color: #6BA44E;
				padding:0 2px;
				color: #fff;
			}
			
			.detials-item-good{
				position: absolute;
				right: 10px;
				top: 15px;
				font-size: 1.4rem;
				color: #999;
				
				&:hover{
					cursor: pointer;
				}
			}
		}
		
		p{
			padding:5px 30px;
			box-sizing: border-box;
			
			img{
				max-width: 100%;
			}
		}
	}
	
	
	#detials-sidebar{
		width: 290px;
		flex-shrink:0;
	}
	
	.detials-sidebar-sigin{
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
		
		.detials-sigin-header{
			height: 45px;
			line-height: 45px;
			font-size: 1.4rem;
		}
		
		.detials-sigin-center{
			line-height: 30px;
		}
		
		.detials-sigin-button{
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
		#detials{
			width: 100%;
		}
		#detials-content{
			margin-right: 0;
		}
		
		#detials-sidebar{
			display: none;
		}
		
		
	}
	
	
</style>