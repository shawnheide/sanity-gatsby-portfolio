export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e648e5ae695da05e4a8a98f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8qxzazor',
                  apiId: '7062e94d-5d0b-4906-a7cd-f673d387e894'
                },
                {
                  buildHookId: '5e648e5ae4489ee9fe707bfe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dcks11pw',
                  apiId: '0371f08c-660d-4744-9fb2-b33238e3ec4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shawnheide/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dcks11pw.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
