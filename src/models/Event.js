export default class Event{


}

Event.schema ={

    name:'Event',
    primaryKey: 'id',

    properties: {
        
        id:'int',   
        name:'string',
        startTime:'data',
        endTime:'data?',// ? means its optional
        info:{type:'string', optional:true},
        done:{type:'boolean', default:false},

    }
}