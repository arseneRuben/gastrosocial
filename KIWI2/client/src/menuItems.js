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
        {
            title: 'Details',
            url: '/recipe/detail',
          }
      ],
    },
    {
      title: 'About',
      url: '/about',
    },
  ];