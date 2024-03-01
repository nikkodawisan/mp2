//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors")
const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended:true })) //for form submission
app.use(express.json()) //json response
app.use(
    cors(
        { origin : "http://localhost:3000" }  //front end
    )
)

//ADMIN USER
const userDB = [
    {
        id: 1,
        username: "admin",
        password: "Password123",
        status: 1,
        email: "myTest@yahoo.com"
    }

]


//JWT

const generateAccessToken = (user) =>
{
    let token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            email: user.email,
        }, "ThisIsMySecretKey", {}
    );
    return token;
}

const middlewareVer = (req, res, next) =>
{
const authHeader = req.headers.authorization;
console.log(authHeader);
if(authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "ThisMySecretKey", (err, user)=>{
        if(err){
           return req.status(403).json("Invalid Token");
        }
        req.user = user;
        next();
    })
}
    else
    {
        return res.status(403).json("You Are Not Authenticated");
    }
}

app.post('/login-validation/', (req, res)=>{
    let username_login = req.body.username;
    let password_login = req.body.password;

   const user = userDB.find(
        (ob)=>{
          return ob.username === username_login && ob.password === password_login 
        }
    );
    
    if (user) {
        const token = generateAccessToken(user)
        const myReturn = { code: "success", 
        msg : "Username and Password matched a record", 
        loginUser : user,
        loginId : user.id,
        accessToken : token,
    }

        res.status(200).json(myReturn);

    } else {
       res.status(401).json({ code: "failed", msg:"Incorrect Username and Password"}) 
    }


})


const pageContent = [
    {
        id:'home',
        content:'sample content for home page'
    },
    {
        id:'about',
        content:'sample content for about'
    },
]

app.get('/page-content', (req, res)=>{
   
   let pageId = req.body.pageContent; 
   let actualContent = req.body.contentValue;

   newObject = {
        id: pageId,
        content:actualContent,
   } 
    
   const contentIndex =  pageContent.findIndex( (obj) => obj.id === pageId );
   pageContent[contentIndex] = newObject;

   if (pageContent) {
    res.json(
        {
            code : "success",
            msg : "Saving Done",
            //obj: pageContent
        }
    )
    } else {
    res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while saving home page content"
        }
    )
    }

})


app.get('/page-content/:id', (req, res)=>{
    const pageId = req.params.id;

    const pageFound = pageContent.find( 
             (page) => {
                 return pageId === page.id  
             } 
     )
     if (pageFound){
         res.json(pageFound.content);
     } else {
         res.status(400).json("Invalid Id")
     }
 })


//HTTP METHODS
//GET, POST, PUT, HEAD, DELETE, PATCH
app.get('/test/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    //database query

    const twoNumbers = [
        {
           id : num1,
           name: "Odeth",
           signal: true, 
        },
        {
            id : num2,
            name: "Odeth",
            signal: true,   
        }
    ]

    let sample = [num1, num2]

    let z = parseInt(num1);

    let m = "Hello WD95P";

    res.json(twoNumbers);
    
}
);


app.post('/save-data', (req, res) => {
    let fname = req.body.firstname;
    let lname = req.body.lastname;

    res.json([fname, lname])

})

app.put('/put-data/:id', (req, res) => {
     let fname = req.body.firstname;
    //let lname = req.body.lastname;

    let id = req.params.id;
   //update change firstname where id = id

    res.json([num1, fname])
})

app.delete('/delete/record/:id', (req, res)=>{
  
})

//============================================================================

//============================BOOK DATABASE===================================

const bookDatabase = [
    {
        id:1,
        itemFirstName: "Penny",
        itemLastName: "Lane",
        itemEmail:'sample@gmail.com',
        itemContact:'12345678909',
        itemService:'',
        itemDate:'',
        itemTime:'',
        itemDescription: "Sample description",
        },
    {
        id:2,
        itemFirstName: "Shampoo",
        itemLastName: "Supernova",
        itemEmail:'this@gmail.com',
        itemContact:'99999999999',
        itemService:'',
        itemDate:'',
        itemTime:'',
        itemDescription: "Sample description",
        }

 ];

//============================SAVE BOOK===================================
app.post('/save-book', (req, res) => {

    let itemFirstName = req.body.ItemFirstName;
    let itemLastName = req.body.ItemLastName;
    let itemEmail = req.body.ItemEmail;
    let itemContact = req.body.ItemContact;
    let itemServices = req.body.ItemServices;
    let itemDate = req.body.ItemDate;
    let itemTime = req.body.ItemTime;
    let itemDescription = req.body.ItemDescription;

    const newBook = {
        id: bookDatabase.length + 1,
        itemFirstName: itemFirstName,
        itemLastName: itemLastName,
        itemEmail: itemEmail,
        itemContact: itemContact,
        itemServices: itemServices,
        itemDate: itemDate,
        itemTime: itemTime,
        itemDescription: itemDescription 
    }

   if ( bookDatabase.push(newBook) ) {
        res.status(200).json( {code:'success', msg:'Success Saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'Error Encountered While Saving'} )
   }

})

//============================UPDATE BOOK===================================

app.put('/update-book/:bookId', (req, res)=>{
    const book_id = req.params.bookId;

    let itemFirstName = req.body.ItemFirstName;
    let itemLastName = req.body.ItemLastName;
    let itemEmail = req.body.ItemEmail;
    let itemContact = req.body.ItemContact;
    let itemService = req.body.ItemService;
    let itemDate = req.body.ItemDate;
    let itemTime = req.body.ItemTime;
    let itemDescription = req.body.ItemDescription;

    const updateBookRecord = {
        id: book_id,
        itemFirstName: itemFirstName,
        itemLastName: itemLastName,
        itemEmail: itemEmail,
        itemContact: itemContact,
        itemService: itemService,
        itemDate: itemDate,
        itemTime: itemTime,
        itemDescription: itemDescription 
    }

   const indexOfBook =  bookDatabase.findIndex( (obj) => obj.id == book_id );

   bookDatabase[indexOfBook] = updateBookRecord;

   if (bookDatabase) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "Failed",
            msg : "Error Encountered While Updating"
        }
      )
   }

})
       

app.get('/get-book-data', (req, res) => {
    res.json(bookDatabase);  
})


app.get('/get-book/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    console.log(bookId)
    console.log(bookDatabase);
    const itemFound = bookDatabase.find( (item) => {  return bookId === item.id } ) 

     if (itemFound){
         res.status(200).json(itemFound);
     } else {
         res.status(400).json("Invalid Id")
     }

})

//============================DELETE BOOK===================================

app.delete('/delete-book/:bookId', (req, res)=>{
    const book_id = req.params.bookId;
    const indexValue =  bookDatabase.findIndex( (obj) => obj.id == book_id );
    bookDatabase.splice(indexValue, 1); // 1, 1

    if (bookDatabase) {
        res.json(
            {
                code : "Success",
                msg : "Delete Contact Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "Failed",
            msg : "Error Encountered While Deleting Contact"
        }
      )
   }
    
})

//============================================================================================

//===================================CONTACT DATABASE=========================================

const contactDatabase = [
    {
        id:1,
        itemName2: "John Deym",
        itemContact2:'1234435677888',
        itemEmail2:'sample@gmail.com',
        itemDescription2: "Sample description",
        },
    {
        id:2,
        itemName2: "Shampoo Supernova",
        itemContact2:'45353787465',
        itemEmail2:'this@gmail.com', 

        itemDescription2: "Sample description",
        },

    {
         id:3,
         itemName2: "Mickey Mouse",
         itemContact2:'43546666454',
         itemEmail2:'that@gmail.com',
         itemDescription2: "Sample description",
        },

    {
         id:4,
         itemName2: "Keyboard Warrior",
         itemContact2:'45564466',
         itemEmail2:'samples222@gmail.com',
         itemDescription2: "Sample description",
        },

 ];

//=============================================================================================

//============================SAVE CONTACT=====================================================
app.post('/save-contact', (req, res) => {

    let itemName2 = req.body.ItemName2;
    let itemContact2 = req.body.ItemContact2;
    let itemEmail2 = req.body.ItemEmail2;
    let itemDescription2 = req.body.ItemDescription2;

    const newContact = {
        id: contactDatabase.length + 1,
        itemName2: itemName2,
        itemContact2: itemContact2,
        itemEmail2: itemEmail2,
        itemDescription2: itemDescription2 
    }

   if ( contactDatabase.push(newContact) ) {
        res.status(200).json( {code:'success', msg:'done saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
   }

})

//============================UPDATE CONTACT====================================================

app.put('/update-contact/:contactId', (req, res)=>{
    const contact_id = req.params.contactId;

    let itemName2 = req.body.ItemName2;
    let itemContact2 = req.body.ItemContact2;
    let itemEmail2 = req.body.ItemEmail2;
    let itemDescription2 = req.body.ItemDescription2;

    const updateContactRecord = {
        id: contact_id,
        itemName2: itemName2,
        itemContact2: itemContact2,
        itemEmail2: itemEmail2,
        itemDescription2: itemDescription2 
    }

   const indexOfContact =  contactDatabase.findIndex( (obj) => obj.id == contact_id );

   contactDatabase[indexOfContact] = updateContactRecord;

   if (contactDatabase) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while updating"
        }
      )
   }

})
       

app.get('/get-contact-data', (req, res) => {
    res.json(contactDatabase);  
})


app.get('/get-contact/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    console.log(contactId)
    console.log(contactDatabase);
    const itemFound2 = contactDatabase.find( (item) => {  return contactId === item.id } ) 

     if (itemFound2){
         res.status(200).json(itemFound2);
     } else {
         res.status(400).json("Invalid Id")
     }

})

//============================DELETE CONTACT======================================================

app.delete('/delete-contact/:contactId', (req, res)=>{
    const contact_id = req.params.contactId;
    const indexValue2 =  contactDatabase.findIndex( (obj) => obj.id == contact_id );
    contactDatabase.splice(indexValue2, 1);

    if (contactDatabase) {
        res.json(
            {
                code : "success",
                msg : "Delete Contact Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while deleting contact"
        }
      )
   }
    
})

//==============================================================================================
//==============================================================================================
//==============================================================================================
//==============================================================================================
//=================================BOOK 2=======================================================

const book2Database = [
    {
        id:1,
        itemName3: "John Deym",
        itemContact3:'1234435677888',
        itemEmail3:'sample@gmail.com',
        itemDescription3: "Sample description",
        },
    {
        id:2,
        itemName3: "Shampoo Supernova",
        itemContact3:'45353787465',
        itemEmail3:'this@gmail.com', 
        itemDescription3: "Sample description",
        },
 ];


 //============================SAVE BOOK2=====================================================
app.post('/save-book2', (req, res) => {

    let itemName3 = req.body.ItemName3;
    let itemContact3 = req.body.ItemContact3;
    let itemEmail3 = req.body.ItemEmail3;
    let itemDescription3 = req.body.ItemDescription3;

    const newBook2 = {
        id: book2Database.length + 1,
        itemName3: itemName3,
        itemContact3: itemContact3,
        itemEmail3: itemEmail3,
        itemDescription3: itemDescription3 
    }

   if ( book2Database.push(newBook2) ) {
        res.status(200).json( {code:'success', msg:'done saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
   }

})

app.get('/get-book2-data', (req, res) => {
    res.json(book2Database);  
})










//-----------------------------------JOIN DATABASE-------------------------------------------


const joinDatabase = [
    {
        id:1,
        joinFirstName: "Berto",
        joinLastName: "Weeknd",
        joinContact:'1234435677888',
        joinEmail:'sample@gmail.com',
        joinAddress:'Dasmarinas Cavite',
        joinFileInput: '',
        joinDescription: "Sample description",
        },
    {
        id:2,
        joinFirstName: 'River',
        joinLastName: 'Maya',
        joinContact:'45353787465',
        joinEmail:'this@gmail.com',
        joinAddress: 'Sample Address',
        joinFileInput: '', 
        joinDescription: 'Sample description 123455',
        },
 ];

//============================SAVE JOIN===================================
app.post('/save-join', (req, res) => {

    let joinFirstName = req.body.JoinFirstName;
    let joinLastName = req.body.JoinLastName;
    let joinEmail = req.body.JoinEmail;
    let joinContact = req.body.JoinContact;
    let joinAddress = req.body.JoinAddress;
    let joinFileInput = req.body.JoinFileInput;
    let joinDescription = req.body.JoinDescription;
    let joinLimit = joinDatabase.length;

    const newJoin = {
        id: joinDatabase.length + 1,
        joinFirstName: joinFirstName,
        joinLastName: joinLastName,
        joinEmail: joinEmail,
        joinContact: joinContact,
        joinAddress: joinAddress,
        joinFileInput: joinFileInput,
        joinDescription: joinDescription 
    }

   if (joinLimit == 4) {
        res.status(400).json( {code: 'failed', msg: 'Reservation Maximum Limit Reached'} )
   }
    
   if ( joinDatabase.push(newJoin) ) {
        res.status(200).json( {code:'success', msg:'Success Saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'Error Encountered While Saving'} )
   }

})

//============================UPDATE JOIN===================================

app.put('/update-join/:joinId', (req, res)=>{
    const join_id = req.params.joinId;

    let joinFirstName = req.body.JoinFirstName;
    let joinLastName = req.body.JoinLastName;
    let joinEmail = req.body.JoinEmail;
    let joinContact = req.body.JoinContact;
    let joinAddress = req.body.JoinService;
    let joinFileInput = req.body.JoinFileInput;
    let joinDescription = req.body.JoinDescription;

    const updateJoinRecord = {
        id: join_id,
        joinFirstName: joinFirstName,
        joinLastName: joinLastName,
        joinEmail: joinEmail,
        joinContact: joinContact,
        joinAddress: joinAddress,
        joinFileInput: joinFileInput,
        joinDescription: joinDescription 
    }

   const indexOfJoin =  joinDatabase.findIndex( (obj) => obj.id == join_id );

   joinDatabase[indexOfJoin] = updateJoinRecord;

   if (joinDatabase) {
        res.json(
            {
                code : "success",
                msg : "Update Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "Failed",
            msg : "Error Encountered While Updating"
        }
      )
   }

})
       

app.get('/get-join-data', (req, res) => {
    res.json(joinDatabase);  
})


app.get('/get-join/:id', (req, res) => {
    const joinId = parseInt(req.params.id);
    console.log(joinId)
    console.log(joinDatabase);
    const itemFound = joinDatabase.find( (item) => {  return joinId === item.id } ) 

     if (joinFound){
         res.status(200).json(joinFound);
     } else {
         res.status(400).json("Invalid Id")
     }

})


//============================DELETE JOIN===================================

app.delete('/delete-join/:joinId', (req, res)=>{
    const join_id = req.params.joinId;
    const indexJoinValue =  joinDatabase.findIndex( (obj) => obj.id == join_id );
    joinDatabase.splice(indexJoinValue, 1); // 1, 1

    if (joinDatabase) {
        res.json(
            {
                code : "Success",
                msg : "Delete Contact Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "Failed",
            msg : "Error Encountered While Deleting Contact"
        }
      )
   }
    
})


app.listen(5000)
console.log('Server is running in port 5000')