// Note: Problem 1 -- Remove all the falsy properties from the object (aside from 0)
const person1 = {
  name: "Faiz",
  city: "Dhaka",
  address: {
    street: null,
    zipCode: 0,
    country: "Bangladesh",
    region: {
      division: "Dhaka Division",
      district: undefined,
    },
  },
  contact: {
    phone: "",
    email: "faiz@example.com",
  },
};

const removeFalsy = (obj) => {
  // step 1: check if the type is not object or the value is null. If it is, return the object as it is.
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  //  step 5: use Object.fromEntries() to turn the array of key value pairs into an object and return it.
  return Object.fromEntries(
    // step 2: break the object into the array of key value pairs with Object.entries(obj);
    Object.entries(obj)
      // step 3: filter out the falsy values with are undefined, null, "" and false .filter() method and only keep the truthy ones including 0.
      .filter(
        ([_, value]) =>
          value !== undefined &&
          value !== null &&
          value !== "" &&
          value !== false
      )
      .map(([key, value]) => [key, removeFalsy(value)]) // step 4: use .map() method to loop over the filtered key-value pairs, then recursively call the removeFalsy() function for any values that are object and return the updated key-value pair's array.
  );
};

const newPerson = removeFalsy(person1);
console.log(newPerson);

// Output:
// {
//   name: 'Faiz',
//   city: 'Dhaka',
//   address: {
//     zipCode: 0,
//     country: 'Bangladesh',
//     region: { division: 'Dhaka Division' }
//   },
//   contact: { email: 'faiz@example.com' }
// }
