<template>
	<div class="home">
		<div class="home-content">
			<div class="home-header">
				<a 
					v-for="(item,index) in list" 
					:data-tab="item.tab"
					@click="onChangeTab(index)" 
					:class="{'Active':ind === index}">{{item.title}}
				</a>
			</div>
			
			<div class="home-body">
				<ul class="home-topic-list">
					<li class="home-topic-item" v-for="allItem in allList">
						<router-link :to="{name:'/user',params:{id:allItem.author.loginname}}" class="home-item-logo" href="#" :title="allItem.author.loginname">
							<img :src="allItem.author.avatar_url"/>
						</router-link>
						<span class="home-item-page">
							<span class="home-page-reply">{{allItem.reply_count}}</span>/<span>{{allItem.visit_count}}</span>
						</span>
						<a class="home-item-type" :class="{'top-good':allItem.good || allItem.top}">{{allItem | filterTab}}</a>
						<router-link :to="{name:'/detials',params:{id:allItem.id}}" class="home-item-title" :title="allItem.title">{{allItem.title}}</router-link>	
						<a class="home-item-date">{{allItem.create_at | filterTime}}</a>
					</li>
				</ul>
			</div>
			
			<!--分页器-->
			<div class="paging">
				<el-pagination
					@current-change="onPageChange"
					:current-page = "currentPage"
					:background = "true"
					:pager-count="count"
					:page-size = "40"
				    layout="prev, pager, next , total , sizes"
				    :total="total">
				</el-pagination>
			</div>
			
		</div>
	</div>
</template>

<script>
	import noreply from "./not_reply.vue";
	import qr from "./qr.vue";
	import paging from "./paging.vue";
	
	function optionTab(index){
		var _tab = "";
		
		switch(index){
			case 1 :return _tab = "good";
			
			case 2 :return _tab = "share";
			
			case 3 :return _tab = "ask";
			
			case 4 :return _tab = "job";
		} 
	}
	
	export default{
		components:{noreply,qr,paging},
		data(){
			return{
				allList:[],
				list:[
					{title:"全部",tab:"all"},
					{title:"精华",tab:"good"},
					{title:"分享",tab:"share"},
					{title:"问答",tab:"ask"},
					{title:"招聘",tab:"job"},
					{title:"客户端测试",tab:"all"}
				],
				ind:0,
				page:1,
				currentPage:1,
				tab:"all",
				total:3600,
				count:7
			}
		},
		
		created(){
			this.getAll();
		},
		
		methods:{
			getAll:function(){
				var _url = "https://cnodejs.org/api/v1/topics";
				this.$http({
					url:_url,
					method:"get",
					params:{
						page:this.currentPage,
						linit:0,
						mdrender:'false'
					}
				}).then(function(data){
					this.allList =data.body.data;
					console.log(this.allList);
				})
			},
			
			getThemeList:function(currentPage,tab){
				var _url = "https://cnodejs.org/api/v1/topics";
				
				this.$http({
					url:_url,
					method:"get",
					params:{
						page:currentPage,
						linit:0,
						tab:tab,
						mdrender:'false'
					}
				}).then(function(data){
					this.allList = data.body.data;
				})
			},
			
			onChangeTab:function(index){
				this.ind = index;
				this.tab = this.list[index].tab;
				this.currentPage = 1;
				this.getThemeList(this.currentPage,this.tab);
			},
			
			onPageChange:function(val){
				this.currentPage = val;
				this.getThemeList(this.currentPage,this.tab);
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
	
	.home{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 100%;
	}
	
	.home-content{
		flex:auto;
		border-radius:3px;
		overflow: hidden;
		padding-right: 0px;
	}
	
	.home-header{
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
			font-size:1.4rem;
			
			&:hover{
				color: #005580;
				cursor: pointer;
			}
		}
		
		.Active{
			background-color: #80BD01;
			color: #fff;
			
			&:hover{
				color: #fff;
			}
		}
	}
	
	.home-body{
		width: 100%;
	}
	
	.paging{
		width: 100%;
		padding: 10px;
		background-color: #fff;
	}
	
	@media screen and (max-width:980px){
		#home{
			width: 100%;
		}
		#home-content{
			padding-right:0;
		}
	}
	
	.home-topic-list{
		width: 100%;
	}
	
	.home-topic-item{
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
		
		.home-item-logo{
			margin: 10px 0;
			
			img{
				width: 30px;
				height: 30px;
				border-radius: 2px;
				vertical-align: middle;
			}
		}
		
		.home-item-page{
			display: inline-block;
			width: 65px;
			text-align: center;
			
			span{
				color: #B2B2B2;
			}
			
			.home-page-reply{
				color: #9E78BD;
			}
		}
		
		.home-item-type{
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
		
		.home-item-title{
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
		
		.home-item-date{
			position: absolute;
			right: 10px;
			bottom: 0;
			color: #757E85;
		}
	}
	
	/*分页*/
	.page {
      font-weight: 900;
      height: 40px;
      text-align: center;
      color: #888;
      margin: 20px auto 0;
      background: #f2f2f2;
    }

    .pagelist {
      font-size: 0;
      background: #fff;
      height: 50px;
      line-height: 50px;
    }

    .pagelist span {
      font-size: 14px;
    }

    .pagelist .jump {
      border: 1px solid #ccc;
      padding: 5px 8px;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 5px;
    }

    .pagelist .bgprimary {
      cursor: default;
      color: #fff;
      background: #337ab7;
      border-color: #337ab7;
    }

    .jumpinp input {
      width: 55px;
      height: 26px;
      font-size: 13px;
      border: 1px solid #ccc;
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      border-radius: 4px;
      text-align: center;
    }

    .ellipsis {
      padding: 0px 8px;
    }

    .jumppoint {
      margin-left: 30px;
    }

    .pagelist .gobtn {
      font-size: 12px;
    }

    .bgprimary {
      cursor: default;
      color: #fff;
      background: #337ab7;
      border-color: #337ab7;
    }
    .pagelist .jump.disabled{
      pointer-events: none;
      background: #ddd;
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