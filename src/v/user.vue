<template>
	<div id="user">
		<div id="user-content">
			<div class="user-header">
				<a href="http://localhost:8081/#/">主页</a>
			</div>
			
			<div class="user-info">
				<p><img :src=userInfo.avatar_url>{{userInfo.loginname}}</p>
				<p>积分：{{userInfo.score}}</p>
				<p><span class="iconfont icon-zhuye"></span><a href="#"> www.gerenzhuye.com</a></p>
				<p><span class="iconfont icon-weizhi"></span>广州</p>
				<p><span class="iconfont icon-weibo"></span><a href="#">www.weibo.com</a></p>
				<p><span class="iconfont icon-chuangjianshijian"></span>注册于{{createTime}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				userInfo:{},
				ind:0,
				createTime:null,
				userName:null
			}
		},
		
		created(){
			this.getAll();
		},
		
		methods:{
			getAll:function(){
				var _url = "https://cnodejs.org/api/v1/user/" + this.$route.params.id;
				this.$http({
					url:_url,
					method:"get"
				}).then(function(data){
					this.userInfo = data.body.data;
					console.log(this.userInfo);
					this.createTime = data.body.data.create_at.split("T")[0]; //截取建贴时间
					this.getCreateTime(this.createTime); //转换建贴时间（比如两年前）
				})
			},
			
			getCreateTime:function(time){
				/*
				 * str ：年月日
				 * 实现去除str左右空格；
		 		*/
				var 
				date_ = new Date(),  
				year = date_.getFullYear(), //当前时间：年
				month = date_.getMonth(), //当前时间：月
				day = date_.getDate(), //当前时间：日
				arr = time.split("-"),  
				yearNum = "",
				monthNum = "",
				dayNum = "";
				
				if(year-arr[0] > 0){
					yearNum = year-arr[0] + "年前";
					
				}else if(year-arr[0] === 0){
					if(month - arr[1] > 0){
						monthNum = (month - arr[1]) + "个月前";
						
					}else if(month - arr[1]  === 0){
						dayNum = day - arr[2] + "天前";
						
						if(day - arr[2] === 0){
							dayNum = "刚刚";
						}
					}
				}
			
				var num = yearNum + monthNum + dayNum;
				this.createTime = num;
			}
		},
		
		filters:{
			filterTime:function(time){
				var arr = time.split("T");
				return arr[0];
			},
			
			filterTab:function(item){
				var str = "";
				if(item.top){
					return str = "置顶";
				}else if(item.good){
					return str = "精华";
				}else if(item.tab === "ask"){
					return str = "问答";
				}else{
					return str = "分享";
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
	
	@mixin color{
		color: #7CBB1E;
	}
	
	#user{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 90%;
	}
	
	#user-content{
		flex:auto;
		border-radius:3px;
		overflow: hidden;
		padding-right: 15px;
	}
	
	.user-header{
		width: 100%;
		height: auto;
		padding:10px 10px;
		background-color: #f4f4f4;
		box-sizing: border-box;
		
		a{
			display: inline-block;
			@include color;
			padding: 5px 10px;
			border-radius:3px;
			font-size:1.6rem;
			
			&:hover{
				color: #005580;
				cursor: pointer;
			}
		}
		
	}
	
	.user-info{
		width: 100%;
		background-color: #fff;
		
		p{
			display: block;
			height: 40px;
			line-height: 40px;
			font-size: 1.4rem;
			padding: 0 15px;
			box-sizing: border-box;
			color: #555;
			
			img{
				width: 30px;
				height: 30px;
				border-radius: 2px;
				vertical-align: middle;
				margin-right: 10px;
			}
			
			span{
				font-size: 2.4rem;
				margin-right: 10px;
				vertical-align: middle;
			}
			
		}
	}
	
	.user-create-topic{
		width: 100%;
	}
	
	
	
	@media screen and (max-width:980px){
		#user{
			width: 100%;
		}
		#user-content{
			margin-right: 0;
		}
		
	}
	
	.user-topic-list{
		width: 100%;
	}
	
	.user-topic-item{
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
		
		.user-item-logo{
			margin: 10px 0;
			
			img{
				width: 30px;
				height: 30px;
				border-radius: 2px;
				vertical-align: middle;
			}
		}
		
		.user-item-page{
			display: inline-block;
			width: 65px;
			text-align: center;
			
			span{
				color: #B2B2B2;
			}
			
			.user-page-reply{
				color: #9E78BD;
			}
		}
		
		.user-item-type{
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
		
		.user-item-title{
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
		
		.user-item-date{
			position: absolute;
			right: 10px;
			bottom: 0;
			color: #757E85;
		}
	}
	
	@media screen and (max-width:980px){
		.user-item-page{
			width: auto!important;
			position: absolute;
			top: 35px;
			left: 85px;
		}
		
		.user-item-title{
			font-size: 1.5rem!important;
		}
	}
</style>