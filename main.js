// 1)
function processNumbers(...values) {
  if (values.length <= 2) {
    return "Please enter more than 2 numbers";
  }
  const sumOfFirstTwo = values[0] + values[1];
  const productOfRemaining = values
    .slice(2)
    .reduce((product, current) => product * current, 1);
  return [sumOfFirstTwo, productOfRemaining];
}

// 2)
const user = {
  banks: [
    {},
    {},
    {
      address: {
        city: "Tbilisi",
      },
    },
  ],
};

function getCityFromUser(user) {
  const { banks } = user;

  if (banks && banks[2] && banks[2].address) {
    const { city } = banks[2].address;
    return city;
  }
  return undefined;
}

// 3)
const userProfile = {
  userName: "Nika",
  userAge: 21,
  location: {
    city: "Tbilisi",
    country: "Georgia",
  },
  interests: ["Coding", "Gaming"],
  additionalDetails: {
    detail1: "value1",
    detail2: "value2",
  },
};

function createDeepCopy(obj) {
  const deepCopiedProfile = {
    ...obj,
    location: { ...obj.location },
    interests: [...obj.interests],
    additionalDetails: {
      ...obj.additionalDetails,
    },
  };
  return deepCopiedProfile;
}
