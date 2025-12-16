<script>
	import Feature from '$lib/Feature.svelte';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let criarNome = '';
	let entrarNome = '';
	let codigoSala = '';
	let senha = '';

	let privada = false;
	let senhaSala = '';

	$: if (!privada) {
		senhaSala = '';
	}

	function criarSala() {
		const payload = {
			nome: criarNome,
			privada,
			...(privada && { senha: senhaSala })
		};

		console.log('Payload (futuro back):', payload);

		const codigo = Math.random()
			.toString(36)
			.substring(2, 8)
			.toUpperCase();

		goto(`/sala/${codigo}`);
	}

	function entrarSala() {
		if (!codigoSala) return;
		goto(`/sala/${codigoSala.toUpperCase()}`);
	}
</script>


<div
	class="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 text-white"
>
	<header class="mt-16 mb-12 text-center">
		<div
			class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 shadow-lg"
		>
			♠
		</div>
		<h1 class="text-4xl font-bold">Scrum Poker</h1>
	</header>

	<div class="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
		<div class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
			<h2 class="mb-1 text-xl font-semibold">Criar Sala</h2>
			<p class="mb-4 text-sm text-slate-400">Inicie uma nova sessão</p>

			<input
				class="mb-3 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
				placeholder="Seu nome"
				bind:value={criarNome}
			/>

			<label class="mb-2 flex items-center gap-2 text-sm text-slate-300">
				<input type="checkbox" bind:checked={privada} class="accent-green-500" />
				Sala privada (com senha)
			</label>

			{#if privada}
				<div transition:slide>
					<input
						type="password"
						bind:value={senhaSala}
						placeholder="Digite a senha da sala"
						class="mb-4 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
			{/if}

			<button
				on:click={criarSala}
				class="w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 font-semibold shadow-lg transition hover:brightness-110"
			>
				🚀 Criar Sala
			</button>
		</div>

		<div class="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
			<h2 class="mb-1 text-xl font-semibold">Entrar em Sala</h2>
			<p class="mb-4 text-sm text-slate-400">Junte-se a uma sessão</p>

			<input
				class="mb-3 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Seu nome"
				bind:value={entrarNome}
			/>

			<input
				class="mb-3 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Código da sala"
				bind:value={codigoSala}
			/>

			<input
				type="password"
				bind:value={senha}
				class="mb-4 w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
				placeholder="Senha (se necessário)"
			/>

			<button
				class="w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 py-3 font-semibold shadow-lg transition hover:brightness-110"
			>
				🔑 Entrar na Sala
			</button>
		</div>
	</div>

	<div class="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
		<Feature icon="👥" title="Jogadores Ilimitados" subtitle="Escala para times grandes" />
		<Feature icon="⚡" title="Tempo Real" subtitle="Colaboração instantânea" />
		<Feature icon="📱" title="Responsivo" subtitle="Desktop e mobile" />
	</div>
</div>
