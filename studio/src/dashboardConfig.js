export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f39e7f0d56b5bf983b42202',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yzn8twab',
                  apiId: '99278d7c-f1e9-4977-a7f8-572037e4f30d'
                },
                {
                  buildHookId: '5f39e7f01c848938d6faccb0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t1b9fmgu',
                  apiId: '12aadf2a-110d-4b18-950b-f6655cac7c70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mengliang10/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t1b9fmgu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
