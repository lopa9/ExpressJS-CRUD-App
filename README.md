 # ExpressJs CRUD App

 ### 🔨Setting Up the Development Environment
 #### Step-1 :
 #### 👇Installing Node.js and npm (You’ll need to download and install it from the Node.js website )
 
 Once installed, open your terminal or command prompt and type:
 ![nodeJS](https://github.com/user-attachments/assets/79c85b8e-3f60-428a-a2e6-3162b6c12993)
 
 You should see the version number of npm.

 #### Step-2 :
 #### 🗽Initializing a Node.js Project
 
![nodeJS](https://github.com/user-attachments/assets/4dec9e23-2255-4f96-9f42-c8704df0e7a6)

This command creates a package.json file in your project directory

#### Step-3 :
#### 🎭Installing Express

![express_install](https://github.com/user-attachments/assets/0b7b18fc-1af2-41cf-8cc6-520420560e4a)

### For a CRUD API, you typically need four types of operations:
👻Create (POST): Adds new data.

📖Read (GET): Retrieves data.

👽Update (PUT/PATCH): Modifies existing data.

💥Delete (DELETE): Removes data.

### Now create a server.js file and paste the code given bellow
![Screenshot 2024-09-24 012401](https://github.com/user-attachments/assets/02bc3d45-062b-4302-9a29-b9f75699309b)

## Implementing CRUD Operations
### Create: Adding a New Book
![1](https://github.com/user-attachments/assets/cf4c8a60-dd09-4364-a93e-7fbd15e27165)

### Read: Fetching Books
#### For getting All books :
![2](https://github.com/user-attachments/assets/5ea9d1b7-9cba-460c-a4af-cfbf2cfc2025)

#### For getting a specific book :
![3](https://github.com/user-attachments/assets/1268c80c-40ed-4976-a727-826c458d9f9b)

### Update: Modifying a Book’s Details
![4](https://github.com/user-attachments/assets/3e8b663a-94cb-4792-bdba-0b731149ed92)

### Delete: Removing a Book
![5](https://github.com/user-attachments/assets/7ccbe303-78ba-462f-b0ae-7a716b1fbd02)

## Integrating a Database
#### Installing Mongoose
##### Install it by running :
npm install mongoose
![6](https://github.com/user-attachments/assets/12e1ce6f-a154-4df9-8647-50f8e291d6bd)

### Setting Up Mongoose
#### make a directory "config"
#### make a file "db.js" inside config .
Then paste the code given below
![7](https://github.com/user-attachments/assets/01a21616-3f96-4231-9f20-bf5ecc67e470)
