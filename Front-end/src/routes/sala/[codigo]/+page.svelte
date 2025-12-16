<script>
  import Header from '$lib/Header.svelte';
  import PokerTable from '$lib/PokerTable.svelte';
  import CardDeck from '$lib/CardDeck.svelte';

  let revealed = false;

  // índice do jogador local (mock)
  const myIndex = 0;

  let players = [
    { name: 'Ana Silva', initials: 'AS', card: null },
    { name: 'Bruno Costa', initials: 'BC', card: null },
    { name: 'Eduardo Lima', initials: 'EL', card: null },
    { name: 'Carla Mendes', initials: 'CM', card: null },
    { name: 'Fernanda Rocha', initials: 'FR', card: null },
    { name: 'Gustavo Alves', initials: 'GA', card: null },
    { name: 'Juliana Pinto', initials: 'JP', card: null },
    { name: 'Lucas Ferreira', initials: 'LF', card: null },
    { name: 'Mariana Souza', initials: 'MS', card: null },
    { name: 'Rafael Gomes', initials: 'RG', card: null },
    { name: 'Sofia Ribeiro', initials: 'SR', card: null },
    { name: 'Tiago Cardoso', initials: 'TC', card: null },
    { name: 'Vanessa Dias', initials: 'VD', card: null },
    { name: 'Wagner Nunes', initials: 'WN', card: null },
    { name: 'Yasmin Farias', initials: 'YF', card: null },
    { name: 'Zeca Martins', initials: 'ZM', card: null }
  ];

  let resetCards = 0;

  function escolherCarta(event) {
    const card = event.detail;

    if (revealed) return;

    players = players.map((p, i) =>
      i === myIndex ? { ...p, card } : p
    );
  }

  function revelar() {
    revealed = true;
  }

  function novaRodada() {
    revealed = false;
    players = players.map(p => ({ ...p, card: null }));
    resetCards += 1;
  }
</script>

<div class="flex min-h-screen bg-slate-900 text-white">
  <div class="flex flex-1 flex-col">
    <Header
      on:reveal={revelar}
      on:new={novaRodada}
    />

    <PokerTable {players} {revealed} />

    {#if !revealed}
      <CardDeck
        on:select={escolherCarta}
        disabled={revealed}
        resetCards={resetCards}
      />
    {/if}
  </div>
</div>
