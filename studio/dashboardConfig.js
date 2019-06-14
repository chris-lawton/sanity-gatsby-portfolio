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
                  buildHookId: '5d040d6990be7e5c3f88ce75',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7v58s5pc',
                  apiId: '19eb73a4-8014-4f22-842a-a772113f58be'
                },
                {
                  buildHookId: '5d040d6983c1f8138b89064e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pp57ye9y',
                  apiId: 'ed41ec70-38d9-4426-90e0-66e86fb48299'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chris-lawton/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-pp57ye9y.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
