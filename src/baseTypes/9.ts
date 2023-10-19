/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/


type createDetails = {details:{ createAt: Date; updateAt: Date }} ;  
type basicDataPage = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
 
};

type fullDataPage = basicDataPage |createDetails;


const page1:fullDataPage = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: fullDataPage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {};