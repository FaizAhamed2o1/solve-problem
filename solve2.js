// Note: Problem-2: you're given a bunch of keys to find their values.

const findValuesFor = [
  "update_product",
  "read_category",
  "delete_brand",
  "faiz",
];

/**
 * Assuming the bunch of keys that are given are in an array.
 */
const person = {
  name: "faiz",
  permission: {
    product: {
      read_product: true,
      update_product: false,
      delete_product: true,
    },
    category: {
      read_category: true,
      update_category: false,
      delete_category: true,
    },
    brand: {
      read_brand: true,
      update_brand: false,
      delete_brand: true,
    },
  },
};

// Step 1: First we pass the object and the array of keys inside the findKeysInObject function.
function findKeysInObject(obj, keys) {
  // Step 2: Inside the function we take an empty object named result.
  const result = {};

  // Step 4: We receive the object and the key inside the search function.
  function search(obj, key) {
    // Step 5: We check if the object's data type is object or if the object is empty. if either of these conditions are true, we return null.
    if (typeof obj !== "object" || obj === null) return null;

    // Step 6: We check if the object has the key on the first step. if it does, the function returns the key's value. if it doesn't, we proceed to step 7.
    if (key in obj) {
      return obj[key];
    }

    // Step 7: If the key doesn't match any of the keys in the object on step 6, then we loop through all the values of the object using Object.values(). Then we call search function inside itself to search on the nested objects and store the value on variable named found. If found is not null or empty, we return found. if it is, we get out of the loop and return null.
    for (const value of Object.values(obj)) {
      const found = search(value, key);
      if (found !== null) {
        return found;
      }
    }

    return null; // Return null if the key is not found
  }

  // Step 3: We iterate over the keys array and set the keys inside the result object and set the values that is returned from the search() function. If search function returns null, the value will be false by default.
  keys.forEach((key) => {
    result[key] = search(obj, key) || false; // Default to false if not found
  });

  return result;
}

const result = findKeysInObject(person.permission, findValuesFor);
console.log(result);
