export default class Day{


}

Day.schema ={

    name:'Day',
    primaryKey: 'id',

    properties: {

        id:'int',   
        date:'date',
        events:'Event[]?',
        busyRate:{type:'int', default:0}

    }
}