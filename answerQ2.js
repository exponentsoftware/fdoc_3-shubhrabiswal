const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];

// a. Create a function called ***signUp*** which allows user to add to the collection. 
// If user exists, inform the user that he has already an account.
function generateId(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}


function signUp(newuser){
    let count =0 ;
    for(let user of users){
        if(user.email == newuser.email){
            count++
            return "User already exists"
        }
    }
    if(count == 0){
        users.push(newuser)
        return "The user has been added"
    }
}

const newuser =  {
    _id: generateId(6),
    username: 'Thomas',
    email: 'thomas09@thomas.com',
    password: '123333',
    createdAt:'17/05/2019 10:00 AM',
    isLoggedIn: false
}

// console.log(signUp(newuser))
// console.log(users)

// b. Create a function called ***signIn*** which allows user to sign in to the application

function signIn(user_input){
    for(let user of users){
        if((user.email == user_input.email) && (user.password == user_input.password)){
            user.isLoggedIn = true
            return "Welcome to the application "+ user.username
        }
    }
}

const user_input = {
    email: 'thomas@thomas.com',
    password: '123333'
}
// console.log(signIn(user_input));
// console.log(users)
// 
// b. The products array has  three elements and each of them has six properties. 
// 

// a. Create a function called ***rateProduct*** which rates the product
		
function rateProduct(rating){
    // let rating =[]
    for(let product of products){
        if(product._id == rating.pid){
            const obj = {}
            obj["userId"] = rating.userId;
            obj["rate"] = rating.rate;
            // console.log(obj)
            product.ratings.push(obj)
            return product
        }
    }
}


rating = { 
    pid :  'hedfcg',
    userId: 'eefamr', 
    rate: 4 
}

// console.log(rateProduct(rating))
rateProduct(rating)

// b. Create a function called ***averageRating*** which calculate the average 
// rating of a product

function averageRating(pid){
    let total_rating=0
    let total_users =0
    for(let product of products){
        if(product._id == pid){
            // console.log(product)
            total_users = product.ratings.length;
            // console.log(product.ratings[0].length)
            // console.log(total_users)
            for(let pr of product.ratings){
                total_rating=total_rating+pr.rate
                // console.log(pr.rate)
            }
        }
    }
    let avg = total_rating/total_users;
    return avg
}
console.log(averageRating("hedfcg"))

// c. Create a function called ***likeProduct***. This function will 
// helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(pid,uid){
    for(let product of products){
        if(product._id == pid){
            console.log(product.likes)
            for(let like_by of product.likes){
                if(uid == like_by){
                    let ind = product.likes.indexOf(uid);
                    product.likes.splice(ind,1)
                }else{
                    product.likes.push(uid)
                }
            }
            console.log(product)
        }
    }
    
}
let pid ="hedfcg";
let uid = "ab12ex";
console.log(likeProduct(pid,uid))
console.log(likeProduct(pid,uid))
// console.log
