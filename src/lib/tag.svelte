<script>
	/**
	 * @type {string}
	 */
	export let text;
  const themeColorEnum = {
    primary: 0,
    secondary: 1,
    tertiary: 2
  }
  /**
   * number between 1-3 indicating which theme color to use
   * @returns themeColorEnum
   */
	let themeColorIndex = Math.floor(Math.random() * 3);
</script>

<div
	class="inline-block rounded-3xl px-2 py-1 m-1 min-w-16"
	class:bg-primary={themeColorIndex == themeColorEnum.primary}
	class:bg-secondary={themeColorIndex == themeColorEnum.secondary}
	class:bg-tertiary={themeColorIndex == themeColorEnum.tertiary}
>
	<p class="text-center mx-1 text-gray-dark">{text}</p>
</div>
