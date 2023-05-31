import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { userData } from '../userData.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css'],
})
export class ManageuserComponent implements OnInit {
  trash = faTrash;
  edit = faEdit;

  url = 'https://userdata-b6c4f-default-rtdb.firebaseio.com/userData.json';
  url1 = 'https://userdata-b6c4f-default-rtdb.firebaseio.com/userData';


  users: userData[] = [];
  editMode:boolean=false;
  editUserId='';

  @ViewChild('userForm') userForm!: NgForm;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.onFetchUser()
  }

  onAdduser(uData: userData) {
    if(this.userForm.valid){
      if(this.editMode){
        // console.log('https://userdata-b6c4f-default-rtdb.firebaseio.com/userData/'+this.editUserId+'.json')
        this.http.put<userData>('https://userdata-b6c4f-default-rtdb.firebaseio.com/userData/'+this.editUserId+'.json',uData)
        .subscribe(res=>{
          console.log(res)
          this.onFetchUser();
          this.editMode=false
        })
      }
      else{
        console.log(uData);
        this.users.push(uData);
        this.http.post<userData>(this.url, uData).subscribe((res) => {
          console.log(res);
        });
      }
    }

  }

  onFetchUser(){
    this.http.get<userData>(this.url).pipe(
      map((data:any)=>{
        console.log(data);
        const userArray:any[]=[]
        for(let key in data){
         if(data.hasOwnProperty(key)){
          userArray.push({userId:key,...data[key]})
          // console.log({userId:key.slice(1),...data[key]})
         }
        }
        return userArray
      })
    )
    .subscribe(res=>{
   this.users=res
      
    })
  }

  onDeleteUser(userId:any){
    if(confirm("Are you delete this record")){
      console.log(userId)
      // 'https://userdata-b6c4f-default-rtdb.firebaseio.com/userData/'+userId+'.json'
      this.http.delete<userData>('https://userdata-b6c4f-default-rtdb.firebaseio.com/userData/'+userId+'.json').subscribe(res=>{
        console.log(res)
        this.onFetchUser()
      })
      
    }
  }

  onEditUser(userId:any, index:any){
    this.editMode=true
    this.editUserId=userId;
    console.log(this.editUserId)
    console.log(this.users[index].technology)

    this.userForm.setValue({
      username:this.users[index].username,
      technology:this.users[index].technology
    })

  }
}
