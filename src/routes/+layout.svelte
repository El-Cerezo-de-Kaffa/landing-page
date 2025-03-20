<script lang="ts">
	let { children } = $props();
	import '@fontsource/playfair-display/400-italic.css';
	import '@fontsource/playfair-display/800-italic.css';
	import '../app.css';
</script>

{@render children()}
