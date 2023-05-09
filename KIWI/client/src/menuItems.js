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
            url: '/recipes',
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
      
    },
  ];