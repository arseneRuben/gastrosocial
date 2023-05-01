export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'Recettes',
      url: '/recipe',
      submenu: [
        {
          title: 'Nouvelle ',
          url: '/recipe/new',
        },
        {
            title: 'Catalogue ',
            url: '/recipe/index',
          },
        {
          title: 'Favoris',
          url: '/recipe/favorite',
        },
       
      ],
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Ingredients',
      url: '/recipe',
      submenu: [
        {
          title: 'Nouvelle ',
          url: '/ingredient/new',
        },
        {
            title: 'Catalogue ',
            url: '/ingredient/index',
          }
      
      
      ],
    },
  ];