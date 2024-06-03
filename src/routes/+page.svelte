<script>
// @ts-nocheck

    import {base} from '$app/paths'
    import { darkTheme } from '$lib/index'
    import Tag from '$lib/tag.svelte';
    import ColorPicker from 'svelte-awesome-color-picker';

    let title = 'Ian\'s Resume';
    let linkedin = base + "/In-Blue-21.png"

    let dark = false;

    darkTheme.subscribe((val) => {
        dark = val;
    })

    let lightMode = () => {
        darkTheme.set(false);
        localStorage.setItem('dark-mode', 'light');
        document.documentElement.classList.remove('dark');
    }
    let darkMode = () => {
        darkTheme.set(true);
        localStorage.setItem('dark-mode', 'dark');
        document.documentElement.classList.add('dark');
    }
    if (localStorage.getItem('dark-mode') === 'dark' || (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darkMode()
    } else {
        lightMode()
    }

    let bio = 'After discovering automation, projects I\'ve created are still in use. Creative, outside the-box solutions, with a careful look at the end goal, meet and exceed company needs.'

    let experience = [
    {
      company: 'Church of Jesus Christ of Latter Day Saints',
      position: 'QA Engineer Intern',
      start: new Date('1 May 2020'),
      end: new Date('1 Dec 2020'),
      duties: [],
      achievments: [
        'Created automated tests that covered 40 hrs of manual testing each week',
        'Wrote the team\'s first automated UI tests that reported results to Jira board',
        'Maintained documentation on the automated test suite'
      ]
    },
    {
      company: 'Anglepoint',
      position: 'Software Developer III',
      start: new Date('5 May 2021'),
      end: undefined,
      duties: [],
      achievments: [
        'Migrated the entire codebase from .NET Framework 4.8 to .NET 8',
        'Moved 350 production databases with only a 2 hour outage period',
        'Designed and implemented the entire CI/CD pipeline, saving 12 developer hours a week',
      ]
    },
  ];

  
  let experienceView = experience
    .sort((a,b) => b.start.valueOf() - a.start.valueOf())
    .slice(0,3);

    let skills = [ 
    'Azure', 
    'C#', 
    '.NET Framework', 
    '.NET Core', 
    'SQL Server', 
    'Python', 
    'JavaScript', 
    'Angular', 
    'HTML', 
    'Java', 
    'Cypress', 
    'Jira', 
    'Bash'
  ];

  let skillsView = skills.slice(0, 10);

    let projects = [
    {
      name: 'KitchenDB',
      highlights: [
        'Inventory management system for recipes and kitchen supplies',
        'Includes SQL database on backend and a custom GUI on frontend'
      ]
    },
    {
      name: 'Assembler/Virtual Machine',
      highlights: [
        'An full implementation of an Assembler and Virtual Machine, built from scratch',
        'Translates Assembly code file into bytes and runs the created bytecode'
      ]
    },
    {
      name: 'Resume Website',
      highlights: [
        'Built using Angular 2 and Tailwind CSS',
        'Hosted in Azure',
        'Setup with Github actions for automated deployment'
      ]
    }
  ];

  
  let projectView = projects.slice(0, 3);

  let certs = [
    {
      giver: 'Microsoft', 
      diploma:'Azure Associate Developer'
    },
    {
      giver: 'Microsoft',
      diploma: 'Azure Fundamentals'
    },
    {
      giver: 'Microsoft',
      diploma: 'Azure Machine Learning Fundamentals'
    },
    {
      giver: 'LaunchDarkly', 
      diploma: 'LaunchDarkly Silver Certificate',
    }
  ];
  let degrees = [
    {
      giver: 'Utah Valley University', 
      diploma: 'Bachelor of Science in Computer Science'},
  ];

  
  let certView = certs.slice(0, 4);
  let degreeView = degrees.slice(0, 2);

  let references = [ 
    {
      name:'James Bekker',
      title: 'Religous Mission Supervisor',
      company:'University of Utah', 
      email:'James.Bekker@hsc.urah.edu'
    },
    {
      name: 'Bradley Clark',
      title: 'Engineering Manager',
      company: 'Anglepoint',
      email: 'bradley.clark@anglepoint.com'
    },
    {
      name: 'Viktorya Reznik',
      title: 'VP of Engineering',
      company: 'Anglepoint',
      email: 'viktory.reznik@anglepoint.com'
    }
  ];

  let referenceView = references.slice(0, 3);
  
  var r = document.querySelector(':root');
  var rs = getComputedStyle(r || new Element());
  let primary = rs.getPropertyValue('--primary');
  let secondary = rs.getPropertyValue('--secondary');
  let tertiary = rs.getPropertyValue('--tertiary');
  
  /**
	 * @param {'--primary'|'--secondary'|'--tertiary'} key
	 * @param {string | undefined} value
	 */
  function cssSet(key, value) {
    // Set the value of variable --blue to another value (in this case "lightblue")
    let r = document.querySelector(':root') || document.documentElement;
    console.log(r, key, value)
    // @ts-ignore
    r?.style.setProperty(key, value);
    console.log(getComputedStyle(r).getPropertyValue(key))
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
    }</style>
    <div class="container max-w-screen-2xl mx-auto">
      <div id="header" class="row pt-7 mx-5">
        <div class="flex">
          <h1 class="text-6xl font-semibold grow">Ian Beal</h1>
          <div class="my-auto mx-1 rounded">
            <ColorPicker 
              hex={primary}
              label=''
              on:input={(event) => {
                cssSet("--primary", event.detail.hex);
              }}
            />
          </div>
          <div class="my-auto mx-1 rounded">
            <ColorPicker 
            hex={secondary}
            label=''
            on:input={(event) => {
              cssSet("--secondary", event.detail.hex);
            }}
            />
          </div>
          <div class="my-auto mx-1 mr-3 rounded">
            <ColorPicker 
            hex={tertiary}
            label=''
            on:input={(event) => {
              cssSet("--tertiary", event.detail.hex);
            }}
            />
          </div>
          { #if !dark }
          <button id="dark-toggle" type="button" on:click={darkMode}>
            <svg id="theme-toggle-dark-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          </button>
          {/if}
          { #if dark}
          <button id="light-toggle" type="button" on:click={lightMode}>
            <svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </button>
          {/if}
        </div>
          <h3 class="text-3xl my-2 font-semibold ">Software Engineer</h3>
        <p>
          <a href="mailto:ian@ianbeal.dev?subject=Saw%20Your%20Resume%20Online!"> ian@ianbeal.dev</a>
          <span> | </span>
          <a href="https://www.linkedin.com/in/ian-beal/"><img type="image/png" src={linkedin} alt="LinkedIn® logo" class="inline-block"/></a>
        </p>
        <hr class="my-4 border-gray">
      </div>
      <div class="container flex flex-wrap">
        <div id="profile" class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/3 grow min-w-48">
          <h2 class="text-4xl">Profile</h2>
          <p class="my-3">{bio}</p>
        </div>
        <div id="career" class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/3 min-w-fit grow">
          <h2 class="text-4xl">Career Summary</h2>
          <ul class="my-3">
            {#each experienceView as job}
            <li class="my-3">
              <p class="text-xl">{ job.position }</p>
              <p class="italic">{ job.company } | {job.start.toLocaleDateString() }
                to { job.end?.toLocaleDateString() ?? 'present' }</p>
                <ul class="list-disc list-inside my-1">
                  {#each job.achievments as ach}
                  <li>
                    { ach }
                  </li>
                  {/each}
                </ul>
              </li>
            {/each}
          </ul>
        </div>
        <div id="skill" class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/6 grow">
          <h2 class="text-4xl">Skills</h2>
          <div class="my-3">
            {#each skills as skill}
              <Tag text={ skill } />
            {/each}
          </div>
        </div>
        <div id="education" class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/4 min-w-fit grow">
          <h2 class="text-4xl mb-3">Education</h2>
          <h4 class="text-2xl my-2">Degree</h4>
          <ul class="my-2">
            {#each degreeView as degree}
            <li>
              <p>{ degree.giver }</p>
              <p>{ degree.diploma }</p>
            </li>
            {/each}
          </ul>
          <h4 class="text-2xl">Certifications</h4>
          <ul class="my-2">
            {#each certView as cert}
            <li>
              <p>{ cert.diploma }</p>
            </li>
            {/each}
          </ul>
        </div>
        <div id="projects" class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/3 min-w-fit grow">
          <h2 class="text-4xl">Projects</h2>
          <ul class="my-3">
            {#each projectView as project}
            <li class="my-3">
              <p class="text-xl">{ project.name }</p>
              <ul>
                {#each project.highlights as highlight}
                <li>
                  { highlight }
                </li>
                {/each}
              </ul>
            </li>
            {/each}
          </ul>
        </div>
        <div id="reference" class="col-sm p-3 m-2 rounded-2xl border-gray border-solid border-2 basis-1/4 min-w-fit shrink grow">
          <h2 class="text-4xl">References</h2>
          <ul class="my-3">
            {#each referenceView as ref}
            <li class="my-2">
              <p class="text-xl">{ ref.name }</p>
              <p class="italic">{ ref.email }</p>
              <p>{ ref.title }, { ref.company }</p>
            </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>