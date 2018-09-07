const weekNameMap = [
  { key: 'saturday', value: 'شنبه' },
  { key: 'sunday', value: 'یکشنبه' },
  { key: 'monday', value: 'دوشنبه' },
  { key: 'tuesday', value: 'سه شنبه' },
  { key: 'wednesday', value: 'چهارشنبه' },
  { key: 'thursday', value: 'پنجشنبه' },
  { key: 'friday', value: 'جمعه' }
];

const monthNameMap = [
  { key: 'farvardin', value: 'فروردین' },
  { key: 'ordibehesht', value: 'اردیبهشت' },
  { key: 'khordad', value: 'خرداد' },
  { key: 'tir', value: 'تیر' },
  { key: 'mordad', value: 'مرداد' },
  { key: 'shahrivar', value: 'شهریور' },
  { key: 'mehr', value: 'مهر' },
  { key: 'aban', value: 'آبان' },
  { key: 'azar', value: 'آذر' },
  { key: 'day', value: 'دی' },
  { key: 'bahman', value: 'بهمن' },
  { key: 'esfand', value: 'اسفند' }
];

const yearsMap = [
  { key: '1397', value: '۱۳۹۷' },
  { key: '1398', value: '۱۳۹۸' },
  { key: '1399', value: '۱۳۹۹' },
  { key: '1400', value: '۱۴۰۰' },
  { key: '1401', value: '۱۴۰۱' },
  { key: '1402', value: '۱۴۰۲' },
  { key: '1403', value: '۱۴۰۳' },
  { key: '1404', value: '۱۴۰۴' },
  { key: '1405', value: '۱۴۰۵' },
  { key: '1406', value: '۱۴۰۶' }
];

const daysNumberMap = [
  { key: '1', value: '۱' },
  { key: '2', value: '۲' },
  { key: '3', value: '۳' },
  { key: '4', value: '۴' },
  { key: '5', value: '۵' },
  { key: '6', value: '۶' },
  { key: '7', value: '۷' },
  { key: '8', value: '۸' },
  { key: '9', value: '۹' },
  { key: '10', value: '۱۰' },
  { key: '11', value: '۱۱' },
  { key: '12', value: '۱۲' },
  { key: '13', value: '۱۳' },
  { key: '14', value: '۱۴' },
  { key: '15', value: '۱۵' },
  { key: '16', value: '۱۶' },
  { key: '17', value: '۱۷' },
  { key: '18', value: '۱۸' },
  { key: '19', value: '۱۹' },
  { key: '20', value: '۲۰' },
  { key: '21', value: '۲۱' },
  { key: '22', value: '۲۲' },
  { key: '23', value: '۲۳' },
  { key: '24', value: '۲۴' },
  { key: '25', value: '۲۵' },
  { key: '26', value: '۲۶' },
  { key: '27', value: '۲۷' },
  { key: '28', value: '۲۸' },
  { key: '29', value: '۲۸' },
  { key: '30', value: '۳۰' },
  { key: '31', value: '۳۱' }
];

const repeatChoice = [

    {key:'no', value:'بدون تکرار'},
    {key:'aday', value:'یک بار در روز'},
    {key:'amonth', value:'یک بار در هفته'},
    {key:'ayear', value:'یک بار در سال'},
];
const convertToPersianNumber = number => {
  return String(number)
    .split('')
    .map(char => {
      switch (char) {
        case '0':
          return '۰';
        case '1':
          return '۱';
        case '2':
          return '۲';
        case '3':
          return '۳';
        case '4':
          return '۴';
        case '5':
          return '۵';
        case '6':
          return '۶';
        case '7':
          return '۷';
        case '8':
          return '۸';
        case '9':
          return '۹';
        default:
          return '۰';
      }
    })
    .join('');
};

export {
  daysNumberMap,
  monthNameMap,
  weekNameMap,
  yearsMap,
  repeatChoice,
  minutesMap,
  hoursMap,
  convertToPersianNumber,
  hours2Map
};

const minutesMap = [
  { key: '00', value: '۰۰' },
  { key: '01', value: '۰۱' },
  { key: '02', value: '۰۲' },
  { key: '03', value: '۰۳' },
  { key: '04', value: '۰۴' },
  { key: '05', value: '۰۵' },
  { key: '06', value: '۰۶' },
  { key: '07', value: '۰۷' },
  { key: '08', value: '۰۸' },
  { key: '09', value: '۰۹' },
  { key: '10', value: '۱۰' },
  { key: '11', value: '۱۱' },
  { key: '12', value: '۱۲' },
  { key: '13', value: '۱۳' },
  { key: '14', value: '۱۴' },
  { key: '15', value: '۱۵' },
  { key: '16', value: '۱۶' },
  { key: '17', value: '۱۷' },
  { key: '18', value: '۱۸' },
  { key: '19', value: '۱۹' },
  { key: '20', value: '۲۰' },
  { key: '21', value: '۲۱' },
  { key: '22', value: '۲۲' },
  { key: '23', value: '۲۳' },
  { key: '24', value: '۲۴' },
  { key: '25', value: '۲۵' },
  { key: '26', value: '۲۶' },
  { key: '27', value: '۲۷' },
  { key: '28', value: '۲۸' },
  { key: '29', value: '۲۹' },
  { key: '30', value: '۳۰' },
  { key: '31', value: '۳۱' },
  { key: '32', value: '۳۲' },
  { key: '33', value: '۳۳' },
  { key: '34', value: '۳۴' },
  { key: '35', value: '۳۵' },
  { key: '36', value: '۳۶' },
  { key: '37', value: '۳۷' },
  { key: '38', value: '۳۸' },
  { key: '39', value: '۳۹' },
  { key: '40', value: '۴۰' },
  { key: '41', value: '۴۱' },
  { key: '42', value: '۴۲' },
  { key: '43', value: '۴۳' },
  { key: '44', value: '۴۴' },
  { key: '45', value: '۴۵' },
  { key: '46', value: '۴۶' },
  { key: '47', value: '۴۷' },
  { key: '48', value: '۴۸' },
  { key: '49', value: '۴۹' },
  { key: '50', value: '۵۰' },
  { key: '51', value: '۵۱' },
  { key: '52', value: '۵۲' },
  { key: '53', value: '۵۳' },
  { key: '54', value: '۵۴' },
  { key: '55', value: '۵۵' },
  { key: '56', value: '۵۶' },
  { key: '57', value: '۵۷' },
  { key: '58', value: '۵۸' },
  { key: '59', value: '۵۹' }
];

const hoursMap = [
  { key: '00', value: '۰۰' },
  { key: '1', value: '۱' },
  { key: '2', value: '۲' },
  { key: '3', value: '۳' },
  { key: '4', value: '۴' },
  { key: '5', value: '۵' },
  { key: '6', value: '۶' },
  { key: '7', value: '۷' },
  { key: '8', value: '۸' },
  { key: '9', value: '۹' },
  { key: '10', value: '۱۰' },
  { key: '11', value: '۱۱' },
  { key: '12', value: '۱۲' },
  { key: '13', value: '۱۳' },
  { key: '14', value: '۱۴' },
  { key: '15', value: '۱۵' },
  { key: '16', value: '۱۶' },
  { key: '17', value: '۱۷' },
  { key: '18', value: '۱۸' },
  { key: '19', value: '۱۹' },
  { key: '20', value: '۲۰' },
  { key: '21', value: '۲۱' },
  { key: '22', value: '۲۲' },
  { key: '23', value: '۲۳' }
];

const hours2Map = [
  { key: '0', value: '۰' },
  { key: '1', value: '۱' },
  { key: '2', value: '۲' },
  { key: '3', value: '۳' },
  { key: '4', value: '۴' },
  { key: '5', value: '۵' },
  { key: '6', value: '۶' },
  { key: '7', value: '۷' },
  { key: '8', value: '۸' },
  { key: '9', value: '۹' },
  { key: '10', value: '۱۰' },
  { key: '11', value: '۱۱' },
  { key: '12', value: '۱۲' },
  { key: '13', value: '۱۳' },
  { key: '14', value: '۱۴' },
  { key: '15', value: '۱۵' },
  { key: '16', value: '۱۶' },
  { key: '17', value: '۱۷' },
  { key: '18', value: '۱۸' },
  { key: '19', value: '۱۹' },
  { key: '20', value: '۲۰' },
  { key: '21', value: '۲۱' },
  { key: '22', value: '۲۲' },
  { key: '23', value: '۲۳' }
];
