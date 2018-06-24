<template>
	<div id="api">
		<div id="api-content">
			<header class="api-head">
				<a href="http://localhost:8081/577b5dab4e3c2a8305cc0e73#/">首页</a>/ API
			</header>
			<div class="api-main">
				<p>以下 api 路径均以<a href="https://cnodejs.org/api/v1"> https://cnodejs.org/api/v1</a>为前缀</p>
				
				<!--主题-->
				<div class="api-theme">
					<h3>主题</h3>
					
					<!--主题首页-->
					<div class="api-theme-home">
						<h4>get / topics 主题首页</h4>
						<p>接收 get 参数</p>
						<span><pre>page Number</pre> 页数</span>
						<span><pre>tab String</pre> 主题分类。目前有  <pre>ask share job good</pre></span>
						<span><pre>limit Number</pre> 每一页的主题数量</span>
						<span><pre>mdrender String</pre> 当为 <pre>false</pre> 时，不渲染。默认为 <pre>true</pre>，渲染出现的所有 markdown 格式文本</span>
						<p>示例 :<a href="https://cnodejs.org/api/v1/topics">/api/v1/topics</a></p>
					</div>
					
					<!--主题详情-->
					<div class="api-theme-details">
						<h4>get /topic/:id 主题详情</h4>
						<p>接收 get 参数</p>
						<span><pre>mdrender String</pre> 当为 <pre>false</pre> 时，不渲染。默认为 <pre>true</pre>，渲染出现的所有 markdown 格式文本</span>
						<span>
							<pre>accesstoken String</pre> 
							当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的
							<pre>is_collect</pre>以及  <pre>replies</pre> 列表中的 <pre>is_uped</pre> 值。
						</span>
						<p>示例:<a href="https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
					</div>
					
					<!--新建主题-->
					<div class="api-theme-create">
						<h4>post /topics 新建主题</h4>
						<p>接收 get 参数</p>
						<span><pre>accesstoken String</pre> 用户的 accessToken</span>
						<span><pre>title String</pre> 标题</span>
						<span>
							<pre>tab String</pre> 
							目前有
							<pre>ask share job dev</pre>。开发新客户端的同学，请务必将你们的测试帖发在  <pre>dev</pre>  专区，以免污染日常的版面，否则会进行封号一周处理。</pre> 值。
						</span>
						<span><pre>content String</pre> 主体内容</span>
						<p>返回值示例</p>
						<p><pre>{ success : true , topic_id : ' 5433d5e4e737cbe96dcef312 ' }</pre></p>
					</div>
					
					<!--编辑主题-->
					<div class="api-theme-edit">
						<h4>post /topics 编辑主题</h4>
						<p>接收 get 参数</p>
						<span><pre>accesstoken String</pre> 用户的 accessToken</span>
						<span><pre>topic_id String</pre> 标题id</span>
						<span><pre>title String</pre> 标题</span>
						<span><pre>tab String</pre> 目前有 <pre>ask share job</pre> </span>
						<span><pre>content String</pre> 主体内容</span>
						<p>返回值示例</p>
						<p><pre>{ success : true , topic_id : ' 5433d5e4e737cbe96dcef312 ' }</pre></p>
					</div>
					
				</div>
				
				<!--收藏主题-->
				<div class="api-theme-cellect">
					<h3>收藏主题</h3>
					
					<!--主题收藏-->
					<div class="api-cellect">
						<h4>post /topic_collect/collect 收藏主题</h4>
						<p>接收 post 参数</p>
						<span><pre>accesstoken String</pre> 用户的 accessToken</span>
						<span><pre>topic_id String</pre> 标题id</span>
						<p>返回值示例</p>
						<p><pre>{ " success " : true }</pre></p>
					</div>
					
					<!--取消主题-->
					<div class="api-theme-remove">
						<h4>post /topic_collect/collect 收藏主题</h4>
						<p>接收 post 参数</p>
						<span><pre>accesstoken String</pre> 用户的 accessToken</span>
						<span><pre>topic_id String</pre> 标题id</span>
						<p>返回值示例</p>
						<p><pre>{ " success " : true }</pre></p>
					</div>
					
					<!--用户所收藏的主题-->
					<div class="api-theme-userEdit">
						<h4>post /topic_collect/collect 收藏主题</h4>
						<p>示例：<a href="https://cnodejs.org/api/v1/topic_collect/alsotang">/api/v1/topic_collect/alsotang</a></p>
					</div>
				</div>
				
				<!--用户-->
				<div class="api-main-user">
					<h3>用户详情</h3>
					<!--用户详情-->
					<div class="api-user-details">
						<h4>get /user/:loginname 用户详情</h4>
						<p>示例：<a href="https://cnodejs.org/api/v1/user/alsotang">/api/v1/user/alsotang</a></p>
					</div>
					
					<!-- 验证 accessToken 的正确性-->
					<div class="api-user-proving">
						<p>接收 post 参数</p>
						<span><pre>accesstoken String</pre> 用户的 accessToken</span>
						<p>如果成功匹配上用户，返回成功信息。否则 403。</p>
						<p>返回值示例</p>
						<p><pre>{ success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url }</pre></p>
					</div>
				</div>
				
				<!--消息通知-->
				<div class="api-main-message">
					<h3>消息通知</h3>
					<!--获取未读消息数-->
					<div class="api-message-read">
						<h4>get /message/count 获取未读消息数</h4>
						<p>接收 get 参数</p>
						<span><pre>accesstoken String</pre></span>
						<p>返回值示例</p>
						<p><pre>{ data : 3 }</pre></p>
					</div>
					
					<!--获取已读和未读消息-->
					<div class="api-message-unread">
						<h4>get /messages 获取已读和未读消息</h4>
						<p>接收 post 参数</p>
						<span><pre>accesstoken String</pre></span>
						<span>
							<pre>accesstoken String</pre> 
							当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的
							<pre>is_collect </pre>以及  <pre>replies</pre> 列表中的 <pre> is_uped</pre> 值。
						</span>
						<p>返回值示例</p>
						<p>
							<pre>
	{
	  data: {
	    has_read_messages: [],
	    hasnot_read_messages: [
	      {
	        id: "543fb7abae523bbc80412b26",
	        type: "at",
	        has_read: false,
	        author: {
	          loginname: "alsotang",
	          avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
	        },
	        topic: {
	          id: "542d6ecb9ecb3db94b2b3d0f",
	          title: "adfadfadfasdf",
	          last_reply_at: "2014-10-18T07:47:22.563Z"
	        },
	        reply: {
	          id: "543fb7abae523bbc80412b24",
	          content: "[@alsotang](/user/alsotang) 哈哈",
	          ups: [ ],
	          create_at: "2014-10-16T12:18:51.566Z"
	          }
	        },
	    ...
	    ]
	  }
	}
							</pre>
						</p>
					</div>
					
					<div class="api-message-allRead">
						<h4>post /message/mark_all 标记全部已读</h4>
						<p>接收 get 参数</p>
						<span><pre>accesstoken String</pre></span>
						<p>返回值示例</p>
						<p><pre>{ success: true,marked_msgs: [ { id: '544ce385aeaeb5931556c6f9' } ] }</pre></p>
					</div>
					
					<div class="api-message-oneRead">
						<h4>post /message/mark_one/:msg_id 标记单个消息为已读</h4>
						<p>请求示例：<a href="https://cnodejs.org/message/mark_one/58ec7d39da8344a81eee0c14">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
						<p>接收 post 参数</p>
						<span><pre>accesstoken String</pre></span>
						<p>返回值示例</p>
						<p><pre>
{
  success: true,
  marked_msg_id: "58ec7d39da8344a81eee0c14"
}</pre></p>
					</div>
				</div>
				
				<!--知识点-->
				<div class="api-main-knowledge">
					<h3>知识点</h3>
					<p>1. 如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。</p>
				</div>
			</div>
		</div>
		
		
		<div id="api-sidebar">
			<div class="api-sidebar-sigin">
				<p class="api-sigin-header">CNode：Node.js专业中文社区</p>
				<p class="api-sigin-center">您可以 <a href="#">登录</a> 或 <a href="#">注册</a>  , 也可以</p>
				<p class="api-sigin-button"><button>通过 GitHub 登录</button></p>
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
	
	#api{
		@include flex;
		@include justify-content;
		@include flex-direction;
		
		width: 100;
		padding-top: 15px;
	}
	
	#api-content{
		flex:auto;
		border-radius:3px;
		overflow: hidden;
		padding-right: 15px;
	}
	
	.api-head{
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
	
	.api-main{
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
		background-color: #fff;
		font-size: 1.4rem;
		
		.api-main-start,
		.api-main-resource,
		.api-main-celebrity,
		.api-main-server{
			width: 100%;
			margin-top: 20px;
		}
		
		
		h3,h4{
			display: inline-block;
			width: 100%;
			line-height: 40px;
			border-bottom: 1px solid #eee;
			font-weight: 100;
			
		}
		
		h3{
			font-size: 2.4rem;	
			margin: 20px 0;
		}
		
		h4{
			font-size: 2.0rem;	
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
			padding-left: 50px;
			box-sizing: border-box;
		}
		
		pre{
			display: inline-block;
			max-width: 100%;
			line-height:15px;
			padding: 3px;
			background-color: #eee;
			text-align: left;
			overflow: auto;
			vertical-align: middle;
		}
		
		a:hover{
			text-decoration: underline;
		}
	}
	
	.api-theme-home,
	.api-theme-details,
	.api-theme-create,
	.api-theme-edit,
	.api-theme-remove,
	.api-theme-userEdit,
	.api-user-details,
	.api-user-proving,
	.api-message-read,
	.api-message-unread,
	.api-message-allRead,
	.api-message-oneRead,
	.api-cellect{
		padding-bottom: 20px;
	}
	
	#api-sidebar{
		width: 290px;
		flex-shrink:0;
	}
	
	.api-sidebar-sigin{
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
		
		.api-sigin-header{
			height: 45px;
			line-height: 45px;
			font-size: 1.4rem;
		}
		
		.api-sigin-center{
			line-height: 30px;
		}
		
		.api-sigin-button{
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
		#api{
			width: 100%;
		}
		
		#api-content{
			margin-right: 0;
		}
		
		#api-sidebar{
			display: none;
		}
	}
	
	@media screen and (max-width:980px){
		#api-content{
			padding-right: 0;
		}
		
	}
</style>