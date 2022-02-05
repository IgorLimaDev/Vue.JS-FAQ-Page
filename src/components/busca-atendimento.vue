<template>
  <div id="busca_atendimento">

	  <div class="app-wrapper">
	  	<h1 class="titulo-central">Central de Atendimento</h1>
		<h3 class="subtitulo-central">Como podemos te ajudar?</h3>

		<div class="navegacao-wrapper">
			<router-link :to="'busca_atendimento'" class="btn-navegacao-atendimento">
				<img src="../assets/img/cadastro-icon.png"/>
				Cadastro
			</router-link>
			<a href="https://www.neoassist.com/" target="_blank" class="btn-navegacao-atendimento">
				<img src="../assets/img/entrega-icon.png"/>
				Entrega
			</a>
			<a href="https://www.neoassist.com/" target="_blank" class="btn-navegacao-atendimento">
				<img src="../assets/img/troca-icon.png"/>
				Trocas
			</a>
			<a href="https://www.neoassist.com/" target="_blank" class="btn-navegacao-atendimento">
				<img src="../assets/img/pedido-icon.png"/>
				Pedidos
			</a>
			<a href="https://www.neoassist.com/" target="_blank" class="btn-navegacao-atendimento">
				<img src="../assets/img/produto-icon.png"/>
				Produtos
			</a>
		</div>
	  </div>
	


  </div>
</template>

<script>
export default {
  name: 'busca_atendimento'
}
</script>


<style>
#busca_atendimento {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>