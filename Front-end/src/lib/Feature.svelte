<script>
	export let icon;
	export let title;
	export let subtitle;
</script>

<div class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
	<div class="mb-3 text-3xl">{icon}</div>
	<h3 class="font-semibold">{title}</h3>
	<p class="text-sm text-slate-400">{subtitle}</p>
</div>
