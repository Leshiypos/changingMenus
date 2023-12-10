$(document).ready(function(){
 
  //Вторичное нижнее меню
        let num=1;                                            //счетчик позиций  пунктов меню, добавляется в атрибут data-num
        $('.menu_duble ul li').append('<span></span>');       // Доюавляем спаны для каждого пункта меню для создания анимации подчеркивания
        $('.menu_duble ul li').each( function(){              // Прописываем атрибулы data-num для каждого пункта меню
            $this=$(this);
            $this.find('a').attr('data-num', num);
            num++;
            var widthLink=$this.find('a').width()+'px';
            var class_link=$this.attr('class');
            if (class_link == 'active'){
              $this.find('span').css({'width' : widthLink});
            };
        }); //Конец функции each
  
        var preloadImages = [                                 //Предварительная загрузка изображения  дубликата меню
          'images/cam_1.jpg',
          'images/cam_2.jpg',
          'images/cam_3.jpg',
          'images/cam_4.jpg',
          'images/cam_5.jpg',
          'images/cam_6.jpg',
          'images/cam_7.jpg',
        ];
  
        for (var i=0; i < preloadImages.length; i++){
          $('<img>').attr('src', preloadImages[i]);
        };
        var curL = $('.menu_duble ul li.active a').attr('data-num')-1;
        $('.section-duplicate-img img').attr('src', preloadImages[curL]);
        console.log(preloadImages[curL]);                        //Конец Предварительная загрузка изображения  дубликата меню
  
          
        $('.menu_duble ul li a').mouseover(function(){          // анимация при наведении на пункт меню
          var $this=$(this);
          var widthLink=$this.width()+'px';
          var dataN = $this.attr('data-num');
          var pathStyle = 'anim-'+ dataN;
  
          $('.section-duplicate-img img').attr('src', preloadImages[dataN-1]); // Загрузаем новое изображение на страницу согласно наведенной ссылки
          $('.section-duplicate-img').addClass(pathStyle);                      // Добавляем стиль анимации
       
  
          $this.parent().find('span').animate({width : widthLink}, 500); // Анимация при наведении на ссылку - подчеркивание
        }); // Конец mouseover
  
        $('.menu_duble ul li a').mouseleave(function(){            // анимация при снятии курсора с  пункта меню
          var $this=$(this);
          var class_active=$this.parent().attr('class');
          var dataN = $this.attr('data-num');
          var pathStyle = 'anim-'+ dataN;
  
          $('.section-duplicate-img img').attr('src', preloadImages[curL]);
          $('.section-duplicate-img').removeClass(pathStyle);
          if (class_active != 'active'){
            $this.parent().find('span').animate({width : '0%'}, 500);
          }
        }); // Конец mouseleave
  }); // Конец ready