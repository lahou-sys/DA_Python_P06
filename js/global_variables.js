
const OCMovies_API_URL = "http://localhost:8000/api/v1/titles/";

// Get all element in index.html
const best_movie = document.getElementById('best_movie');
const best_rating = document.getElementById('best_rating');
const category_1 = document.getElementById('category_1');
const category_2 = document.getElementById('category_2');
const category_3 = document.getElementById('category_3');


/*********************/
/*  Film categories  */
/*********************/
// Defined all categories filter
let categories_filter = [
    ["sort_by=-imdb_score"],
    ['genre=Action', "sort_by=-imdb_score"],
    ['genre=Adventure', "sort_by=-imdb_score"],
    ['genre=Comedy', "sort_by=-imdb_score"],
];
// Defined the index of the categories filter by category
let best_movie_categories_filter = 0;
let best_rating_categories_filter =0;
let category_1_categories_filter = 1;
let category_2_categories_filter = 2;
let category_3_categories_filter = 3;

/*********************************/
/*  Number of films by category  */
/*********************************/
let numberOfFilmByCategory = 7;

/*****************/
/*  Best rating  */
/*****************/
// best rating id list
let best_rating_id_list = ['left_arrow_best_rating'];
for (let i=1; i<=numberOfFilmByCategory; i++) {
    best_rating_id_list.push('best_rating_image_' + i);
}
best_rating_id_list.push('right_arrow_best_rating');
// best rating labels
let best_rating_labels = ['best_rating_image_', 'Best Rating n°'];


/****************/
/*  category_1  */
/****************/
// category_1 id list
let category_1_id_list = ['left_arrow_category_1'];
for (let i=0; i<numberOfFilmByCategory; i++) {
    category_1_id_list.push('category_1_image_' + i);
}
category_1_id_list.push('right_arrow_category_1');
// category_1 labels
let category_1_labels = ['category_1_image_', 'Action n°'];


/****************/
/*  category_2  */
/****************/
// category_2 id list
let category_2_id_list = ['left_arrow_category_2'];
for (let i=0; i<numberOfFilmByCategory; i++) {
    category_2_id_list.push('category_2_image_' + i);
}
category_2_id_list.push('right_arrow_category_2');
// category_2 labels
let category_2_labels = ['category_2_image_', 'Adventure n°'];


/****************/
/*  category_3  */
/****************/
// category_3 id list
let category_3_id_list = ['left_arrow_category_3'];
for (let i=0; i<numberOfFilmByCategory; i++) {
    category_3_id_list.push('category_3_image_' + i);
}
category_3_id_list.push('right_arrow_category_3');
// category_3 labels
let category_3_labels = ['category_3_image_', 'Comedy n°'];


/***********/
/*  Other  */
/***********/
// month_name
let month_name = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novenbre',
    'Décembre',
]

// Global variable to avoid multi click on arrow before page refresh
let multi_click_block = false;
