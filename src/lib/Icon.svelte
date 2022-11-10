<script>
	import { draw, fade } from 'svelte/transition';

	export let style = undefined;
	let class_ = '';
	export { class_ as class };

	const i = {
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		paths: [
			{
				d: 'M20 13 A8 8 0 0 1 12 21 A8 8 0 0 1 4 13 A8 8 0 0 1 20 13 z',
				fill: false,
				stroke: true,
			},
			{ d: 'M6 3L3 6M18 3L21 6', fill: false, stroke: true },
			{ d: 'M12 9V13L15 16', fill: false, stroke: true },
		],
	};
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	aria-roledescription="icon"
	preserveAspectRatio="xMidYMid"
	viewBox={i.viewBox}
	class="icon {class_}"
	{style}
>
	<g>
		{#each i.paths as path, i}
			{#if path.fill}
				<path
					in:fade={{ delay: i * 50, duration: 400 }}
					class="fill"
					class:secondary={path.type === 'secondary'}
					d={path.d}
				/>
			{/if}
			{#if path.stroke}
				<path
					in:draw={{ delay: i * 50, duration: 400 }}
					class="stroke"
					vector-effect="non-scaling-stroke"
					d={path.d}
				/>
			{/if}
		{/each}
	</g>
</svg>

<style lang="scss">
	:where(.icon) {
		display: inline-block;
		vertical-align: middle;
		position: relative;
		padding: 0;
		margin: 0;
		width: 1.5em;
		height: 1.5em;
		overflow: visible;
		& path {
			fill: none;
			stroke: none;
			&.fill {
				fill: currentColor;
			}
			&.stroke {
				stroke: currentColor;
				stroke-width: 1.5px;
				stroke-linejoin: round;
				stroke-linecap: round;
			}
		}
	}
</style>
