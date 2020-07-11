export const pathGet = (arr1, query) => {
  // TASK 1:
  // Write a function that searches through the input array / object
  // and returns the appropriate string path leading to the input query, if found
  // Example:
  // const a = {
  //    user: {
  //      id: 1,
  //      name: {
  //        firstName: "James",
  //        lastName: "Ibori"
  //      },
  //      location: {
  //        city: "Ikoyi",
  //        state: "Lagos",
  //        address: "One expensive house like that"
  //      }
  //    }
  // }
  // `pathGet(a, 'One expensive house like that')` = "a.user.location.address"
  // `pathGet(a, 'James')` = "a.user.name.firstName"

  // ============== CODE GOES BELOW THIS LINE :) ==============

  console.log('^^^^: ' + arr1);
  console.log('^^^^: ' + query);
  return findFormatted(arr1, query);
};

function find(obj, item) {
  for (var key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      var result = find(obj[key], item);
      if (result) {
        result.unshift(key);
        return result;
      }
    } else if (obj[key] === item) {
      return [key];
    }
  }
}

function findFormatted(obj, item) {
  var path = find(obj, item);
  if (path == null) {
    return '';
  }
  return path.join('.');
  // return 'myObj["' + path.join('"]["') + '"]';
}
