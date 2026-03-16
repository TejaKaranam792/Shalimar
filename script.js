// script.js

const menuData = {
    "starters": [
        {
            subcategory: "Veg Starters",
            items: [
                { name: "Baby Corn 65", desc: "Crispy And Flavorful, This Vegetarian Delight Is A Perfect Way To Kickstart Your ...", image: "assets/starters/baby-corn-65.jpeg" },
                { name: "Baby Corn Manchurian", desc: "Deliciously Battered And Crispy Babycorn Waiting To Tantalize Your Taste Buds With Every ...", image: "assets/starters/baby-corn-manchurian.jpg" },
                { name: "Baby Corn Chilli", desc: "", image: "assets/starters/baby-corn-chilli.jpg" },
                { name: "Chilli Mushroom", desc: "A Flavorful And Delectable Mushroom Dish That Will Tantalize Your Taste Buds With ...", image: "assets/starters/chilli mushroom.webp" },
                { name: "Mushroom 65", desc: "Crispy And Flavorful, This Delectable Veggie Starter Will Have You Savoring Every Bite.", image: "assets/starters/mushroom 65.jpg" },
                { name: "Mushroom Manchurian", desc: "Deliciously Crispy And Flavorful, This Veggie Starter Bursts With The Richness Of Mushrooms ...", image: "assets/starters/mushroom-manchurian.jpg" },
                { name: "Paneer 65", desc: "A Delectable Vegetarian Starter That Will Captivate Your Taste Buds With Its Tantalizing ...", image: "assets/starters/paneer 65.jpg" },
                { name: "Paneer Chilli", desc: "", image: "assets/starters/chilli-paneer.jpg" },
                { name: "Paneer Manchurian", desc: "An Indulgent And Mouthwatering Vegetarian Delight, Perfect For Starting Off A Delectable Meal.", image: "assets/starters/paneer manchurian.jpg" },
                { name: "Veg Manchurian", desc: "Delight In The Savory And Flavorful Delight Of This Tantalizing And Aromatic Starter.", image: "assets/starters/Veg Manchurian.jpg" }
            ]
        },
        {
            subcategory: "Non-veg Starters",
            items: [
                { name: "Cashewnut Chicken", desc: "A Flavorful And Tender Chicken Dish With A Delightful Crunch Of Cashew Nuts.", image: "assets/starters/Cashewnut chicken.jpg" },
                { name: "Chicken 65", desc: "A Flavorful And Indulgent Non-Vegetarian Starter That Tantalizes Taste Buds With Its Unique ...", image: "assets/starters/chicken-65.jpg" },
                { name: "Chicken Drumstick", desc: "Tender And Succulent, This Flavorful Chicken Drumstick Is A Delightful Start To Any ...", image: "assets/starters/chicken-drumsticks.webp" },
                { name: "Chicken Fried Wings", desc: "", image: "assets/starters/Fried-Chicken-Wing.jpg" },
                { name: "Chicken Joint Roast", desc: "1 Big Size Joint", image: "assets/starters/chicken joint roast.jpg" },
                { name: "Chicken Lollipop", desc: "Juicy chicken lollipops with a twist - the perfect start to any meal.", image: "assets/starters/chicken lollipop.jpg" },
                { name: "Chicken Manchurian", desc: "A Delectable And Flavorful Non-Vegetarian Starter That's Sure To Tantalize Your Taste Buds.", image: "assets/starters/Chicken-Manchurian.webp" },
                { name: "Chicken Wings", desc: "", image: "assets/starters/chicken-wings.jpg" },
                { name: "Chilli Chicken", desc: "A flavorful and irresistible chicken dish that will leave your taste buds craving ...", image: "assets/starters/Chilli_chicken.webp" },
                { name: "Chilli Wings", desc: "Juicy Chicken Wings With A Zesty And Flavorful Kick.", image: "assets/starters/Chili Wings.jpg" },
                { name: "Egg 65", desc: "", image: "assets/starters/Egg-65.jpeg" },
                { name: "Egg Chilli", desc: "A Delightful Egg Dish That Packs A Flavorful Punch, Perfect To Kickstart Your ...", image: "assets/starters/egg chilli.jpg" },
                { name: "Egg Manchurian", desc: "Delicately Prepared Eggs With A Fusion Of Flavors, Perfect To Kickstart Your Meal.", image: "assets/starters/Egg Manchurian.jpg" },
                { name: "Garlic Chicken", desc: "", image: "assets/starters/garlic chicken.jpg" },
                { name: "Ginger Chicken", desc: "Flavorful And Aromatic Chicken Infused With The Warm Essence Of Ginger, Perfect To ...", image: "assets/starters/Ginger-Chicken.jpg" },
                { name: "Chicken Liver Fry", desc: "", image: "assets/starters/chicken liver fry.jpg" },
                { name: "Pepper Chicken", desc: "Tender And Flavorful, This Appetizing Chicken Dish Is Seasoned To Perfection With A ...", image: "assets/starters/Pepper-Chicken.jpg" },
                { name: "Schezwan Chicken", desc: "", image: "assets/starters/Szechuan-Chicken.jpg" }
            ]
        },
        {
            subcategory: "Tandoori Starters",
            items: [
                { name: "Al Faham", desc: "Lemon Flavoured with Arabic Touch", image: "assets/starters/al faham.jpg" },
                { name: "Alishan Chicken Tikka", desc: "Chicken Boneless Pieces 8", image: "assets/starters/alishan chicken tikka.jpg" },
                { name: "Banjara Chicken", desc: "Boneless Pieces 8", image: "assets/starters/banjara chicken.jpg" },
                { name: "Chicken Coriander Kabab", desc: "", image: "assets/starters/chciekn oriander kabab.jpg" },
                { name: "Chicken Hariyali Kebab", desc: "8 Pieces", image: "assets/starters/Hariyali-Chicken-Kabab.jpg" },
                { name: "Chicken Kalmi Kebab", desc: "", image: "assets/starters/chicken kalmi_kebab.jpg" },
                { name: "Chicken Malai Kebab", desc: "8 Pieces", image: "assets/starters/Chicken-Malai-kabab.jpg" },
                { name: "Chicken Reshmi Kebab", desc: "8 Pieces", image: "assets/starters/chicken reshmi kebab.jpg" },
                { name: "Chicken Tangdi Kebab", desc: "", image: "assets/starters/chicken tangdi kabab.jpg" },
                { name: "Chicken Tikka", desc: "", image: "assets/starters/chicken tikka.jpg" },
                { name: "Zafrani Kabab", desc: "8 Pieces", image: "assets/starters/zafrani kabab.jpg" },
                { name: "Full Bird Tandoori Chicken", desc: "", image: "assets/starters/tandoori chicekn.webp" },
                { name: "Garlic Panchi", desc: "Chicken Boneless Pieces 8", image: "assets/starters/Garlic Panchi.jpg" },
                { name: "Pandu Mirchi Kebab", desc: "Chicken Boneless Pieces 8", image: "assets/starters/pandu irchi kabab.jpg" },
                { name: "Paneer Tikka", desc: "", image: "assets/starters/paneer tikka.jpg" },
                { name: "Tandoori Chicken", desc: "", image: "assets/starters/tandoori chicekn.webp" }
            ]
        },
        {
            subcategory: "Sea Food Starters",
            items: [
                { name: "Apollo Fish", desc: "A Tantalizing Starter Bursting With Bold Flavors And A Delightful Blend Of Textures.", image: "assets/starters/appolo fish.jpg" },
                { name: "Chilli Fish", desc: "A Tantalizing And Flavorful Seafood Appetizer That Will Leave Your Taste Buds Craving ...", image: "assets/starters/chilli-fish.webp" },
                { name: "Chilli Prawns", desc: "Delicious Prawns Coated In A Zesty, Flavorful Glaze, Perfect For Starting Off Any ...", image: "assets/starters/chilli prawns.webp" },
                { name: "Fish 65", desc: "Crispy And Flavorful, This Seafood Delight Is A Perfect Way To Kickstart Your ...", image: "assets/starters/Fish 65.jpg" },
                { name: "Roasted Fish Fry", desc: "Crispy, Golden Fish Fry With A Flavorful Roast That Will Leave You Craving ...", image: "assets/starters/roasted fry.jpg" },
                { name: "Fish Manchurian", desc: "A Succulent And Flavorful Seafood Delight That Will Tantalize Your Taste Buds.", image: "assets/starters/Fish-Manchurian.webp" },
                { name: "Golden Prawns Fry", desc: "Crispy, Succulent Prawns Fried To A Golden Perfection, A Tempting Start To Your ...", image: "assets/starters/Golden-Fried-Prawns.jpg" },
                { name: "Honey Garlic Prawns", desc: "Tender prawns tossed in a butter, garlic, glazed with honey for a sticky, ...", image: "assets/starters/Baked garlic Prawns.webp" },
                { name: "Loose Prawns", desc: "Succulent Prawns Bursting With Flavor, A Perfect Way To Start Your Meal.", image: "assets/starters/loose prawns.webp" },
                { name: "Prawns 65", desc: "A Delectable And Savory Starter Featuring Juicy Prawns, Bursting With Flavors That Will ...", image: "assets/starters/prawns 65.webp" },
                { name: "Prawns Manchurian", desc: "Deliciously Seasoned And Succulent, This Non-Veg Starter Tantalizes Taste Buds With Its Irresistible ...", image: "assets/starters/prawn manchurian.jpeg" }
            ]
        }
    ],

    "regular": [
        {
            subcategory: "Veg Curry's",
            items: [
                { name: "Baby Corn Curry", desc: "A Delectable And Flavorful Main Course Highlighting Tender Baby Corn In A Rich ...", image: "assets/main course/baby corn.jpg" },
                { name: "Baby Corn Masala", desc: "A Flavorful And Satisfying Vegetarian Main Course With Tender Babycorn In A Delectable ...", image: "assets/main course/baby-corn-masala.jpg" },
                { name: "Green Peas Masala", desc: "", image: "assets/main course/green peas masala.jpg" },
                { name: "Kadai Baby Corn", desc: "A Delectable And Flavorful Veggie Delight, Bursting With Succulent Baby Corn And An ...", image: "assets/main course/kadai baby corn.jpg" },
                { name: "Kadai Mushroom", desc: "A Delectable Vegetarian Delight Bursting With Flavors, Perfect For A Satisfying Main Course.", image: "assets/main course/kadai-mushroom-.webp" },
                { name: "Kadai Paneer", desc: "A Flavorful And Aromatic North Indian Delicacy Featuring Tender Paneer Cooked To Perfection ...", image: "assets/main course/kadai-paneer.jpg" },
                { name: "Kadai Veg", desc: "A Flavorful And Aromatic Medley Of Vegetables Cooked To Perfection In A Rich ...", image: "assets/main course/kadai veg.jpg" },
                { name: "Kaju Baby Corn", desc: "A Delightful And Flavorsome Vegetarian Main Course Featuring Tender Baby Corn And Cashews.", image: "assets/main course/kaju baby corn.jpg" },
                { name: "Kaju Curry", desc: "A Delightful Vegetarian Main Course That Tantalizes The Taste Buds With Its Rich, ...", image: "assets/main course/kaju curry.webp" },
                { name: "Kaju Masala", desc: "A Flavorful And Savory Vegetarian Dish That Is Perfect For A Satisfying And ...", image: "assets/main course/kaju masala.webp" },
                { name: "Kaju Mushroom", desc: "A Delightful And Savory Main Course Featuring Tender Mushrooms And Cashews In A ...", image: "assets/main course/kaju mushroom.jpg" },
                { name: "Kaju Paneer", desc: "A Delectable Vegetarian Main Course Featuring Cashews And Paneer, Bursting With Flavors That ...", image: "assets/main course/kaju panerr.jpg" },
                { name: "Mix Veg Curry", desc: "A Delightful Medley Of Fresh Vegetables Cooked In A Flavorful Curry Sauce, Perfect ...", image: "assets/main course/mix veg.jpg" },
                { name: "Mushroom Curry", desc: "A Flavorful And Aromatic Mushroom Curry That Is Perfect For A Satisfying Vegetarian ...", image: "assets/main course/mushroom curry.jpg" },
                { name: "Mushroom Paneer Curry", desc: "A Delectable And Creamy Curry Made With Succulent Paneer And Earthy Mushrooms, Perfect ...", image: "assets/main course/mushroom paneer.jpg" },
                { name: "Paneer Butter Masala", desc: "A Rich And Creamy Vegetarian Delicacy That Combines The Smoothness Of Paneer With ...", image: "assets/main course/puneer butter masala.jpg" },
                { name: "Paneer Masala", desc: "A Flavorful And Aromatic Vegetarian Delight That Is Perfect For A Satisfying Main ...", image: "assets/main course/Paneer masala.jpg" },
                { name: "Paneer Methi Chaman", desc: "A Delectable And Aromatic Combination Of Tender Paneer And Fresh Fenugreek Leaves, Perfect ...", image: "assets/main course/puneer methi chaman.jpg" },
                { name: "Tomato Kaju", desc: "A Delectable Vegetarian Main Course Bursting With Rich Flavors Of Tomatoes And Cashews.", image: "assets/main course/tomato kaju.jpg" }
            ]
        },
        {
            subcategory: "Non Veg Curry's",
            items: [
                { name: "Andhra Chicken Curry", desc: "", image: "assets/main course/Andhra-Chicken.jpg" },
                { name: "Butter Chicken", desc: "", image: "assets/main course/Butter-Chicken.jpg" },
                { name: "Chicken Curry", desc: "A Flavorful And Aromatic Main Course Dish That Will Tantalize Your Taste Buds ...", image: "assets/main course/Chicken-Curry.jpg" },
                { name: "Chicken Boneless Curry", desc: "Savor The Rich Flavors Of Tender Boneless Chicken In A Delectable Curry Sauce, ...", image: "assets/main course/Boneless-Chicken-Curry.jpg" },
                { name: "Chicken Chettinad", desc: "A Flavorful And Aromatic Non-Vegetarian Main Course That Will Tantalize Your Taste Buds.", image: "assets/main course/chicken chettinad.jpg" },
                { name: "Chicken Methi Chaman", desc: "A Delectable Combination Of Tender Chicken And Fragrant Methi Chaman, Served As A ...", image: "assets/main course/chicken methi-chaman1.jpg" },
                { name: "Chicken Mughlai Curry", desc: "A Rich And Flavorful Chicken Curry From The Mughlai Cuisine, Perfect For A ...", image: "assets/main course/mughlai chicken curry.jpg" },
                { name: "Chicken Roghani", desc: "A Flavorful And Succulent Chicken Dish That Will Transport Your Taste Buds To ...", image: "assets/main course/chicken roghani.jpg" },
                { name: "Egg Bhurji", desc: "A Flavorful And Satisfying Main Course Featuring Eggs Prepared In A Delectable, Aromatic ...", image: "assets/main course/Egg-Bhurji - Copy.webp" },
                { name: "Egg Curry", desc: "A Delectable Main Course Featuring Tender Eggs In A Flavorful Curry Sauce.", image: "assets/main course/Egg-Curry.jpg" },
                { name: "Egg Masala", desc: "A Flavorful And Satisfying Main Course Featuring Tender Eggs Cooked In A Rich ...", image: "assets/main course/egg masala.jpg" },
                { name: "Fish Curry", desc: "A Scrumptious And Flavorful Fish Curry That Is Perfect For A Satisfying And ...", image: "assets/main course/fish-curry.jpg" },
                { name: "Kadai Chicken", desc: "", image: "assets/main course/Kadai-Chicken.png" },
                { name: "Kaju Chicken", desc: "A Flavorful And Aromatic Chicken Curry With The Perfect Balance Of Tender Meat ...", image: "assets/main course/kaju chicken.jpg" },
                { name: "Liver Curry", desc: "A Delectable And Savory Main Course Featuring Tender Chicken Liver In A Rich ...", image: "assets/main course/liver curry.jpg" },
                { name: "Mutton Curry", desc: "A Flavorful And Hearty Non-Veg Main Course That Will Satisfy Your Taste Buds ...", image: "assets/main course/mutton curry.webp" },
                { name: "Mutton Masala", desc: "A Savory And Flavorful Main Course That Will Delight Meat Lovers With Its ...", image: "assets/main course/mutton masaal.jpg" },
                { name: "Mutton Roghan Josh", desc: "A Rich And Aromatic Indian Delicacy Featuring Tender Mutton Cooked To Perfection In ...", image: "assets/main course/mutton ragan josh.webp" },
                { name: "Prawns Curry", desc: "A Delectable And Flavorful Curry Featuring Succulent Prawns In A Rich, Aromatic Sauce.", image: "assets/main course/prawns curry.jpg" },
                { name: "Punjabi Chicken", desc: "", image: "assets/main course/Punjabi-Chicken.jpg" }
            ]
        }
    ],

    "biryani": [
        {
            subcategory: "Veg Biryani's",
            items: [
                { name: "Kaju Biryani", desc: "Serves 1. A fragrant and flavorful biryani made with aromatic basmati rice and crunchy cashews.", image: "assets/biryani/kaju biryani.jpg" },
                { name: "Mixed Veg Biryani", desc: "Serves 1. A flavorful blend of aromatic rice and assorted vegetables, a delightful treat for ...", image: "assets/biryani/mixed veg biryani.webp" },
                { name: "Mushroom Biryani", desc: "Serves 1. A flavorful and aromatic biryani featuring tender mushrooms cooked with fragrant basmati rice ...", image: "assets/biryani/mushroom biryani.jpg" },
                { name: "Paneer Biryani", desc: "Serves 1. A flavorful and aromatic biryani featuring succulent paneer cubes layered with fragrant basmati ...", image: "assets/biryani/panner biryani.jpg" },
                { name: "Special Veg Biryani", desc: "Serves 1. Mixed veg biryani with mixed veg curry.", image: "assets/biryani/special veg biryani.jpg" },
                { name: "Veg Biryani With Paneer Butter Masala", desc: "Serves 1. A flavorful combination of fragrant veg biryani served with creamy paneer curry.", image: "assets/biryani/Veg Biryani With Paneer Butter Masala.jpg" }
            ]
        },
        {
            subcategory: "Non Veg Biryani's",
            items: [
                { name: "Chicken Boneless Biryani", desc: "Serves 1. Tender Chicken Cooked In Fragrant Herbs And Spices, Layered With Aromatic Rice.", image: "assets/biryani/Boneless-Chicken-Biryani.jpg" },
                { name: "Chicken Dum Biryani", desc: "Aromatic rice layered with succulent chicken, slow-cooked for an incomparable flavor.", image: "assets/biryani/chicken dum biryani.jpg" },
                { name: "Chicken Fry Joint Biryani", desc: "Tender, Juicy Chicken Meets Flavorful Biryani In This Mouthwatering Delight.", image: "assets/biryani/chicken fry joint biryani.jpg" },
                { name: "Chicken Fry Piece Biryani", desc: "Tender chicken pieces simmered in aromatic spices layered between fragrant basmati rice, creating ...", image: "assets/biryani/chicken fry piece biryani.jpg" },
                { name: "Chicken Keema Biryani", desc: "Serves 1. A Flavorsome Medley Of Tender Chicken And Fragrant Rice, Creating A Delectable Non-Veg ...", image: "assets/biryani/chicken kheema biryani.webp" },
                { name: "Chicken Lollipop Biryani", desc: "Regular, 3 Pieces. Irresistible Biryani With Juicy Chicken Lollipops.", image: "assets/biryani/chicken lollipop biryani.jpg" },
                { name: "Chicken Mughlai Biryani", desc: "Regular, Serves 1. A Fragrant, Flavorful Biryani With Tender Chicken And Rich Mughlai-Inspired Spices.", image: "assets/biryani/chicken mughlaibiryani.jpg" },
                { name: "Chicken Wings Biryani", desc: "Serves 1. A Mouthwatering Biryani Featuring Tender Chicken Wings Cooked To Perfection.", image: "assets/biryani/chicken wings biryani.webp" },
                { name: "Egg Biryani", desc: "Regular, 3 Eggs. A Flavorful And Aromatic Egg Biryani That Will Tantalize Your Taste Buds With ...", image: "assets/biryani/egg biryani.jpg" },
                { name: "Fish Fry Biryani", desc: "", image: "assets/biryani/fish fry biryani.jpg" },
                { name: "Mutton Fry Piece Biryani", desc: "A succulent and savory biryani featuring tender pieces of mutton fry.", image: "assets/biryani/Mutton-FRY-PIECE BIRYANI.jpg" },
                { name: "Prawns Fry Biryani", desc: "", image: "assets/biryani/prawns fry.jpg" },
                { name: "Roasted Chicken Biryani", desc: "", image: "assets/biryani/roasted chicken biryani.jpg" },
                { name: "Special Chicken Biryani", desc: "A Succulent And Flavorful Non-Veg Delight Bursting With Aromatic Flavors And Tender Chicken ...", image: "assets/biryani/specil chicken biryani.jpg" },
                { name: "Special Mutton Biryani", desc: "", image: "assets/biryani/special Mutton-Biryani.jpg" }
            ]
        }
    ],

    "breads-rice": [
        {
            subcategory: "Roti & Naan",
            items: [
                { name: "Butter Naan", desc: "", image: "assets/breads & rice/butter naan.jpg" },
                { name: "Butter Roti", desc: "", image: "assets/breads & rice/butter roti.webp" },
                { name: "Chicken Keema Naan", desc: "", image: "assets/breads & rice/chicken keema naan.jpg" },
                { name: "Garlic Naan", desc: "", image: "assets/breads & rice/garlic naan.jpg" },
                { name: "Lachha Paratha", desc: "", image: "assets/breads & rice/lachha paratha.jpg" },
                { name: "Masala Kulcha", desc: "", image: "assets/breads & rice/masala kucha.jpg" },
                { name: "Paneer Kulcha", desc: "", image: "assets/breads & rice/Paneer_Kulcha.jpg" },
                { name: "Plain Naan", desc: "", image: "assets/breads & rice/Plain Naan.jpg" },
                { name: "Rumali Roti", desc: "", image: "assets/breads & rice/Rumali roti.jpg" },
                { name: "Stuffed Veg Paratha", desc: "", image: "assets/breads & rice/stuffed veg paratha.jpg" },
                { name: "Tandoori Roti", desc: "", image: "assets/breads & rice/tandoori roti.jpg" }
            ]
        },
        {
            subcategory: "Veg Fried Rice",
            items: [
                { name: "Kaju Fried Rice With Paneer Curry", desc: "", image: "assets/breads & rice/Kaju Fried Rice With Paneer Curry.jpg" },
                { name: "Kaju Fried Rice", desc: "A Flavorful And Aromatic Rice Dish With A Delightful Crunch Of Cashews.", image: "assets/breads & rice/Kaju Fried Rice.webp" },
                { name: "Mushroom Fried Rice", desc: "Savory Rice With Sauteed Mushrooms, A Delectable Vegan Option For Mushroom Lovers.", image: "assets/breads & rice/Mushroom-Fried-Rice.jpg" },
                { name: "Paneer Fried Rice", desc: "A Delectable Blend Of Fragrant Rice And Succulent Paneer, Creating A Flavor-Packed Veggie ...", image: "assets/breads & rice/Paneer Fried Rice.jpg" },
                { name: "Special Veg Fried Rice", desc: "", image: "assets/breads & rice/Special Veg Fried Rice.jpg" },
                { name: "Veg Fried Rice With Cashew Curry", desc: "", image: "assets/breads & rice/veg fried rice with jahu curry.jpg" },
                { name: "Veg Fried Rice With Mix Veg Curry", desc: "", image: "assets/breads & rice/Veg Fried Rice With Mix Veg Curry.jpg" },
                { name: "Veg Fried Rice With Paneer Curry", desc: "Veg fried rice with paneer curry.", image: "assets/breads & rice/Veg Fried Rice With Paneer Curry.jpg" },
                { name: "Veg Fried Rice", desc: "A Delightful Medley Of Colorful Veggies And Flavorful Rice, Harmoniously Combined For A ...", image: "assets/breads & rice/Veg Fried Rice.jpg" },
                { name: "Veg Schezwan Fried Rice", desc: "A Flavorful And Aromatic Rice Dish With A Delightful Blend Of Vegetables, Perfect ...", image: "assets/breads & rice/veg schezwan fried rice.jpg" },
                { name: "Zeera Rice", desc: "", image: "assets/breads & rice/Zeera Rice.jpg" }
            ]
        },
        {
            subcategory: "Non Veg Fried Rice",
            items: [
                { name: "Chicken Fried Rice", desc: "A Tempting Rice Dish With A Perfect Blend Of Sauted Chicken And Aromatic ...", image: "assets/breads & rice/Chicken Fried Rice.jpg" },
                { name: "Chicken Schezwan Fried Rice", desc: "A Delectable Fusion Of Tender Chicken And Flavorful Fried Rice That Will Tantalize ...", image: "assets/breads & rice/Chicken Schezwan Fried Rice.jpg" },
                { name: "Egg Fried Rice", desc: "", image: "assets/breads & rice/Egg Fried Rice.jpg" },
                { name: "Mix Non Veg Fried Rice", desc: "Prawn, fish, chicken, egg.", image: "assets/breads & rice/mix non veg fried rice.jpg" },
                { name: "Prawns Fried Rice", desc: "Flavorful Rice Cooked With Succulent Prawns, Creating A Delightful Dish That Satisfies Your ...", image: "assets/breads & rice/Prawns Fried Rice.jpg" },
                { name: "Special Chicken Fried Rice", desc: "A Savory Blend Of Tender Chicken And Fluffy Rice, Cooked To Perfection.", image: "assets/breads & rice/Special Chicken Fried Rice.webp" }
            ]
        }
    ],

    "extras": [
        {
            subcategory: "Veg Snacks",
            items: [
                { name: "French Fries", desc: "Crispy, golden perfection, this classic snack is a must have for any craving, ...", image: "assets/snacks & desserts/french fries.jpg" }
            ]
        },
        {
            subcategory: "Non Veg Snacks",
            items: [
                { name: "Chicken Fried Joint", desc: "Big, 1 Piece", image: "assets/snacks & desserts/Chicken Fried Joint.jpg" },
                { name: "Chicken Fried Joints", desc: "Small, 2 Pieces", image: "assets/snacks & desserts/Chicken Fried Joints.jpg" },
                { name: "Chicken Liver Roast (mix)", desc: "Gizard and Liver Mix", image: "assets/snacks & desserts/Chicken Liver Roast (mix).jpg" },
                { name: "Chicken Samosa", desc: "3 Pieces. Delicious, Crispy Pockets Filled With Succulent Chicken, Perfect As A Savory Snack.", image: "assets/snacks & desserts/Chicken Samosa.jpg" }
            ]
        },
        {
            subcategory: "Desserts",
            items: [
                { name: "Badam Milk", desc: "", image: "assets/snacks & desserts/Badam Milk.jpg" },
                { name: "Hyderabadi Khoya Kheer", desc: "Mixed the exotic flavor of whole milk, condensed milk, rice, nuts and khoya ...", image: "assets/snacks & desserts/hyderabad hoya kheer.jpg" }
            ]
        },
        {
            subcategory: "Cool Drinks",
            items: [
                { name: "Thums Up", desc: "300 Ml Can", image: "assets/snacks & desserts/thums up.jpg" }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing Menu');
    const navbar = document.querySelector('.navbar');

    // Add scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle Logic
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            // Prevent body scroll when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Add subtle reveal animations
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once revealed
                // obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements for the future
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));


    // Menu Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuContent = document.getElementById('menuContent');

    function renderMenu(categoryKey) {
        console.log('Rendering Menu for:', categoryKey);
        if (!menuContent) {
            console.error('menuContent element NOT found!');
            return;
        }
        menuContent.innerHTML = ''; // Clear current

        const categories = menuData[categoryKey];
        if (!categories) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'menu-category-wrapper active';

        categories.forEach(subCat => {
            // Subcategory title with veg/non-veg dot
            const subTitle = document.createElement('h3');
            subTitle.className = 'sub-category-title';

            // Determine dot type from subcategory name
            const dot = document.createElement('span');
            dot.className = 'veg-dot';
            const lower = subCat.subcategory.toLowerCase();
            if (lower.includes('veg') && !lower.includes('non')) dot.classList.add('veg');
            else if (lower.includes('non veg') || lower.includes('non-veg')) dot.classList.add('nonveg');
            else if (lower.includes('sea food') || lower.includes('seafood') || lower.includes('prawn') || lower.includes('fish')) dot.classList.add('seafood');
            else if (lower.includes('tandoori')) dot.classList.add('tandoori');
            else dot.classList.add('nonveg');

            subTitle.appendChild(dot);
            subTitle.appendChild(document.createTextNode(subCat.subcategory));
            wrapper.appendChild(subTitle);

            // Scroll hint wrapper
            const scrollHint = document.createElement('div');
            scrollHint.className = 'menu-scroll-hint';

            // Row container for horizontal scrolling
            const rowContainer = document.createElement('div');
            rowContainer.className = 'menu-row-container';

            // Grid for items
            const grid = document.createElement('div');
            grid.className = 'menu-grid';

            if (!subCat.items || subCat.items.length === 0) {
                console.warn('NO ITEMS found for subcategory:', subCat.subcategory);
            }

            subCat.items.forEach(item => {
                const itemCard = document.createElement('div');
                itemCard.className = 'menu-item';

                if (item.image) {
                    const imgWrapper = document.createElement('div');
                    imgWrapper.className = 'menu-item-img-wrapper';
                    const img = document.createElement('img');
                    img.src = item.image;
                    img.alt = item.name;
                    img.className = 'menu-item-img';
                    imgWrapper.appendChild(img);
                    itemCard.appendChild(imgWrapper);
                }

                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'menu-item-content';

                const header = document.createElement('div');
                header.className = 'menu-item-header';

                const title = document.createElement('div');
                title.className = 'menu-item-title';
                title.textContent = item.name;

                header.appendChild(title);
                contentWrapper.appendChild(header);

                if (item.desc) {
                    const desc = document.createElement('div');
                    desc.className = 'menu-item-desc';
                    desc.textContent = item.desc;
                    contentWrapper.appendChild(desc);
                }

                itemCard.appendChild(contentWrapper);
                grid.appendChild(itemCard);
            });

            rowContainer.appendChild(grid);

            // Drag-to-scroll on desktop
            let isDown = false, startX, scrollLeft;
            rowContainer.addEventListener('mousedown', e => { isDown = true; rowContainer.style.cursor = 'grabbing'; startX = e.pageX - rowContainer.offsetLeft; scrollLeft = rowContainer.scrollLeft; });
            rowContainer.addEventListener('mouseleave', () => { isDown = false; rowContainer.style.cursor = 'grab'; });
            rowContainer.addEventListener('mouseup', () => { isDown = false; rowContainer.style.cursor = 'grab'; });
            rowContainer.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - rowContainer.offsetLeft; rowContainer.scrollLeft = scrollLeft - (x - startX); });

            scrollHint.appendChild(rowContainer);
            wrapper.appendChild(scrollHint);
        });

        menuContent.appendChild(wrapper);
    }

    // Initialize with starters
    renderMenu('starters');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            // Render specific category
            const target = btn.getAttribute('data-target');
            renderMenu(target);
        });
    });
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
