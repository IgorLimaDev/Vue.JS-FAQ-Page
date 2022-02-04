



<template>
  <div id="app">

  <!-- Router view para controlar a navegação pelas rotas -->
  <router-view></router-view>


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
