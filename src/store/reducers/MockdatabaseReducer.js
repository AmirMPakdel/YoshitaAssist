import * as actionTypes from '../actions/ActionTypes';
import _ from 'lodash';

const PersianDate = require('persian-date');
const EventRepeatMode = {
  justOnce: 0,
  onceADay: 1,
  onceAWeek: 2,
  onceAMonth: 3
};

let dayA = new PersianDate([1397, 6, 16, 0, 0, 0, 0]);
let dayB = new PersianDate([1397, 6, 17, 0, 0, 0, 0]);

//some fake data
const initialData = {
  [dayA.unix()]: [
    {
      eventType: 'meeting',
      eventTitle: 'ملاقات با داوران مسابقه',
      eventDuration: 5,
      eventTimeRange: {
        start: new PersianDate([1397, 6, 16, 13, 30, 0, 0]),
        end: new PersianDate([1397, 6, 16, 13, 40, 0, 0])
      },
      eventNotes: ['مودب باش', 'فیچر هارو دونه دونه مرتب توضیح بده'],
      eventDescription: 'ارایه دمویی از اپ و ایده در خصوص بخش فنی',
      eventRepeatMode: EventRepeatMode.justOnce,
      eventEarlyNotify: new PersianDate([1397, 6, 16, 13, 25, 0, 0]) // 5 minutes before the start of the event
    }
  ],
  [dayB.unix()]: [
    {
      eventType: 'email',
      eventTitle: 'پروژه ترکیده ...',
      eventDuration: null,
      eventTimeRange: {
        start: dayB
          .clone()
          .hour(22)
          .minute(10)
          .second(0)
          .millisecond(0),
        end: dayB
          .clone()
          .hour(23)
          .minute(30)
          .second(0)
          .millisecond(0)
      },
      eventNotes: [],
      eventDescription: 'به صاحب پروژه ایمیل بزن بگو پروژه ترکید',
      eventRepeatMode: EventRepeatMode.justOnce,
      eventEarlyNotify: null // 5 minutes before the start of the event
    },
    {
      eventType: 'gym',
      eventTitle: 'تمرین فوتبال',
      eventDuration: 220,
      eventTimeRange: {
        start: dayB
          .clone()
          .hour(16)
          .minute(0)
          .second(0)
          .millisecond(0),
        end: dayB
          .clone()
          .hour(17)
          .minute(30)
          .second(0)
          .millisecond(0)
      },
      eventNotes: ['تمرین ضربه سر', 'تمرین کردن پاس توی عمق'],
      eventDescription: null,
      eventRepeatMode: EventRepeatMode.onceAWeek,
      eventEarlyNotify: dayB
        .clone()
        .hour(15)
        .minute(30)
        .second(0)
        .millisecond(0) // 30 minutes before the start of the event
    },
    {
      eventType: 'party',
      eventTitle: 'جشن مجردی ممد',
      eventDuration: 300,
      eventTimeRange: {
        start: dayB
          .clone()
          .hour(23)
          .minute(50)
          .second(0)
          .millisecond(0),
        end: dayB
          .clone()
          .hour(4)
          .minute(0)
          .second(0)
          .millisecond(0)
      },
      eventNotes: [],
      eventDescription: 'با خودت اون استیک درامز رو ببر',
      eventRepeatMode: EventRepeatMode.justOnce,
      eventEarlyNotify: dayB
        .clone()
        .hour(15)
        .minute(30)
        .second(0)
        .millisecond(0) // 30 minutes before the start of the event
    }
  ]
};

export default (MockDatabaseREducer = (oldState = initialData, action) => {
  const clonedState = _.cloneDeep(oldState);

  switch (action.type) {
    case actionTypes.ADD_EVENT:
      let key = action.keyDate;
      key = new PersianDate([
        key.year(),
        key.month(),
        key.date(),
        0,
        0,
        0,
        0
      ]).unix();

      const finalEvent = {
        eventType: action.event.eventType,
        eventTitle: action.event.eventTitle,
        eventDuration: action.event.eventDuration,
        eventTimeRange: {
          start: action.event.eventTimeRange.start
            .clone()
            .second(0)
            .millisecond(0),
          end: action.event.eventTimeRange.end
            .clone()
            .second(0)
            .millisecond(0)
        },
        eventNotes: action.event.eventNotes,
        eventDescription: action.event.eventDescription,
        eventRepeatMode: action.event.eventRepeatMode,
        eventEarlyNotify: action.event.eventEarlyNotify
          .clone()
          .second(0)
          .millisecond(0)
      };

      if (_.isEmpty(clonedState[key])) {
        clonedState[key] = [finalEvent];
      } else {
        clonedState[key].push(finalEvent);
      }

      break;

    default:
      break;
  }

  return clonedState;
});
