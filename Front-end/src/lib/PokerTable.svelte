<script>
  import { fly } from 'svelte/transition';

  export let players = [];
  export let revealed = false;

  const RAIO_EXTERNO = 37.5;
  const CENTRO = 50;

  function posicionar(jogadores) {
    return jogadores.map((player, index) => {
      const angle = (2 * Math.PI * index) / jogadores.length - Math.PI / 2;

      return {
        ...player,
        top: `${CENTRO + RAIO_EXTERNO * Math.sin(angle)}%`,
        left: `${CENTRO + RAIO_EXTERNO * Math.cos(angle)}%`
      };
    });
  }

  $: playersPosicionados = posicionar(players);
  $: votosFeitos = players.filter(p => p.card).length;
</script>

<div
  class="relative mx-auto my-10 h-[440px] w-full max-w-5xl rounded-[48px]
  bg-gradient-to-br from-green-800 via-green-700 to-green-900 shadow-2xl"
>
  <!-- BORDA -->
  <div class="absolute inset-3 rounded-[44px] border-[6px] border-yellow-500/80"></div>
  <div class="absolute inset-6 rounded-[40px] bg-green-700"></div>

  <!-- JOGADORES -->
  {#each playersPosicionados as p (p.name)}
    <div
      class="absolute flex flex-col items-center"
      style="top:{p.top}; left:{p.left}; transform: translate(-50%, -50%)"
    >
      <!-- AVATAR -->
      <div
        class="flex h-10 w-10 items-center justify-center rounded-full
        font-bold text-white shadow-lg
        {p.card ? 'bg-blue-500 ring-4 ring-blue-300' : 'bg-emerald-500'}"
      >
        {p.initials}
      </div>

      <!-- CARTA VOANDO -->
      {#if p.card && !revealed}
        <div
          in:fly={{ x: 0, y: 120, duration: 600 }}
          class="mt-1 flex h-14 w-14 items-center justify-center rounded-md"
        >
          <!-- Usando a imagem do card -->
          <img src="/public/card.png" alt="Card" class="h-full w-full object-cover rounded-md" />
        </div>
      {/if}

      <span class="mt-1 text-xs text-white/70">{p.name}</span>
    </div>
  {/each}

  <!-- CENTRO -->
  <div
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    flex flex-wrap justify-center gap-3"
  >
    {#if revealed}
      {#each players.filter(p => p.card) as p (p.name)}
        <div
          in:fly={{ y: -40, duration: 500 }}
          class="flex h-16 w-12 items-center justify-center rounded-xl
          bg-white text-xl font-bold text-slate-900 shadow-lg"
        >
          {p.card}
        </div>
      {/each}
    {:else}
      <span class="text-sm text-white/60">
        Aguardando votação • {votosFeitos}/{players.length}
      </span>
    {/if}
  </div>
</div>
