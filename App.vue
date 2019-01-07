<template>

	<div>
	<h2>Form inputs</h2>
		<textarea v-model="textarea"></textarea>

		<p>{{ textarea }}</p>
	</div>

</template>

<script>

import ListMixin from './ListMixin'

export default {
	data () {
			return {
				textarea: 'I am Initial state',
			}
	},
}

</script>

<style scoped>
	textarea {
		height: 100px;
		width: 400px;
	}
	p {
		white-space: pre;
	}
</style>