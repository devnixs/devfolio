module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.thera-engineering.com/`,
    // Your Name
    name: 'Raphael ATALLAH',
    // Main Site Title
    title: `Thera Engineering | Raphael ATALLAH`,
    // Description that goes under your name in main bio
    description: `Senior Software Engineer`,
    // Optional: Twitter account handle
    // Optional: Github account URL
    github: `https://github.com/devnixs`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/raphaelatallah/`,
    // Content of the About Me section
    about: ``,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'XBTO',
        date: '2018 - now',
        description: 'Fullstack engineer',
        link: 'https://www.xbto.com/',
        stack: 'React, C#, ASP.NET Core, Blazor',
      },
      {
        name: 'Stablehouse',
        date: '2018 - now',
        description: 'Fullstack engineer',
        link: 'https://www.stablehouse.com/',
        stack: 'C#, ASP.NET Core, React, AWS Cloudformation',
      },
      {
        name: 'Cocolis',
        date: '2018 - 2023',
        description: 'Frontend engineer',
        link: 'https://www.cocolis.fr/',
        stack: 'React, NextJS',
      },
      {
        name: '1001Audios',
        date: '2016 - now',
        description: 'Fullstack engineer',
        link: 'https://www.1001Audios.fr/',
        stack: 'React, C#, ASP.NET Core',
      },
      {
        name: 'BeezUP',
        date: '2016 - 2021',
        description: 'Frontend engineer',
        link: 'https://www.beezup.com/',
        stack: 'AngularJS',
      },
      {
        name: 'IMN',
        date: '2016 - 2021',
        description: 'Frontend engineer',
        link: 'https://imnnow.com/en/home.html',
        stack: 'AngularJS',
      },
      {
        name: 'WeRecruit',
        date: '2016 - 2021',
        description: 'Fullstack engineer',
        link: 'https://werecruit.com/',
        stack: 'C#, ASP.NET Core, AngularJS',
      },
      {
        name: 'BijouxMurano',
        date: '2015 - 2021',
        description: 'Fullstack engineer',
        link: 'https://www.bijouxmurano.fr/',
        stack: 'C#, ASP.NET Core',
      },
      {
        name: 'RACycles',
        date: '2015 - 2016',
        description: 'Backend engineer',
        link: 'https://www.racycles.com/',
        stack: 'C#, ASP.NET',
      },
      {
        name: 'TheSpider',
        date: '2015 - 2016',
        description: 'Fullstack engineer',
        link: 'https://www.thespider.com/',
        stack: 'C#, ASP.NET, AngularJS',
      },
      {
        name: 'Restopolitan',
        date: '2014 - 2015',
        description: 'Backend engineer',
        link: 'https://www.restopolitan.com/',
        stack: 'C#, ASP.NET',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Arts et Métiers ParisTech',
        description: 'One of the top engineering schools in France',
        link: 'https://artsetmetiers.fr/en',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: 'C#, ASP.NET Core, Typescript, React, Blazor',
      },
      {
        name: 'Databases',
        description: 'SQL Server, PostgreSQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, Cloudformation, Application Architecture, Zero Trust',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thera Engineering`,
        short_name: `Thera Engineering`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
