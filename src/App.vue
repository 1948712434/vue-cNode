<template>
  <div id="app">
    <vhead></vhead>
    <div id="main">
    	<router-view v-bind:class="{mainWra:isMainWra}"></router-view>
    </div>
    <vfooter class="vfooter"></vfooter>
  </div>
</template>

<script>
	
	import vhead from "./v/head.vue";
	import vfooter from "./v/footer.vue";
	
export default {
  name: 'app',
  components:{vhead,vfooter},
  data(){
    return {
      isMainWra:true
    }
  }
}
</script>

<style lang="scss">
html{
	font-size: 62.5%;
}

#main{
	width: 100%;
	margin-bottom: 20px;
	
	.mainWra{
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}
}

@media screen and (max-width:980px){
	#main .mainWra{
		width: 100%;
	}
	
	.footer-wra{
		display: none;
	}
}
</style>
