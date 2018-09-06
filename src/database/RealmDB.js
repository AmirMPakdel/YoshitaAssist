
import User from '../models/User';
import Event from '../models/Event';
import Day from '../models/Day';

export default class ReamDB{


    static db = null;

    static init(){

        //this.db = realm.open({schema: [User.schema, Day.schema]});
    }

    static getdb(callback){

        if(this.db !== undefined){

            this.db.then(myRealm =>{

                callback(myRealm);

            })

        }else{

            console.log("init the Realm First!!!")
        }

    }
}