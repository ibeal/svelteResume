<script>
    /**
	 * @type {string}
	 */
    export let text;
    let colors=[
      1,2,3
    ];
    // if (document.getElementById('topBody')?.classList.contains('dark')) {
    // }
    let i = Math.floor(Math.random()*3);
</script>

<div class="inline-block rounded-3xl px-2 py-1 m-1 min-w-16" class:bg-primary={i == 0} class:bg-secondary={i == 1} class:bg-tertiary={i == 2}>
    <p class="text-center mx-1 text-gray-dark">{ text }</p>
</div>