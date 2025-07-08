import prisma from "./client";
// use `prisma` in your application to read and write data in your DB

async function addUser(email:string, password:string, firstname?:string, lastname?:string) {
  const res = await prisma.user.create({
    data: {
      email:email,
      password: password,
      firstname: firstname,
      lastname: lastname ?? null
    },
  });

  console.log('added user response', res);
}
// addUser( "rahul@gmail.com","123456","Rahul" )

async function getAllUsers(){
    const res = await prisma.user.findMany()
    console.log('all users', res);
}
getAllUsers(); 

async function updateUser(){
    const res = await prisma.user.update({
        
    })
}