export const data = {
    bio: 'After discovering automation, projects I\'ve created are still in use. Creative, outside the-box solutions, with a careful look at the end goal, meet and exceed company needs.',
    experience: [
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
    ],
    skills: [
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
    ],
    projects: [
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
                'Built using Svelte and Tailwind CSS',
                'Hosted in Azure',
                'Setup with Github actions for automated deployment'
            ]
        }
    ],
    certs: [
        {
            giver: 'Microsoft',
            diploma: 'Azure Associate Developer'
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
    ],
    degrees: [
        {
            giver: 'Utah Valley University',
            diploma: 'Bachelor of Science in Computer Science'
        },
    ],
    references: [
        {
            name: 'James Bekker',
            title: 'Religous Mission Supervisor',
            company: 'University of Utah',
            email: 'James.Bekker@hsc.urah.edu'
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
    ]
}