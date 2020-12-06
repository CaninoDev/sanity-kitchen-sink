export default {
  widgets: [
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
                  buildHookId: '5fcc61a58a25c4adca102250',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rueyc5tc',
                  apiId: '7dd7e71a-f27d-4ef5-ba03-4fad7b6fa509'
                },
                {
                  buildHookId: '5fcc61a58a25c4a5bc10254f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pq2y5mww',
                  apiId: '8d7665cc-44e4-44be-a8e2-f338cb79f240'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CaninoDev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pq2y5mww.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
