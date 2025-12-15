<!-- PokerTable.svelte -->
<script>
	export let players = [];
</script>

<div class="relative mx-auto my-8 h-[360px] w-full max-w-4xl rounded-[40px]
	bg-gradient-to-br from-green-800 via-green-700 to-green-900
	shadow-inner ring-2 ring-green-600/40">

	<div class="absolute inset-0 rounded-[40px] border border-green-500/30" />

	{#each players as p}
		<div
			class="absolute flex flex-col items-center"
			style="top:{p.top}; left:{p.left}"
		>
			<div
				class="flex h-12 w-12 items-center justify-center rounded-full
				bg-emerald-500 font-bold text-white shadow-lg"
			>
				{p.initials}
			</div>
			<span class="mt-1 text-xs text-white/80">{p.name}</span>
		</div>
	{/each}

	<div
		class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
		rounded-full bg-black/40 px-4 py-2 text-sm"
	>
		Aguardando votação • 6/8
	</div>
</div>
