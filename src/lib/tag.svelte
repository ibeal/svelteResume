<script>
    /**
	 * @type {string}
	 */
    export let text;
    import theme from '$lib/theme.json'
    let colors=[
      //'#f0868a', // light red
      // '#87a1ed', //light blue 
      // '#9fed87', // light green
      // '#f0e665', // light yellow
      theme.primary,
      theme.secondary,
      theme.tertiary
    ];
    // if (document.getElementById('topBody')?.classList.contains('dark')) {
    // }
    let background = colors[Math.floor(Math.random()*colors.length)];
</script>

<div class="inline-block rounded-3xl px-2 py-1 m-1 min-w-16" style={'background: ' + background}>
    <p class="text-center mx-1 text-gray-dark">{ text }</p>
</div>