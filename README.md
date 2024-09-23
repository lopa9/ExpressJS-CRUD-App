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
### 👾Create: Adding a New Book
![1](https://github.com/user-attachments/assets/cf4c8a60-dd09-4364-a93e-7fbd15e27165)

### 📜Read: Fetching Books
#### For getting All books :
![2](https://github.com/user-attachments/assets/5ea9d1b7-9cba-460c-a4af-cfbf2cfc2025)

#### For getting a specific book :
![3](https://github.com/user-attachments/assets/1268c80c-40ed-4976-a727-826c458d9f9b)

### 🎀Update: Modifying a Book’s Details
![4](https://github.com/user-attachments/assets/3e8b663a-94cb-4792-bdba-0b731149ed92)

### 🎃Delete: Removing a Book
![5](https://github.com/user-attachments/assets/7ccbe303-78ba-462f-b0ae-7a716b1fbd02)

## 🐥Integrating a Database
#### Installing Mongoose
##### Install it by running :

npm install mongoose

![6](https://github.com/user-attachments/assets/12e1ce6f-a154-4df9-8647-50f8e291d6bd)

### 🤝 Setting Up Mongoose
#### make a directory "config"
#### make a file "db.js" inside config .
Then paste the code given below

![7](https://github.com/user-attachments/assets/01a21616-3f96-4231-9f20-bf5ecc67e470)

###🔧 Creating a Model
#### make a directory "models"
#### create a file "bookModel.js"
then write the code giben below

![8](https://github.com/user-attachments/assets/97069314-8901-4168-be56-4dfdb482fa61)

###🛣 Givinging Routes
#### make a directory "routes"
#### Create a file "bookRote.js"

![9](https://github.com/user-attachments/assets/457f0b69-0e50-4b33-b0af-77d7fd62c6e1)

Then push it on your repository
and open it on git workspace
then install express and mongoose

### npm install express
### npm install mongoose
#### then split the terminal 
At the left side, type....

![11](https://github.com/user-attachments/assets/f2a815a0-4c1a-4ac7-b0c8-20de06ae4080)

At the right side , type....

![12](https://github.com/user-attachments/assets/6c5d8a37-88f0-4558-9891-14f8a51c6ce1)

🔑Get an Extension named Thunder Client

##🎈 POST :
![13](https://github.com/user-attachments/assets/c341a57d-c4ae-42e6-a72f-6d008580b5b7)

##💗 GET :
![14](https://github.com/user-attachments/assets/dd529f8b-63a6-4441-aaa3-3022e754d996)

##🍕 PUT :
copy the id from the get method
the paste it on the url:

![15](https://github.com/user-attachments/assets/01b76f45-2917-4c88-bf38-9d1e56c81839)

Now make the chanages at the body , and apply PUT
![16](https://github.com/user-attachments/assets/365025d7-0045-4dc3-9f48-fffa42d26b37)

##🚽 DELETE :
just like the put method .. youu can delete some data by putting id 

![17](https://github.com/user-attachments/assets/462f988d-f289-4bdd-847f-ecf265b978c1)











