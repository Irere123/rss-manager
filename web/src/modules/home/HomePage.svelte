<script lang="ts">
	let feed: any = [];
	let loading: boolean = true;
	(async () => {
		await fetch("http://localhost:8000/cnn", { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				feed = data;
				loading = false;
				console.log(data);
			});
	})();
</script>

<div>
	<h1>Home</h1>
	{#if loading}
		<p>loading....</p>
	{:else}
		{#each feed.result.items as f}
			<div>
				<p>{f.author}</p>
				<a href={`${f.link}`}><h2>{f.title}</h2></a>
				{@html f.content}
			</div>
		{/each}
	{/if}
</div>
