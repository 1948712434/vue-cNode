<template>
	<div class="noreply">
		<header class="noreply-header">无人回复的话题</header>
		<div class="noreply-list">
			<router-link 
				:to="{name:'/detials',params:{id:item.id}}" 
				class="noreply-item" 
				:title="item.title" 
				v-for="(item , index) in reply" 
				:key="index">{{item.title}}
			</router-link>
		</div>
	</div>
</template>

<script>
	var reply = [];
	export default{
		data(){
			return{
				list:[],
				reply:[],
				page:1
			}
		},
		
		created(){
			this.getPage();
		},
		
		methods:{
			getPage:function(){
				var _url = "https://cnodejs.org/api/v1/topics";
				
				this.$http({
					url:_url,
					method:"get",
					params:{
						page:this.page
					}
				}).then(function(data){
					this.list = data.body.data;
					this.getReply();
				})
				
			},
			
			getReply:function(){
				var listLen = this.list.length;
				
				for(var i=0 ; i<listLen ; i++){
					
					if(this.list[i]['reply_count'] === 0 && reply.length < 5){
							reply.push(this.list[i]);
							this.page++;
							this.getPage();
					}else{
						this.reply = reply;
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.noreply{
		width: 100%;
		background-color: red;
		border-radius:3px;
		overflow: hidden;
		margin-top: 15px;
		
		.noreply-header{
			width: 100%;
			height: 40px;
			line-height:40px;
			padding-left:10px;
			padding-right:10px;
			background-color:#F5F5F5;
			box-sizing: border-box;
		}
	}
	
	.noreply-list{
		width: 100%;
		
		.noreply-item{
			display: block;
			width: 100%;
			padding-right: 10px;
			padding-left: 10px;
			height: 45px;
			line-height:45px;
			background-color: #fff;
			border-bottom:1px solid #eee;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			box-sizing: border-box;
			color: #778087;
			
			
			&:last-child{
				border-bottom:none;
			}
		}
	}
</style>