<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="flex items-center justify-between border-b border-white/10 px-6 py-4">
  <h1 class="text-lg font-semibold">Sala</h1>

  <div class="flex gap-2">
    <button
      on:click={() => dispatch('reveal')}
      class="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold"
    >
      Revelar
    </button>

    <button
      on:click={() => dispatch('new')}
      class="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold"
    >
      Nova Rodada
    </button>
  </div>
</div>
