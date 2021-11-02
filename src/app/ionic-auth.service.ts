// import { Injectable } from '@angular/core';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// @Injectable({
//   providedIn: 'root'
// })

// export class IonicAuthService {

//   constructor(
//     private angularFireAuth: AngularFireAuthModule
//   ) { }


//   signinUser(value) {
//     return new Promise<any>((resolve, reject) => {
//       this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
//         .then(
//           res => resolve(res),
//           err => reject(err))
//     })
//   }

//   signoutUser() {
//     return new Promise<void>((resolve, reject) => {
//       if (this.angularFireAuth.currentUser) {
//         this.angularFireAuth.signOut()
//           .then(() => {
//             console.log("Sign out");
//             resolve();
//           }).catch(() => {
//             reject();
//           });
//       }
//     })
//   }

//   userDetails() {
//     return this.angularFireAuth.user
//   }

// }
