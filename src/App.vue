<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

window.param = function(url){
	var p = {};
	url = url.substring(1,url.length);
	url = url.split("&");
	for(var i in url){
		var it = url[i];
		it = it.split("=");
		p[it[0]]= decodeURI(url[i].substring(it[0].length+1,url[i].length));
	}
	return p;
}(location.search);

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  height: 100%;
}

body,html {
  height: 100%;
  margin: 0;
}
</style>
