//importing functions on by one with alias
import {
  sumTwo as add2,
  sumThree as add3
} from './math/addition';

//importing the whole module with alias
import * as addition from './math/addition';

//importing objects (we can't import anything, not just only functions and classes)
import { users } from './data/users';

//importing 3rd-party modules
import * as _ from 'lodash';

exports.run = () => {
  console.log('2 + 3 =', add2(2, 3));
  console.log('2 + 3 + 4 =', add3(2, 3, 4));

  console.log('2 + 3 =', addition.sumTwo(2, 3));
  console.log('2 + 3 + 4 =', addition.sumThree(2, 3, 4));

  console.log(users);
  console.log(_.filter(users, { age: 36 }));
};
