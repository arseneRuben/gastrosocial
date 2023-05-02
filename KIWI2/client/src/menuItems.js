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
          title: 'Nouvelle ',
          url: '/ingredients/new',
        },
        {
            title: 'Catalogue ',
            url: '/ingredients/index',
          }
      
      
      ],
    },
  ];