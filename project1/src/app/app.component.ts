import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  //   constructor(private http:HttpClient){
   
  //   }
  // ngOnInit(): void {
  //   this.http.post('https://fakestoreapi.com/products',{name:"hello from app.ts"}).subscribe((response)=>{console.log(response)})
  // }
  
   title = 'project1';


  
//   name: string;
//   email: string;
//   city: string;
//   state: string;
//   pincode: string;
//   address: string;
  
//   constructor() {
//     this.address = '';
//     this.city = '';
//     this.email = '';
//     this.name = '';
//     this.state = '';
//     this.pincode = '';
// }
// show=false
// fun()
// {
//    this.show=true;
// }
showUserData: any[] = [];
lname=new FormGroup({
  uname:new FormControl('',[Validators.required,Validators.minLength(3)],this.duplicatename),
  pwd: new FormControl('',[Validators.required,Validators.minLength(5),this.uppercase]),
  email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
  phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
  topic:new FormControl([Validators.required]),
  timeOfDay:new FormControl([Validators.required])
})

topic=['react','javascript','angular']
color=true
value={

  background:'green',
  color:'white'
}
address=new FormGroup({
  add:new FormArray([
    new FormControl(),
    
  ])
})
add() {
  const addArray = this.address.get('add') as FormArray
  addArray?.push(new FormControl()); 
}
submit(){
    console.log(this.lname.controls)
}
duplicatename(e:any):Promise<any>
{
  let prom=new Promise((resolve,reject)=>{
    let users=['user1','user2','user3']
    let name=e.value;
    console.log(name);
   setTimeout(()=>{
      if(users.indexOf(name)>=0 ) {
        resolve({userexist:true})
     }
     else{
      resolve(null)
     }
    },1000)
   })
   return prom
}
uppercase(e:any)
{
  const pattern=/[A-Z]/
  if(pattern.test(e.value))
  {
    return null
  }
  return {uppererror:true}
}
sub()
{
  
    let storedUsers = sessionStorage.getItem('users');
    let usersArray: any[] = storedUsers ? JSON.parse(storedUsers) : [];
    const newUser = this.lname.value;
    usersArray.push(newUser);
    sessionStorage.setItem('users', JSON.stringify(usersArray));
    console.log('Stored Data:', usersArray);
}
reset()
{
  this.lname.reset();
  sessionStorage.removeItem('user');
}
show() {
  let storedUsers = sessionStorage.getItem('users');
  this.showUserData = storedUsers ? JSON.parse(storedUsers) : [];
  console.log('Stored Data:', storedUsers);
}
}
