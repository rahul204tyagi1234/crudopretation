
function isEqual(object1, object2) {
    return object1.name === object2.name;
  }
  
  const object1 = {
    name: 'Rahul',
    age :18
    
  };
  const object2 = {
    name: 'Rahul',
    age :18
  };
  
  console.log(isEqual(object1, object2)); // output = true


  