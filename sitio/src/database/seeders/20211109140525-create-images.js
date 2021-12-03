'use strict';

       
let imagenes = [
  "img-producto1633610759495.jpg", "img-producto1633610759498.jpg","img-producto1633610759501.jpg","img-producto1633610759504.jpg","img-producto1633611293174.png","img-producto1633611293175.png","img-producto1633611293178.png","img-producto1633611293179.png","img-producto1633611435406.png","img-producto1633611435408.png","img-producto1633611435409.png","img-producto1633611435410.png",     "img-producto1633611825905.webp","img-producto1633611825906.jpg","img-producto1633611825909.jpg","img-producto1633611825910.jpg","img-producto1633892695039.jpg","img-producto1633892695075.jpg","img-producto1633892695080.jpg","img-producto1633892695083.jpg",
    "img-producto1633892826163.jpg","img-producto1633892826166.jpg","img-producto1633892826167.jpg","img-producto1633892826990.jpg","img-producto1633893299069.webp","img-producto1633893299071.webp","img-producto1633893299072.webp","img-producto1633893299073.webp",
    "img-producto1633893800580.webp","img-producto1633893800581.webp", "img-producto1633893800582.webp","img-producto1633893800579.webp",
    "img-producto1633894139746.webp","img-producto1633894139743.webp","img-producto1633894139744.webp","img-producto1633894139747.webp","img-producto1633894971354.jpg","img-producto1633894971345.jpg","img-producto1633894971347.jpg","img-producto1633894971353.jpg","img-producto1633895135178.jpg","img-producto1633895135443.jpg","img-producto1633895135447.jpg","img-producto1633895135450.jpg","img-producto1633895451241.webp","img-producto1633895451242.webp","img-producto1633895451243.webp","img-producto1633895451245.webp", "img-producto1633895625056.webp","img-producto1633895625058.webp","img-producto1633895625060.webp","img-producto1633895625057.webp","img-producto1633895784864.webp","img-producto1633895784865.webp","img-producto1633895784866.webp","img-producto1633895784867.webp", "img-producto1633895905755.webp","img-producto1633895905756.webp","img-producto1633895905760.webp","img-producto1633895905761.webp", "img-producto1633896160460.webp","img-producto1633896160461.webp","img-producto1633896160463.jpg","img-producto1633896160464.jpg"
  ]

    let img = 0;
    const images = [];
    
    
    for (let i = 0; i < 16; i++) {
      for (let index = 0; index < 4; index++) {
        var image = {
          file : imagenes[img] ,
          productId : i + 1,
          createdAt : new Date,
          updatedAt : new Date
        }
        images.push(image)

        ++img

      
    } 
    
    
    }
    
    


module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Images', images, {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Images',images, null, {});
     
  }
};
