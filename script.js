/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item, i) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item, i) => {
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({
    id: 4,
    name: "shivam",
    age: 24,
    profession: "intern",
  });
  console.log(arr[arr.length - 1]);
}

function removeAdmin() {
  //Write your code here, just console.log
  const removedData = arr.filter((item) => {
    return item.profession !== "admin";
  });
  console.log(removedData);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newarr = [
    { id: 4, name: "raj", age: 24, profession: "abab developer" },
    { id: 5, name: "pintu", age: 25, profession: " developer" },
    { id: 6, name: "rakesh", age: 26, profession: "ios developer" },
  ];
  console.log(arr.concat(newarr));
}
