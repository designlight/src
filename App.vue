<template>
	<div>
		
		<h2>Form inputs</h2>

		<app-onoff v-model="switched"></app-onoff>

		<div>
			<h3 v-if="switched">Component is enabled</h3>
			<h3 v-else>Component is disabled</h3>
		</div>

	</div>
</template>

<script>
	
import onoff from './Onoff.vue'

export default {
		data () {
		return {
	switched: false
		}
	},
	components: {
		appOnoff: onoff
	}
}
</script>