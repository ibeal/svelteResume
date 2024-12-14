<script>
	import { base } from '$app/paths'
	import { darkTheme } from '$lib/index';
	import Tag from '$lib/tag.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import { data } from '$lib/data';

	const linkedinLogoPath = base + '/In-Blue-21.png';

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
	 * Sets the app to light mode, but not in local storage
	 */
	let print = () => {
		if (!isDarkMode) return window.print();
		// document.documentElement.classList.remove('dark');
		window.print()
	}
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
		(!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		setDarkMode();
	} else {
		setLightMode();
	}

	// setup views of the data
	let bio = data.bio;
	let experienceView = data.experience
		.sort((a, b) => new Date(b.start).valueOf() - new Date(a.start).valueOf())
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

	/**
	 * Object representing month names mapped to their respective numbers.
	 * @type {Object.<number, string>}
	 */
	const months = {
		0: 'Jan.',
		1: 'Feb.',
		2: 'Mar.',
		3: 'Apr.',
		4: 'May',
		5: 'Jun.',
		6: 'Jul.',
		7: 'Aug.',
		8: 'Sep.',
		9: 'Oct.',
		10: 'Nov.',
		11: 'Dec.'
	};
	/**
	 * @param {string|Undefined} date
	 * @param {string} format
	 */
	function formatDate(date, format='localDate') {
		if (date == undefined || date === "") return undefined
		let convertedDate = new Date(date);
		switch(format) {
			case 'localDate': return convertedDate.toLocaleDateString();
			case 'M/YYYY': return `${convertedDate.getMonth()}/${convertedDate.getFullYear()}`;
			case 'mmm YYYY': return `${months[convertedDate.getMonth()]} ${convertedDate.getFullYear()}`
		}
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
	<div class="container max-w-screen-lg mx-auto print:text-2xs print:mx-0">
		<div id="header" class="row pt-7 mx-5 print:mx-8">
			<div class="flex">
				<h1 class="text-6xl font-semibold grow print:text-3xl">Ian Beal</h1>
				<button id="printButton" type="button" on:click={print} class="has-tooltip">
					<span class="bg-primary shadow-lg z-10 absolute visible px-2 py-1 tooltip mt-8 -ms-40 rounded-lg print:hidden text-gray-dark">
						For best results, use minimal margins when printing</span>
					<svg
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 122.88 114.13"
						class="w-5 h-5 mr-3 my-auto print:hidden"
						fill="currentColor"
						><path d="M23.2,29.44V3.35V0.53C23.2,0.24,23.44,0,23.73,0h2.82h54.99c0.09,0,0.17,0.02,0.24,0.06l1.93,0.8l-0.2,0.49l0.2-0.49 c0.08,0.03,0.14,0.08,0.2,0.14l12.93,12.76l0.84,0.83l-0.37,0.38l0.37-0.38c0.1,0.1,0.16,0.24,0.16,0.38v1.18v13.31 c0,0.29-0.24,0.53-0.53,0.53h-5.61c-0.29,0-0.53-0.24-0.53-0.53v-6.88H79.12H76.3c-0.29,0-0.53-0.24-0.53-0.53 c0-0.02,0-0.03,0-0.05v-2.77h0V6.69H29.89v22.75c0,0.29-0.24,0.53-0.53,0.53h-5.64C23.44,29.97,23.2,29.73,23.2,29.44L23.2,29.44z M30.96,67.85h60.97h0c0.04,0,0.08,0,0.12,0.01c0.83,0.02,1.63,0.19,2.36,0.49c0.79,0.33,1.51,0.81,2.11,1.41 c0.59,0.59,1.07,1.31,1.4,2.1c0.3,0.73,0.47,1.52,0.49,2.35c0.01,0.04,0.01,0.08,0.01,0.12v0v9.24h13.16h0c0.04,0,0.07,0,0.11,0.01 c0.57-0.01,1.13-0.14,1.64-0.35c0.57-0.24,1.08-0.59,1.51-1.02c0.43-0.43,0.78-0.94,1.02-1.51c0.21-0.51,0.34-1.07,0.35-1.65 c-0.01-0.03-0.01-0.07-0.01-0.1v0V43.55v0c0-0.04,0-0.07,0.01-0.11c-0.01-0.57-0.14-1.13-0.35-1.64c-0.24-0.56-0.59-1.08-1.02-1.51 c-0.43-0.43-0.94-0.78-1.51-1.02c-0.51-0.22-1.07-0.34-1.65-0.35c-0.03,0.01-0.07,0.01-0.1,0.01h0H11.31h0 c-0.04,0-0.08,0-0.11-0.01c-0.57,0.01-1.13,0.14-1.64,0.35C9,39.51,8.48,39.86,8.05,40.29c-0.43,0.43-0.78,0.94-1.02,1.51 c-0.21,0.51-0.34,1.07-0.35,1.65c0.01,0.03,0.01,0.07,0.01,0.1v0v35.41v0c0,0.04,0,0.08-0.01,0.11c0.01,0.57,0.14,1.13,0.35,1.64 c0.24,0.57,0.59,1.08,1.02,1.51C8.48,82.65,9,83,9.56,83.24c0.51,0.22,1.07,0.34,1.65,0.35c0.03-0.01,0.07-0.01,0.1-0.01h0h13.16 v-9.24v0c0-0.04,0-0.08,0.01-0.12c0.02-0.83,0.19-1.63,0.49-2.35c0.31-0.76,0.77-1.45,1.33-2.03c0.02-0.03,0.04-0.06,0.07-0.08 c0.59-0.59,1.31-1.07,2.1-1.4c0.73-0.3,1.52-0.47,2.36-0.49C30.87,67.85,30.91,67.85,30.96,67.85L30.96,67.85L30.96,67.85z M98.41,90.27v17.37v0c0,0.04,0,0.08-0.01,0.12c-0.02,0.83-0.19,1.63-0.49,2.36c-0.33,0.79-0.81,1.51-1.41,2.11 c-0.59,0.59-1.31,1.07-2.1,1.4c-0.73,0.3-1.52,0.47-2.35,0.49c-0.04,0.01-0.08,0.01-0.12,0.01h0H30.96h0 c-0.04,0-0.08-0.01-0.12-0.01c-0.83-0.02-1.62-0.19-2.35-0.49c-0.79-0.33-1.5-0.81-2.1-1.4c-0.6-0.6-1.08-1.31-1.41-2.11 c-0.3-0.73-0.47-1.52-0.49-2.35c-0.01-0.04-0.01-0.08-0.01-0.12v0V90.27H11.31h0c-0.04,0-0.08,0-0.12-0.01 c-1.49-0.02-2.91-0.32-4.2-0.85c-1.39-0.57-2.63-1.41-3.67-2.45c-1.04-1.04-1.88-2.28-2.45-3.67c-0.54-1.3-0.84-2.71-0.85-4.2 C0,79.04,0,79,0,78.96v0V43.55v0c0-0.04,0-0.08,0.01-0.12c0.02-1.49,0.32-2.9,0.85-4.2c0.57-1.39,1.41-2.63,2.45-3.67 c1.04-1.04,2.28-1.88,3.67-2.45c1.3-0.54,2.71-0.84,4.2-0.85c0.04-0.01,0.08-0.01,0.12-0.01h0h100.25h0c0.04,0,0.08,0,0.12,0.01 c1.49,0.02,2.91,0.32,4.2,0.85c1.39,0.57,2.63,1.41,3.67,2.45c1.04,1.04,1.88,2.28,2.45,3.67c0.54,1.3,0.84,2.71,0.85,4.2 c0.01,0.04,0.01,0.08,0.01,0.12v0v35.41v0c0,0.04,0,0.08-0.01,0.12c-0.02,1.49-0.32,2.9-0.85,4.2c-0.57,1.39-1.41,2.63-2.45,3.67 c-1.04,1.04-2.28,1.88-3.67,2.45c-1.3,0.54-2.71,0.84-4.2,0.85c-0.04,0.01-0.08,0.01-0.12,0.01h0H98.41L98.41,90.27z M89.47,15.86 l-7-6.91v6.91H89.47L89.47,15.86z M91.72,74.54H31.16v32.89h60.56V74.54L91.72,74.54z"
						/></svg
					>
				</button>
				<div class="my-auto mx-1 rounded print:hidden">
					<ColorPicker
						hex={primary}
						label=""
						on:input={(event) => {
							cssSet('--primary', event.detail.hex);
						}}
					/>
				</div>
				<div class="my-auto mx-1 rounded print:hidden">
					<ColorPicker
						hex={secondary}
						label=""
						on:input={(event) => {
							cssSet('--secondary', event.detail.hex);
						}}
					/>
				</div>
				<div class="my-auto mx-1 mr-3 rounded print:hidden">
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
							class="w-5 h-5 print:hidden"
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
							class="w-5 h-5 print:hidden"
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
			<h3 class="text-3xl my-2 font-semibold print:text-lg">Software Engineer</h3>
			<p>
				<a href="mailto:ian@ianbeal.dev?subject=Saw%20Your%20Resume%20Online!"> ian@ianbeal.dev</a>
				<span> | </span>
				<a href="https://www.linkedin.com/in/ian-beal/"
					><img src={linkedinLogoPath} alt="LinkedIn® logo" class="inline-block" /></a
				>
			</p>
			<hr class="my-4 border-gray" />
		</div>
		<div class="container flex flex-wrap print:mx-auto">
			<div
				id="profile"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 print:border basis-full grow min-w-48 print:w-max"
			>
				<h2 class="text-4xl print:text-xl">Profile</h2>
				<p class="my-3">{bio}</p>
			</div>
			<div
				id="career"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 print:border basis-1/3 min-w-fit grow print:min-w-96"
			>
				<h2 class="text-4xl print:text-xl">Career Summary</h2>
				<ul class="my-3">
					{#each experienceView as job}
						<li class="my-3">
							<p class="text-2xl print:text-sm">{job.position}</p>
							<div class="flex">
								<p class="grow">
									{job.company} 
								</p>
								<p class="italic">
									{formatDate(job.start, 'mmm YYYY')}
									- {formatDate(job.end, 'mmm YYYY') ?? 'Present'}
								</p>
							</div>
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
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 print:border basis-1/6 shrink min-w-64"
			>
				<h2 class="text-4xl print:text-xl">Skills</h2>
				<div class="my-3">
					{#each skillsView as skill}
						<Tag text={skill} />
					{/each}
				</div>
			</div>
			<div
				id="education"
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 print:border basis-1/4 min-w-fit grow print:min-w-10"
			>
				<h2 class="text-4xl mb-3 print:text-xl">Education</h2>
				<h4 class="text-2xl print:text-md my-2">Degree</h4>
				<ul class="my-2">
					{#each degreeView as degree}
						<li>
							<p>{degree.giver}</p>
							<p>{degree.diploma}</p>
						</li>
					{/each}
				</ul>
				<h4 class="text-2xl print:text-md">Certifications</h4>
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
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 print:border basis-1/3 min-w-fit grow print:min-w-5"
			>
				<h2 class="text-4xl print:text-xl">Projects</h2>
				<ul class="my-3">
					{#each projectView as project}
						<li class="my-3">
							<p class="text-2xl print:text-sm">{project.name}</p>
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
				class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 print:border basis-1/4 min-w-fit shrink grow hidden"
			>
				<h2 class="text-4xl print:text-xl">References</h2>
				<ul class="my-3">
					{#each referenceView as ref}
						<li class="my-2">
							<p class="text-xl print:text-sm">{ref.name}</p>
							<p class="italic">{ref.email}</p>
							<p>{ref.title}, {ref.company}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
