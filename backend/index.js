//MVC - model, view, controller design pattern
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.urlencoded({ extended:true })) //for form submission
app.use(express.json()) //json response
app.use(
    cors(
        { origin : "http://localhost:3000" }  //front end
    )
)

const userDB = [
    {
        id: 1,
        username: "admin",
        password: "password123",
        status: 1,
        email: "myTest@yahoo.com"
    },
    {
        id: 2,
        username: "staff",
        password: "123",
        status: 0,
        email: "staff@google.com"
    }

]
//CRUD  create, read, update, delete
const profileDB = [
    {
        id:1,
        firstname : "James",
        lastname : "Bond",
        phone : "97987",
        address : "New York USA",
        email : "james@yahoo.com",
    },
    {   
        id:2,
        firstname : "Peter",
        lastname : "Pan",
        phone : "97987",
        address : "California USA",
        email : "peter@yahoo.com",
    },
    {
        id:3,
        firstname : "Michael",
        lastname : "Jordan",
        phone : "97987",
        address : "California USA",
        email : "mic@google.com",
    },
    {
        id:4,
        firstname : "Vic",
        lastname : "Saints",
        phone : "9742342987",
        address : "CDO Mindanao",
        email : "vic@google.com",
    },
];

let obj = profileDB[2];
let pnumber = obj.phone;

app.get('/all-profiles', (req, res)=>{
    res.json(profileDB)
})

app.get('/one-profile/:id', (req, res)=>{
   const profileId = req.params.id;
   
   const userFound = profileDB.find( 
            (user)=>{
                return parseInt(profileId) === parseInt(user.id)   
            } 
    )
    //loop, fucntion itereate all of the items in the array
    if (userFound){
        res.json(userFound);
    } else {
        res.status(400).json("Invalid Id")
    }
})

app.put('/update-user/:userId', (req, res)=>{
    const user_id = req.params.userId;

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;

    const updateUserRecord = {
        id: user_id,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        email: email,
    }

   const updateThisRecord =  profileDB.findIndex( (obj) => obj.id == user_id );
   profileDB[updateThisRecord] = updateUserRecord;

   if (profileDB) {
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
 // let x = [67, 8, 9, 50, 45]        
app.get('/delete-user/:userId', (req, res)=>{
    const user_id = req.params.userId;
    const indexValue =  profileDB.findIndex( (obj) => obj.id == user_id );
    profileDB.splice(indexValue, 1);

    if (profileDB) {
        res.json(
            {
                code : "success",
                msg : "Delete Done"
            }
        )
   } else {
      res.status(400).json(
        {
            code : "failed",
            msg : "Error encountered while deleting"
        }
      )
   }
    
})
 
app.post('/registration', (req, res)=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let address = req.body.address;
    let email = req.body.email;

    idCoount = profileDB.length + 1;
    const newRecord = {
        id: idCoount,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        email: email,
    }
    
  const saveStatus = profileDB.push(newRecord);  
   if (saveStatus) {
     res.status(200).json(
        { code: "success", msg:"registration successful" }   
     )
   } else {
     res.status(401).json(
        { code: "failed", msg:"registration error in saving" }   
     )
   }

})

app.post('/login-validation/', (req, res)=>{
    let username_login = req.body.username;
    let password_login = req.body.password;

   const user = userDB.find(
        (ob)=>{
          return ob.username === username_login && ob.password === password_login 
        }
    );
    
    if (user) {

        const myReturn = { code: "success", msg : "Username and Password matched a record", loginUser : user }

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

const todoDatabase = [
    {
        id:1,
        itemName: "Candy Lane",
        itemContact:'1234435677888',
        itemEmail:'sample@gmail.com',
        itemDate:'',
        itemTime:'',
        itemService:'',
        itemDescription: "Sample description",
        },
    {
        id:2,
        itemName: "Shampoo Supernova",
        itemContact:'45353787465',
        itemEmail:'this@gmail.com',
        itemDate:'',
        itemTime:'',
        itemService:'',
        itemDescription: "Sample description",
        },

    {
         id:3,
         itemName: "Mickey Mouse",
         itemContact:'43546666454',
         itemEmail:'that@gmail.com',
         itemDate:'',
         itemTime:'',
         itemService:'',
         itemDescription: "Sample description",
        },

    {
         id:4,
         itemName: "Keyboard Warrior",
         itemContact:'45564466',
         itemEmail:'samples222@gmail.com',
         itemDate:'',
         itemTime:'',
         itemService:'',
         itemDescription: "Sample description",
        },

 ];

//============================SAVE BOOK===================================
app.post('/save-todo', (req, res) => {

    let itemName = req.body.ItemName;
    let itemContact = req.body.ItemContact;
    let itemEmail = req.body.ItemEmail;
    let itemDate = req.body.ItemDate;
    let itemTime = req.body.ItemTime;
    let itemService = req.body.ItemService;
    let itemDescription = req.body.ItemDescription;

    const newTodo = {
        id: todoDatabase.length + 1,
        itemName: itemName,
        itemContact: itemContact,
        itemEmail: itemEmail,
        itemDate: itemDate,
        itemTime: itemTime,
        itemService: itemService,
        itemDescription: itemDescription 
    }

   if ( todoDatabase.push(newTodo) ) {
        res.status(200).json( {code:'success', msg:'done saving'} )
   } else {
        res.status(400).json( {code:'failed', msg:'error encountered while saving'} )
   }

})

//============================UPDATE BOOK===================================

app.put('/update-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;

    let itemName = req.body.ItemName;
    let itemContact = req.body.ItemContact;
    let itemEmail = req.body.ItemEmail;
    let itemDate = req.body.ItemDate;
    let itemTime = req.body.ItemTime;
    let itemService = req.body.ItemService;
    let itemDescription = req.body.ItemDescription;

    const updateTodoRecord = {
        id: todo_id,
        itemName: itemName,
        itemContact: itemContact,
        itemEmail: itemEmail,
        itemDate: itemDate,
        itemTime: itemTime,
        itemService: itemService,
        itemDescription: itemDescription 
    }

   const indexOfTodo =  todoDatabase.findIndex( (obj) => obj.id == todo_id );

   todoDatabase[indexOfTodo] = updateTodoRecord;

   if (todoDatabase) {
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
       

app.get('/get-todo-data', (req, res) => {
    res.json(todoDatabase);  
})


app.get('/get-todo/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    console.log(todoId)
    console.log(todoDatabase);
    const itemFound = todoDatabase.find( (item) => {  return todoId === item.id } ) 

     if (itemFound){
         res.status(200).json(itemFound);
     } else {
         res.status(400).json("Invalid Id")
     }

})

//============================DELETE BOOK===================================

app.delete('/delete-todo/:todoId', (req, res)=>{
    const todo_id = req.params.todoId;
    const indexValue =  todoDatabase.findIndex( (obj) => obj.id == todo_id );
    todoDatabase.splice(indexValue, 1); // 1, 1

    if (todoDatabase) {
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

//============================DELETE BOOK======================================================

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
app.listen(5000)
console.log('Server is running in port 5000')