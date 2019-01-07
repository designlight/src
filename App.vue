<template>

	<div>
	<h2>Form inputs</h2>
	<input type="text" v-model.lazy="name">

	<p>{{ name }}</p>
	</div>

</template>

<script>

import ListMixin from './ListMixin'

export default {
	data () {
			return {
				name: 'Initial state',
			}
	},
}

</script>