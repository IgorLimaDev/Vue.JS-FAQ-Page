<template>
  <div id="Inicio" class="app-wrapper">
	  	<h1 class="titulo-central">Central de Atendimento</h1>
		<h3 class="subtitulo-central">Olá, sua compra foi feita em:</h3>
		
		<div class="navegacao-wrapper">
			<router-link :to="'busca_atendimento'" class="btn-navegacao-central">
				<img src="../assets/img/online-icon.png"/>
				Loja Online
			</router-link>
			<a href="https://www.neoassist.com/" target="_blank" class="btn-navegacao-central">
				<img src="../assets/img/icon-fisica.png"/>
				Loja Física
			</a>
		</div>

  </div>
</template>

<script>
export default {
  name: 'Inicio'
}
</script>

