export default {
		data () {
			return {
				searchName: '',
				names: ['Vlad', 'Max', 'Elena', 'Igor']
			}
	},
	computed: {
		filterednames() {
			return this.names.filter(name => {
				return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
			})
		}
	}
}