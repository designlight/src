<template>
	<div>

	<h2>Form inputs</h2>
	<input type="text" v-model.lazy="name">
	<p>{{ name }}</p>

	<hr>

	<select v-model="social">
		<option
		 v-for="s in socialsList"
		>{{ s }}</option>
	</select>
	<hr>


	<p>{{social}}</p>

	</div>
</template>

<script>

import ListMixin from './ListMixin'

export default {
	data () {
			return {
				name: 'Initial state',
				defaultSocial: 'vk',
				social: 'instagram',
				socialsList: ['instagram', 'vk', 'facebook']
			}
	},
}

</script>