<script lang="ts">
	export let header: any;
	export let leftPanel: any;
</script>

<div class="flex flex-col w-full h-full">
	<svelte:component this={header} />
	<div class="flex flex-col gap-3 w-full h-full">
		<svelte:component this={leftPanel} />
		<slot />
	</div>
</div>
