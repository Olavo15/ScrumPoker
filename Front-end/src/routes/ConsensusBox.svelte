<script>
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import PokerTable from '$lib/PokerTable.svelte';
	import CardDeck from '$lib/CardDeck.svelte';

	const players = [
		{ name: 'Ana Silva', initials: 'AS', top: '5%', left: '45%' },
		{ name: 'Bruno Costa', initials: 'BC', top: '15%', left: '80%' },
		{ name: 'Eduardo Lima', initials: 'EL', top: '85%', left: '50%' }
	];
</script>

<div class="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
	<Sidebar />

	<div class="flex flex-1 flex-col">
		<Header />
		<PokerTable {players} />
		<CardDeck />
	</div>
</div>
