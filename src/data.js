import {writable} from 'svelte/store';

import './nedb.min.js';

var database1 = new Nedb({filename: 'Product.db', autoload: true });
var database2 = new Nedb({filename: 'Price.db', autoload: true });
var database3 = new Nedb({filename: 'Review.db', autoload: true });


let product = writable(database1);
let price   = writable(database2);
let review  = writable(database3);

function hello (){console.log("hello How are You");}


export {product , price , review , hello}  ;
















var xyz = [
   {
    "id": 1,
    "Title": "Samsung S21",
    "Price": 24000,
    "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum sapiente necessitatibus esse aperiam vero ducimus cumque libero adipisci culpa, molestiae nostrum et illum, blanditiis beatae praesentium architecto qui fuga sequi tempora ad! Quis vel a voluptatum harum veritatis fugit enim provident rem, assumenda, voluptatem incidunt quos aliquam temporibus necessitatibus nihil facere quo quia illum voluptate debitis corporis dolor distinctio et. Expedita ullam assumenda eligendi, harum nam quisquam odit, eaque fuga architecto consequatur fugit iste aperiam? Nesciunt perferendis impedit provident iste, ratione quas reiciendis veritatis ad omnis natus vitae quae, odit nulla laborum, voluptatum itaque placeat numquam totam consequatur quasi eum animi reprehenderit. Culpa voluptatem aliquam nisi perferendis magnam quia error reiciendis, unde ducimus dolore. Asperiores culpa eum ipsa alias velit sed sint officia odio earum amet? Nesciunt fugit sint, iure quod ab magnam quis hic id aliquam minima porro cupiditate debitis voluptatibus ipsa suscipit facere. Doloremque voluptas fugit enim odit quos nisi a dolores veniam deleniti illum aspernatur tempora, eaque, modi vero eius ratione velit, officia sed adipisci ut magnam aliquam? Porro quod harum odit illo dignissimos sunt nisi enim voluptate! Necessitatibus voluptatum ad cupiditate autem sunt mollitia ea dignissimos temporibus voluptatibus. Odio inventore incidunt labore vel deleniti ducimus a culpa cupiditate aut reprehenderit voluptas laborum, laboriosam quam neque laudantium deserunt sapiente sit ex optio saepe? Similique non voluptatem ab debitis labore eveniet sunt iste dicta nostrum reiciendis inventore quos, sequi officiis excepturi voluptates molestiae beatae dignissimos reprehenderit! Minima dolor consequuntur quos incidunt reprehenderit necessitatibus, ea perferendis optio repellendus. Tempora consectetur veniam quos similique cumque velit esse. Minima reiciendis at nisi cum numquam nam obcaecati laborum fugit accusantium illo accusamus, iusto assumenda nihil dicta aperiam veritatis, corrupti vitae explicabo quis commodi. Ducimus ut voluptas dolores est tenetur voluptatum similique laboriosam sapiente illo reiciendis error earum repudiandae repellat tempora, laudantium quasi animi dolorum vero perspiciatis delectus vel labore accusantium placeat? Voluptates minus officia architecto accusantium doloribus aut eaque quidem laudantium deleniti. Aperiam suscipit nesciunt ipsa, ratione ea aspernatur, doloremque officia quae deleniti, corporis molestias voluptate asperiores! Esse ducimus atque non odit libero deleniti reprehenderit consequatur aliquid ipsa. Ipsum, aperiam iste fugit, maiores laudantium sit doloremque laborum, placeat delectus vel minima molestiae officia labore nesciunt voluptatum corporis nemo maxime autem! Excepturi dolores maiores nesciunt sequi, assumenda error dolorum numquam quasi asperiores, nam, deleniti quam! Atque provident magnam iste veniam at expedita molestiae cupiditate culpa eum aut deserunt ea facilis et ipsum dolore commodi mollitia enim a distinctio libero, exercitationem tempora beatae architecto vel. Vitae accusamus amet quis tempora aliquam soluta consequatur delectus odit, reprehenderit sint eius officia explicabo nulla eveniet ad porro corporis totam omnis corrupti at. Voluptatem vel necessitatibus ex esse quidem velit eos! Architecto quibusdam consequatur quia dicta id voluptate, reprehenderit voluptates similique libero voluptatum velit beatae dolore, iusto nobis non aliquam modi nemo perspiciatis, dolores adipisci sunt? Doloribus ut reprehenderit obcaecati, sunt dignissimos fugit consectetur explicabo amet et, veritatis ea error fugiat possimus non minus nesciunt libero, optio repudiandae numquam quos odit temporibus. Atque impedit quae ducimus iusto?",
    "Featured": false,
    "published_at": "2021-08-07T18:39:24.605Z",
    "created_at": "2021-08-07T18:39:02.038Z",
    "updated_at": "2021-08-07T18:39:24.646Z",
    "Images": "https://res.cloudinary.com/kanik/image/upload/v1626675500/Bawana/MIR921-1_700x_dvza82.webp"
  },
  {
    "id": 2,
    "Title": "Apple X",
    "Price": 25000,
    "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum sapiente necessitatibus esse aperiam vero ducimus cumque libero adipisci culpa, molestiae nostrum et illum, blanditiis beatae praesentium architecto qui fuga sequi tempora ad! Quis vel a voluptatum harum veritatis fugit enim provident rem, assumenda, voluptatem incidunt quos aliquam temporibus necessitatibus nihil facere quo quia illum voluptate debitis corporis dolor distinctio et. Expedita ullam assumenda eligendi, harum nam quisquam odit, eaque fuga architecto consequatur fugit iste aperiam? Nesciunt perferendis impedit provident iste, ratione quas reiciendis veritatis ad omnis natus vitae quae, odit nulla laborum, voluptatum itaque placeat numquam totam consequatur quasi eum animi reprehenderit. Culpa voluptatem aliquam nisi perferendis magnam quia error reiciendis, unde ducimus dolore. Asperiores culpa eum ipsa alias velit sed sint officia odio earum amet? Nesciunt fugit sint, iure quod ab magnam quis hic id aliquam minima porro cupiditate debitis voluptatibus ipsa suscipit facere. Doloremque voluptas fugit enim odit quos nisi a dolores veniam deleniti illum aspernatur tempora, eaque, modi vero eius ratione velit, officia sed adipisci ut magnam aliquam? Porro quod harum odit illo dignissimos sunt nisi enim voluptate! Necessitatibus voluptatum ad cupiditate autem sunt mollitia ea dignissimos temporibus voluptatibus. Odio inventore incidunt labore vel deleniti ducimus a culpa cupiditate aut reprehenderit voluptas laborum, laboriosam quam neque laudantium deserunt sapiente sit ex optio saepe? Similique non voluptatem ab debitis labore eveniet sunt iste dicta nostrum reiciendis inventore quos, sequi officiis excepturi voluptates molestiae beatae dignissimos reprehenderit! Minima dolor consequuntur quos incidunt reprehenderit necessitatibus, ea perferendis optio repellendus. Tempora consectetur veniam quos similique cumque velit esse. Minima reiciendis at nisi cum numquam nam obcaecati laborum fugit accusantium illo accusamus, iusto assumenda nihil dicta aperiam veritatis, corrupti vitae explicabo quis commodi. Ducimus ut voluptas dolores est tenetur voluptatum similique laboriosam sapiente illo reiciendis error earum repudiandae repellat tempora, laudantium quasi animi dolorum vero perspiciatis delectus vel labore accusantium placeat? Voluptates minus officia architecto accusantium doloribus aut eaque quidem laudantium deleniti. Aperiam suscipit nesciunt ipsa, ratione ea aspernatur, doloremque officia quae deleniti, corporis molestias voluptate asperiores! Esse ducimus atque non odit libero deleniti reprehenderit consequatur aliquid ipsa. Ipsum, aperiam iste fugit, maiores laudantium sit doloremque laborum, placeat delectus vel minima molestiae officia labore nesciunt voluptatum corporis nemo maxime autem! Excepturi dolores maiores nesciunt sequi, assumenda error dolorum numquam quasi asperiores, nam, deleniti quam! Atque provident magnam iste veniam at expedita molestiae cupiditate culpa eum aut deserunt ea facilis et ipsum dolore commodi mollitia enim a distinctio libero, exercitationem tempora beatae architecto vel. Vitae accusamus amet quis tempora aliquam soluta consequatur delectus odit, reprehenderit sint eius officia explicabo nulla eveniet ad porro corporis totam omnis corrupti at. Voluptatem vel necessitatibus ex esse quidem velit eos! Architecto quibusdam consequatur quia dicta id voluptate, reprehenderit voluptates similique libero voluptatum velit beatae dolore, iusto nobis non aliquam modi nemo perspiciatis, dolores adipisci sunt? Doloribus ut reprehenderit obcaecati, sunt dignissimos fugit consectetur explicabo amet et, veritatis ea error fugiat possimus non minus nesciunt libero, optio repudiandae numquam quos odit temporibus. Atque impedit quae ducimus iusto?",
    "Featured": false,
    "published_at": "2021-08-07T18:39:58.389Z",
    "created_at": "2021-08-07T18:39:55.645Z",
    "updated_at": "2021-08-07T18:39:58.412Z",
    "Images": "https://res.cloudinary.com/kanik/image/upload/v1626675500/Bawana/MIR921-1_700x_dvza82.webp"
  },
  {
    "id": 3,
    "Title": "Oppo V23",
    "Price": 21000,
    "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum sapiente necessitatibus esse aperiam vero ducimus cumque libero adipisci culpa, molestiae nostrum et illum, blanditiis beatae praesentium architecto qui fuga sequi tempora ad! Quis vel a voluptatum harum veritatis fugit enim provident rem, assumenda, voluptatem incidunt quos aliquam temporibus necessitatibus nihil facere quo quia illum voluptate debitis corporis dolor distinctio et. Expedita ullam assumenda eligendi, harum nam quisquam odit, eaque fuga architecto consequatur fugit iste aperiam? Nesciunt perferendis impedit provident iste, ratione quas reiciendis veritatis ad omnis natus vitae quae, odit nulla laborum, voluptatum itaque placeat numquam totam consequatur quasi eum animi reprehenderit. Culpa voluptatem aliquam nisi perferendis magnam quia error reiciendis, unde ducimus dolore. Asperiores culpa eum ipsa alias velit sed sint officia odio earum amet? Nesciunt fugit sint, iure quod ab magnam quis hic id aliquam minima porro cupiditate debitis voluptatibus ipsa suscipit facere. Doloremque voluptas fugit enim odit quos nisi a dolores veniam deleniti illum aspernatur tempora, eaque, modi vero eius ratione velit, officia sed adipisci ut magnam aliquam? Porro quod harum odit illo dignissimos sunt nisi enim voluptate! Necessitatibus voluptatum ad cupiditate autem sunt mollitia ea dignissimos temporibus voluptatibus. Odio inventore incidunt labore vel deleniti ducimus a culpa cupiditate aut reprehenderit voluptas laborum, laboriosam quam neque laudantium deserunt sapiente sit ex optio saepe? Similique non voluptatem ab debitis labore eveniet sunt iste dicta nostrum reiciendis inventore quos, sequi officiis excepturi voluptates molestiae beatae dignissimos reprehenderit! Minima dolor consequuntur quos incidunt reprehenderit necessitatibus, ea perferendis optio repellendus. Tempora consectetur veniam quos similique cumque velit esse. Minima reiciendis at nisi cum numquam nam obcaecati laborum fugit accusantium illo accusamus, iusto assumenda nihil dicta aperiam veritatis, corrupti vitae explicabo quis commodi. Ducimus ut voluptas dolores est tenetur voluptatum similique laboriosam sapiente illo reiciendis error earum repudiandae repellat tempora, laudantium quasi animi dolorum vero perspiciatis delectus vel labore accusantium placeat? Voluptates minus officia architecto accusantium doloribus aut eaque quidem laudantium deleniti. Aperiam suscipit nesciunt ipsa, ratione ea aspernatur, doloremque officia quae deleniti, corporis molestias voluptate asperiores! Esse ducimus atque non odit libero deleniti reprehenderit consequatur aliquid ipsa. Ipsum, aperiam iste fugit, maiores laudantium sit doloremque laborum, placeat delectus vel minima molestiae officia labore nesciunt voluptatum corporis nemo maxime autem! Excepturi dolores maiores nesciunt sequi, assumenda error dolorum numquam quasi asperiores, nam, deleniti quam! Atque provident magnam iste veniam at expedita molestiae cupiditate culpa eum aut deserunt ea facilis et ipsum dolore commodi mollitia enim a distinctio libero, exercitationem tempora beatae architecto vel. Vitae accusamus amet quis tempora aliquam soluta consequatur delectus odit, reprehenderit sint eius officia explicabo nulla eveniet ad porro corporis totam omnis corrupti at. Voluptatem vel necessitatibus ex esse quidem velit eos! Architecto quibusdam consequatur quia dicta id voluptate, reprehenderit voluptates similique libero voluptatum velit beatae dolore, iusto nobis non aliquam modi nemo perspiciatis, dolores adipisci sunt? Doloribus ut reprehenderit obcaecati, sunt dignissimos fugit consectetur explicabo amet et, veritatis ea error fugiat possimus non minus nesciunt libero, optio repudiandae numquam quos odit temporibus. Atque impedit quae ducimus iusto?",
    "Featured": false,
    "published_at": "2021-08-07T18:40:22.720Z",
    "created_at": "2021-08-07T18:40:20.347Z",
    "updated_at": "2021-08-07T18:40:22.744Z",
    "Images": "https://res.cloudinary.com/kanik/image/upload/v1626675500/Bawana/MIR921-1_700x_dvza82.webp"
  },
  {
    "id": 4,
    "Title": "Vivo 23",
    "Price": 20000,
    "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum sapiente necessitatibus esse aperiam vero ducimus cumque libero adipisci culpa, molestiae nostrum et illum, blanditiis beatae praesentium architecto qui fuga sequi tempora ad! Quis vel a voluptatum harum veritatis fugit enim provident rem, assumenda, voluptatem incidunt quos aliquam temporibus necessitatibus nihil facere quo quia illum voluptate debitis corporis dolor distinctio et. Expedita ullam assumenda eligendi, harum nam quisquam odit, eaque fuga architecto consequatur fugit iste aperiam? Nesciunt perferendis impedit provident iste, ratione quas reiciendis veritatis ad omnis natus vitae quae, odit nulla laborum, voluptatum itaque placeat numquam totam consequatur quasi eum animi reprehenderit. Culpa voluptatem aliquam nisi perferendis magnam quia error reiciendis, unde ducimus dolore. Asperiores culpa eum ipsa alias velit sed sint officia odio earum amet? Nesciunt fugit sint, iure quod ab magnam quis hic id aliquam minima porro cupiditate debitis voluptatibus ipsa suscipit facere. Doloremque voluptas fugit enim odit quos nisi a dolores veniam deleniti illum aspernatur tempora, eaque, modi vero eius ratione velit, officia sed adipisci ut magnam aliquam? Porro quod harum odit illo dignissimos sunt nisi enim voluptate! Necessitatibus voluptatum ad cupiditate autem sunt mollitia ea dignissimos temporibus voluptatibus. Odio inventore incidunt labore vel deleniti ducimus a culpa cupiditate aut reprehenderit voluptas laborum, laboriosam quam neque laudantium deserunt sapiente sit ex optio saepe? Similique non voluptatem ab debitis labore eveniet sunt iste dicta nostrum reiciendis inventore quos, sequi officiis excepturi voluptates molestiae beatae dignissimos reprehenderit! Minima dolor consequuntur quos incidunt reprehenderit necessitatibus, ea perferendis optio repellendus. Tempora consectetur veniam quos similique cumque velit esse. Minima reiciendis at nisi cum numquam nam obcaecati laborum fugit accusantium illo accusamus, iusto assumenda nihil dicta aperiam veritatis, corrupti vitae explicabo quis commodi. Ducimus ut voluptas dolores est tenetur voluptatum similique laboriosam sapiente illo reiciendis error earum repudiandae repellat tempora, laudantium quasi animi dolorum vero perspiciatis delectus vel labore accusantium placeat? Voluptates minus officia architecto accusantium doloribus aut eaque quidem laudantium deleniti. Aperiam suscipit nesciunt ipsa, ratione ea aspernatur, doloremque officia quae deleniti, corporis molestias voluptate asperiores! Esse ducimus atque non odit libero deleniti reprehenderit consequatur aliquid ipsa. Ipsum, aperiam iste fugit, maiores laudantium sit doloremque laborum, placeat delectus vel minima molestiae officia labore nesciunt voluptatum corporis nemo maxime autem! Excepturi dolores maiores nesciunt sequi, assumenda error dolorum numquam quasi asperiores, nam, deleniti quam! Atque provident magnam iste veniam at expedita molestiae cupiditate culpa eum aut deserunt ea facilis et ipsum dolore commodi mollitia enim a distinctio libero, exercitationem tempora beatae architecto vel. Vitae accusamus amet quis tempora aliquam soluta consequatur delectus odit, reprehenderit sint eius officia explicabo nulla eveniet ad porro corporis totam omnis corrupti at. Voluptatem vel necessitatibus ex esse quidem velit eos! Architecto quibusdam consequatur quia dicta id voluptate, reprehenderit voluptates similique libero voluptatum velit beatae dolore, iusto nobis non aliquam modi nemo perspiciatis, dolores adipisci sunt? Doloribus ut reprehenderit obcaecati, sunt dignissimos fugit consectetur explicabo amet et, veritatis ea error fugiat possimus non minus nesciunt libero, optio repudiandae numquam quos odit temporibus. Atque impedit quae ducimus iusto?",
    "Featured": false,
    "published_at": "2021-08-07T18:40:55.754Z",
    "created_at": "2021-08-07T18:40:53.436Z",
    "updated_at": "2021-08-07T18:40:55.787Z",
    "Images": "https://res.cloudinary.com/kanik/image/upload/v1626675500/Bawana/MIR921-1_700x_dvza82.webp"
  },
  {
    "id": 5,
    "Title": "Mi Smart",
    "Price": 18000,
    "Description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum sapiente necessitatibus esse aperiam vero ducimus cumque libero adipisci culpa, molestiae nostrum et illum, blanditiis beatae praesentium architecto qui fuga sequi tempora ad! Quis vel a voluptatum harum veritatis fugit enim provident rem, assumenda, voluptatem incidunt quos aliquam temporibus necessitatibus nihil facere quo quia illum voluptate debitis corporis dolor distinctio et. Expedita ullam assumenda eligendi, harum nam quisquam odit, eaque fuga architecto consequatur fugit iste aperiam? Nesciunt perferendis impedit provident iste, ratione quas reiciendis veritatis ad omnis natus vitae quae, odit nulla laborum, voluptatum itaque placeat numquam totam consequatur quasi eum animi reprehenderit. Culpa voluptatem aliquam nisi perferendis magnam quia error reiciendis, unde ducimus dolore. Asperiores culpa eum ipsa alias velit sed sint officia odio earum amet? Nesciunt fugit sint, iure quod ab magnam quis hic id aliquam minima porro cupiditate debitis voluptatibus ipsa suscipit facere. Doloremque voluptas fugit enim odit quos nisi a dolores veniam deleniti illum aspernatur tempora, eaque, modi vero eius ratione velit, officia sed adipisci ut magnam aliquam? Porro quod harum odit illo dignissimos sunt nisi enim voluptate! Necessitatibus voluptatum ad cupiditate autem sunt mollitia ea dignissimos temporibus voluptatibus. Odio inventore incidunt labore vel deleniti ducimus a culpa cupiditate aut reprehenderit voluptas laborum, laboriosam quam neque laudantium deserunt sapiente sit ex optio saepe? Similique non voluptatem ab debitis labore eveniet sunt iste dicta nostrum reiciendis inventore quos, sequi officiis excepturi voluptates molestiae beatae dignissimos reprehenderit! Minima dolor consequuntur quos incidunt reprehenderit necessitatibus, ea perferendis optio repellendus. Tempora consectetur veniam quos similique cumque velit esse. Minima reiciendis at nisi cum numquam nam obcaecati laborum fugit accusantium illo accusamus, iusto assumenda nihil dicta aperiam veritatis, corrupti vitae explicabo quis commodi. Ducimus ut voluptas dolores est tenetur voluptatum similique laboriosam sapiente illo reiciendis error earum repudiandae repellat tempora, laudantium quasi animi dolorum vero perspiciatis delectus vel labore accusantium placeat? Voluptates minus officia architecto accusantium doloribus aut eaque quidem laudantium deleniti. Aperiam suscipit nesciunt ipsa, ratione ea aspernatur, doloremque officia quae deleniti, corporis molestias voluptate asperiores! Esse ducimus atque non odit libero deleniti reprehenderit consequatur aliquid ipsa. Ipsum, aperiam iste fugit, maiores laudantium sit doloremque laborum, placeat delectus vel minima molestiae officia labore nesciunt voluptatum corporis nemo maxime autem! Excepturi dolores maiores nesciunt sequi, assumenda error dolorum numquam quasi asperiores, nam, deleniti quam! Atque provident magnam iste veniam at expedita molestiae cupiditate culpa eum aut deserunt ea facilis et ipsum dolore commodi mollitia enim a distinctio libero, exercitationem tempora beatae architecto vel. Vitae accusamus amet quis tempora aliquam soluta consequatur delectus odit, reprehenderit sint eius officia explicabo nulla eveniet ad porro corporis totam omnis corrupti at. Voluptatem vel necessitatibus ex esse quidem velit eos! Architecto quibusdam consequatur quia dicta id voluptate, reprehenderit voluptates similique libero voluptatum velit beatae dolore, iusto nobis non aliquam modi nemo perspiciatis, dolores adipisci sunt? Doloribus ut reprehenderit obcaecati, sunt dignissimos fugit consectetur explicabo amet et, veritatis ea error fugiat possimus non minus nesciunt libero, optio repudiandae numquam quos odit temporibus. Atque impedit quae ducimus iusto?",
    "Featured": false,
    "published_at": "2021-08-07T18:41:42.330Z",
    "created_at": "2021-08-07T18:41:36.745Z",
    "updated_at": "2021-08-07T18:41:42.360Z",
    "Images": "https://res.cloudinary.com/kanik/image/upload/v1626675500/Bawana/MIR921-1_700x_dvza82.webp"
  }
]
