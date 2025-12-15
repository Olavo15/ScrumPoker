<!-- CardDeck.svelte -->
<script>
	const cards = ['0','½','1','2','3','5','8','13','20','21','40','100','?','☕'];
	let selected = null;
</script>

<div class="mx-auto max-w-4xl rounded-2xl bg-white/5 p-6">
	<h3 class="mb-4 text-sm font-semibold">Escolha sua carta</h3>

	<div class="grid grid-cols-7 gap-4">
		{#each cards as card}
			<button
				on:click={() => selected = card}
				class="h-28 rounded-xl bg-white text-xl font-bold text-slate-900
				shadow-md transition hover:-translate-y-1
				{selected === card ? 'ring-4 ring-green-500' : ''}"
			>
				{card}
			</button>
		{/each}
	</div>
</div>
