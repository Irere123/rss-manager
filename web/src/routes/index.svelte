<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import MainLayout from "../modules/layouts/MainLayout.svelte";
	import HeaderController from "../modules/display/HeaderController.svelte";
	import Header from "../components/Header.svelte";
	import LeftPanel from "../components/LeftPanel.svelte";
</script>

<MainLayout header={Header} leftPanel={LeftPanel}>
	<HeaderController />
</MainLayout>
