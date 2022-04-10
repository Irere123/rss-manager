<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import MainLayout from "../modules/layouts/MainLayout.svelte";
	import HeaderController from "../modules/display/HeaderController.svelte";
	import Header from "../components/Header.svelte";
	import LeftPanel from "../components/LeftPanel.svelte";
	import HomePage from "../modules/home/HomePage.svelte";
</script>

<MainLayout header={Header} leftPanel={LeftPanel}>
	<HeaderController />
	<HomePage />
</MainLayout>
