const PRODUCT_DATA = {
  fashion: [
    {
      id: 17,
      name: "Men's fashion & clothing",
      category: "men's wear",
      routeName: "mens",
      class: "icon-ambientais fs1 icon menu-button",
      imageUrl:
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      productList: [
        {
          id: 1341,
          name: "Mens' outer wear",
          category: "outer wear",
          routeName: "mensouter",
          imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          items: [
            {
              id: 100008,
              name: "Fjallraven - Foldsack Backpack",
              imageUrl:
                "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 22.3,
              sizes: ["s, m, l"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "yes",
            },
            {
              id: 1143986,
              name: "Mens Casual Premium Slim Fit T-Shirts",
              imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 252.3,
              sizes: ["s, m, l, xl"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 19886,
              name: "Max shirt",
              imageUrl:
                "https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 212.3,
              sizes: ["s, m, l"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 146386,
              name: "Gucci shirt",
              imageUrl:
                "https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 2112.3,
              sizes: ["xs, s, m, l"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
        {
          id: 19422,
          name: "sports wear",
          routeName: "menssports",
          imageUrl:
            "https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          category: "sports wear",
          items: [
            {
              id: 15840,
              name: "Mens Cotton Jacket",
              imageUrl:
                "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 44.3,
              sizes: ["s, m, l"],
              colors: ["black, white, red"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 115555,
              name: "Mens Casual Slim Fit",
              imageUrl:
                "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 28.3,
              sizes: ["s, m, l, xl"],
              colors: ["black, white, gray, green"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 16785,
              name: "Mens Casual Slim Fit",
              imageUrl:
                "https://images.pexels.com/photos/3799455/pexels-photo-3799455.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 28.3,
              sizes: ["s, m, l"],
              colors: ["black, white, blue"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
        {
          id: 136641,
          name: "Mens' leasure wear",
          routeName: "mensleasure",
          imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          category: "leasure wear",
          items: [
            {
              id: 18540008,
              name: "Levi Jeans",
              imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              subitems: [
                {
                  id: 100008,
                  name: "Tight Levi Jeans",
                  imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                  price: 33.3,
                  sizes: ["s, m, l"],
                  colors: ["black, white"],
                  inStock: "yes",
                  brand: "superbrand",
                  onSale: "yes",
                },
                {
                  id: 1143986,
                  name: "Loose Jeans",
                  imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                  price: 23.3,
                  sizes: ["s, m, l"],
                  colors: ["black, white, green"],
                  inStock: "yes",
                  brand: "superbrand",
                  onSale: "no",
                },
              ],
            },
            {
              id: 778143986,
              name: "T-shirt",
              imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 34.22,
              sizes: ["s, m, l"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
      ],
    },
    {
      id: 1711,
      name: "Women's clothing",
      category: "women's wear",
      routeName: "womens",
      class: "icon-ambientais fs1 icon menu-button",
      imageUrl:
        "https://www.pexels.com/sv-se/foto/stad-mode-semester-kvinna-4814633/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      productList: [
        {
          id: 134541,
          name: "Women's outer wear",
          routeName: "womensouter",
          class: "some class",
          category: "outer wear",
          imageUrl:
            "https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          items: [
            {
              id: 100008,
              name: "Leather Moto Biker Jacket",
              imageUrl:
                "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 44.3,
              sizes: ["s, m, l"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 1143986,
              name: "Rain Jacket Women Windbreaker",
              imageUrl:
                "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 14.3,
              sizes: ["xs, s, m, l"],
              colors: ["black, white, silver"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
        {
          id: 19478922,
          name: "Sports wear women",
          routeName: "womenssports",
          imageUrl:
            "https://images.pexels.com/photos/975250/pexels-photo-975250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          category: "sports wear",
          items: [
            {
              id: 15840,
              name: "Solid Short Sleeve",
              imageUrl:
                "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 142,
              sizes: ["s, m, l"],
              colors: ["black, white, brown"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 115555,
              name: "Opna Women's Short Sleeve",
              imageUrl:
                "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 1412,
              sizes: ["s, m, l"],
              colors: ["black, white"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "yes",
            },
          ],
        },
        {
          id: 136641,
          name: "Leasure wear women",
          routeName: "womensleasure",
          imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          category: "leasure wear",
          items: [
            {
              id: 18540008,
              name: "DANVOUY Womens T Shirt",
              imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 112,
              sizes: ["s, m, l"],
              colors: ["black, white, gold"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 778143986,
              name: "Hip shorts",
              imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 133,
              sizes: ["s, m, l"],
              colors: ["black, white, yellow"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
      ],
    },
  ],
  jewellery: [
    {
      id: 1434,
      name: "Jewellery Products",
      category: "jewellery",
      routeName: "jewelleryproducts",
      class: "icon-ambientais fs1 icon menu-button",
      imageUrl:
        "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      productList: [
        {
          id: 6641,
          category: "rings",
          name: "rings",
          routeName: "rings",
          imageUrl:
            "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          items: [
            {
              id: 108,
              name: "gold rings",
              routeName: "goldrings",
              imageUrl:
                "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: "100-1000",
              subitems: [
                {
                  id: 13008,
                  name: "Pierced Owl Rose Gold Plated",
                  imageUrl:
                    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                  price: 133.3,
                  sizes: ["s, m"],
                  lorem: ["lorem, ipsum"],
                  inStock: "yes",
                  brand: "superbrand",
                  onSale: "no",
                },
                {
                  id: 114876,
                  name: "White Gold Plated Princess",
                  imageUrl:
                    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                  price: 223.3,
                  sizes: ["s, m"],
                  lorem: ["lorem, ipsum"],
                  inStock: "yes",
                  brand: "superbrand",
                  onSale: "no",
                },
              ],
            },
            {
              id: 7786,
              name: "John Hardy Women's Legends Naga Gold & Silver Dragon",
              imageUrl:
                "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 34.22,
              sizes: ["s, m, l"],
              lorem: ["lorem, ipsum, dolor"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
        {
          id: 841,
          category: "earrings",
          name: "earrings",
          routeName: "earrings",
          imageUrl:
            "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          price: "200-240",
          items: [
            {
              id: 10138,
              name: "gold rings",
              routeName: "goldrings",
              imageUrl:
                "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: "200-240",
              subitems: [
                {
                  id: 16708,
                  name: "Pierced Owl Rose Gold Plated",
                  imageUrl:
                    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                  price: 133.3,
                  sizes: ["s, m"],
                  lorem: ["lorem, ipsum"],
                  inStock: "yes",
                  brand: "superbrand",
                  onSale: "no",
                },
                {
                  id: 199776,
                  name: "White Gold Plated Princess",
                  imageUrl:
                    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
                  price: 223.3,
                  sizes: ["s, m"],
                  lorem: ["lorem, ipsum"],
                  inStock: "yes",
                  brand: "superbrand",
                  onSale: "yes",
                },
              ],
            },
            {
              id: 795446,
              name: "John Hardy Women's Legends Naga Gold & Silver Dragon",
              imageUrl:
                "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 34.22,
              sizes: ["s, m"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
      ],
    },
  ],
  electronics: [
    {
      id: 198995534,
      name: "Electronics Products",
      category: "electronics",
      routeName: "electronicsproducts",
      class: "icon-ambientais fs1 icon menu-button",
      imageUrl:
        "https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
      productList: [
        {
          id: 345345,
          category: "monitors",
          name: "monitors",
          routeName: "monitors",
          imageUrl:
            "https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
          items: [
            {
              id: 777546,
              name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
              imageUrl:
                "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 3784.22,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 9,
              name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
              imageUrl:
                "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 64,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "yes",
            },
            {
              id: 190,
              name: "SanDisk SSD PLUS 1TB Internal SSD ",
              imageUrl:
                "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 109,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 113,
              name: "Silicon Power 256GB SSD 3D NAND A55 SLC ",
              imageUrl:
                "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 109,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "yes",
            },
            {
              id: 182,
              name: "WD 4TB Gaming Drive Works with Playstation 4",
              imageUrl:
                "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 114,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 13,
              name: "Acer SB220Q bi 21.5 inches Full HD",
              imageUrl:
                "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 599,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
            {
              id: 14,
              name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
              imageUrl:
                "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.",
              price: 999.99,
              dolor: ["delta, beta"],
              lorem: ["lorem, ipsum"],
              inStock: "yes",
              brand: "superbrand",
              onSale: "no",
            },
          ],
        },
      ],
    },
  ],
};

export default PRODUCT_DATA;