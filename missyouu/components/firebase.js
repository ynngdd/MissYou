import * as firebase from 'firebase'
import { firebaseConfig } from '../firebaseConfig'
 
let instance = null
 
class FirebaseService {
  constructor() {
    this.app = firebase.initializeApp(firebaseConfig);
    instance = this;
    console.log(this.app)
    return instance
  }
}
 
const firebaseService = new FirebaseService().app
export default firebaseService;