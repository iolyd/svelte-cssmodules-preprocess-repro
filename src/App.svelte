<script>
	import Button from './lib/Button.svelte';
	import ButtonWrapper from './lib/ButtonWrapper.svelte';
	import Icon from './lib/Icon.svelte';
</script>

<main>
	<Button>
		Some slotted content <Icon class="spin" />
	</Button>
	<ButtonWrapper />
</main>

<style lang="scss" module>
	main {
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgb(20, 25, 28);
		gap: 1em;
	}

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
