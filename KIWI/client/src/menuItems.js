export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Recettes',
      url: '/recipes',
      submenu: [
        {
          title: 'Nouvelle ',
          url: '/recipes/new',
        },
        {
            title: 'Catalogue ',
            url: '/recipes/index',
          },
        {
          title: 'Favoris',
          url: '/recipes/favorite',
        },
       
      ],
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Ingredients',
      url: '/ingredients',
      submenu: [
        {
          title: 'Nouvel ',
          url: '/ingredients/new',
        },
        {
            title: 'Catalogue ',
            url: '/ingredients',
        }
      
      
      ],
    },
    {
      title: 'Caterories',
      url: '/categories',
      submenu: [
        {
          title: 'Nouvelle ',
          url: '/categories/new',
        },
        {
            title: 'Liste ',
            url: '/categories',
        }
      
      
      ],
    },
  ];