



<template>
  <div id="app">
  <!-- the router outlet, where all matched components would ber viewed -->
  oi
  <router-view></router-view>

<a href="#" v-bind:click="navigateInicio">Inicio</a>

  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
	  navigateInicio: function() {
		  console.log("disparou");
		  router.push({ path: 'busca_atendimento' })
	  }
  } 
	
}

</script>

<style>

html, body {
	margin:0;
	padding:0;
}
</style>
