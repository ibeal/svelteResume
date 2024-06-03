<script>
	import { base } from '$app/paths';
	import { darkTheme } from '$lib/index';
	import Tag from '$lib/tag.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { data } from '$lib/data';

	let linkedinLogoPath = base + '/In-Blue-21.png';

	let isDarkMode = false;
	darkTheme.subscribe((val) => {
		isDarkMode = val;
	});

  /**
   * Sets the app to light mode
   */
	let setLightMode = () => {
		darkTheme.set(false);
		localStorage.setItem('dark-mode', 'light');
		document.documentElement.classList.remove('dark');
	};
  /**
   * Sets the app to dark mode
   */
	let setDarkMode = () => {
		darkTheme.set(true);
		localStorage.setItem('dark-mode', 'dark');
		document.documentElement.classList.add('dark');
	};

  // determine starting dark/light mode
	if (
    // previously saved dark mode
		localStorage.getItem('dark-mode') === 'dark' ||
    // not previously set dark mode and OS is set to dark mode
		(!('dark-mode' in localStorage) && 
      window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		setDarkMode();
	} else {
		setLightMode();
	}

  // setup views of the data
	let bio = data.bio;
	let experienceView = data.experience
		.sort((a, b) => b.start.valueOf() - a.start.valueOf())
		.slice(0, 3);
	let skillsView = data.skills.slice(0, 14);
	let projectView = data.projects.slice(0, 3);
	let certView = data.certs.slice(0, 4);
	let degreeView = data.degrees.slice(0, 2);
	let referenceView = data.references.slice(0, 3);

  // get initial values of the theme colors
	let rootElement = document.querySelector(':root') || document.documentElement;
	let rootElementStyles = getComputedStyle(rootElement);
	let primary = rootElementStyles.getPropertyValue('--primary');
	let secondary = rootElementStyles.getPropertyValue('--secondary');
	let tertiary = rootElementStyles.getPropertyValue('--tertiary');

	/**
   * Set the given css key to the given value at the root level
	 * @param {'--primary'|'--secondary'|'--tertiary'} key
	 * @param {string | undefined} value
	 */
	function cssSet(key, value) {
		// @ts-ignore
		rootElement?.style.setProperty(key, value);
	}
</script>

<div>
	<style>
		.dark {
			--cp-bg-color: #333;
			--cp-border-color: white;
			--cp-text-color: white;
			--cp-input-color: #555;
			--cp-button-hover-color: #777;
		}
	</style>
	<div class="container max-w-screen-2xl mx-auto">
		<div id="header" class="row pt-7 mx-5">
			<div class="flex">
				<h1 class="text-6xl font-semibold grow">Ian Beal</h1>
				<div class="my-auto mx-1 rounded">
					<ColorPicker
						hex={primary}
						label=""
						on:input={(event) => {
							cssSet('--primary', event.detail.hex);
						}}
					/>
				</div>
				<div class="my-auto mx-1 rounded">
					<ColorPicker
						hex={secondary}
						label=""
						on:input={(event) => {
							cssSet('--secondary', event.detail.hex);
						}}
					/>
				</div>
				<div class="my-auto mx-1 mr-3 rounded">
					<ColorPicker
						hex={tertiary}
						label=""
						on:input={(event) => {
							cssSet('--tertiary', event.detail.hex);
						}}
					/>
				</div>
				{#if !isDarkMode}
					<button id="dark-toggle" type="button" on:click={setDarkMode}>
						<svg
							id="theme-toggle-dark-icon"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
							></path></svg
						>
					</button>
				{/if}
				{#if isDarkMode}
					<button id="light-toggle" type="button" on:click={setLightMode}>
						<svg
							id="theme-toggle-light-icon"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fill-rule="evenodd"
								clip-rule="evenodd"
							></path></svg
						>
					</button>
				{/if}
			</div>
			<h3 class="text-3xl my-2 font-semibold">Software Engineer</h3>
			<p>
				<a href="mailto:ian@ianbeal.dev?subject=Saw%20Your%20Resume%20Online!"> ian@ianbeal.dev</a>
				<span> | </span>
				<a href="https://www.linkedin.com/in/ian-beal/"
					><img src={linkedinLogoPath} alt="LinkedIn® logo" class="inline-block" /></a
				>
			</p>
			<hr class="my-4 border-gray" />
		</div>
		<div class="container flex flex-wrap">
			<div
				id="profile"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/3 grow min-w-48"
			>
				<h2 class="text-4xl">Profile</h2>
				<p class="my-3">{bio}</p>
			</div>
			<div
				id="career"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/3 min-w-fit grow"
			>
				<h2 class="text-4xl">Career Summary</h2>
				<ul class="my-3">
					{#each experienceView as job}
						<li class="my-3">
							<p class="text-xl">{job.position}</p>
							<p class="italic">
								{job.company} | {job.start.toLocaleDateString()}
								to {job.end?.toLocaleDateString() ?? 'present'}
							</p>
							<ul class="list-disc list-inside my-1">
								{#each job.achievments as ach}
									<li>
										{ach}
									</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</div>
			<div
				id="skill"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/6 grow"
			>
				<h2 class="text-4xl">Skills</h2>
				<div class="my-3">
					{#each skillsView as skill}
						<Tag text={skill} />
					{/each}
				</div>
			</div>
			<div
				id="education"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/4 min-w-fit grow"
			>
				<h2 class="text-4xl mb-3">Education</h2>
				<h4 class="text-2xl my-2">Degree</h4>
				<ul class="my-2">
					{#each degreeView as degree}
						<li>
							<p>{degree.giver}</p>
							<p>{degree.diploma}</p>
						</li>
					{/each}
				</ul>
				<h4 class="text-2xl">Certifications</h4>
				<ul class="my-2">
					{#each certView as cert}
						<li>
							<p>{cert.diploma}</p>
						</li>
					{/each}
				</ul>
			</div>
			<div
				id="projects"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/3 min-w-fit grow"
			>
				<h2 class="text-4xl">Projects</h2>
				<ul class="my-3">
					{#each projectView as project}
						<li class="my-3">
							<p class="text-xl">{project.name}</p>
							<ul>
								{#each project.highlights as highlight}
									<li>
										{highlight}
									</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</div>
			<div
				id="reference"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/4 min-w-fit shrink grow"
			>
				<h2 class="text-4xl">References</h2>
				<ul class="my-3">
					{#each referenceView as ref}
						<li class="my-2">
							<p class="text-xl">{ref.name}</p>
							<p class="italic">{ref.email}</p>
							<p>{ref.title}, {ref.company}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
