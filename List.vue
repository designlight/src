<template>
	<div>
<h1>List</h1>

<input type="text" v-model="searchName">
	
		<ul>
			<li v-for="name of filterednames">{{ name }}</li>
		</ul>

	</div>
</template>

<script>

	import ListMixin from './ListMixin'

	export default {
		mixins: [ListMixin]
	}

</script>