<script>
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
</script>

<Button>
	Some wrapped and slotted content <Icon class="spin" />
	<!-- Why is the icon here not animated? -->
</Button>

<style lang="scss" module>
	.spin {
		animation: spin 3s infinite cubic-bezier(0.8, 0, 0.2, 1);
		transform-origin: center;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(90deg);
		}
		50% {
			transform: rotate(180deg);
		}
		75% {
			transform: rotate(270deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
