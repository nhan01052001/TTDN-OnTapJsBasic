const users = [
  {
    id: 1,
    name: "Nguyen Thanh Nhan",
    age: 22,
  },
  {
    id: 2,
    name: "Nguyen Van A",
    age: 20,
  },
  {
    id: 3,
    name: "Nguyen Thanh Nhan",
    age: 21,
  },
];

const messages = [
  {
    id: 1,
    text: "Hello",
    user_id: 1,
  },
  {
    id: 2,
    text: " Xin chào",
    user_id: 2,
  },
  {
    id: 3,
    text: ":))",
    user_id: 1,
  },
];

function getMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messages);
    }, 1000);
  });
}

function getUserByID(ids) {
  return new Promise((resolve, reject) => {
    let name = users.filter((user) => {
      return ids.includes(user.id);
    });
    resolve(name);
  });
}

// promise trả về resolve thì sẽ lọt vào .then còn trả về reject sẽ lọt và .catch
getMessages()
  .then((messages) => {
    let userIds = messages.map((message) => {
      return message.user_id;
    });

    return getUserByID(userIds).then((users) => {
      return {
        users,
        messages,
      };
    });
  })
  .then((data) => {
    data.messages.forEach((message) => {
      let result = data.users.find((user) => {
        return user.id === message.user_id;
      });
      console.log(result.name + ": " + message.text);
    });
  });

// ôn tập các hàm về mảng

// nối mảng với concat() => trả về 1 mảng mới không thay đổi mảng ban đầu
function arrayConcatenation() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  console.log("- Nối mảng với concat: " + array1.concat(array2));
}
arrayConcatenation();

// hàm filter() lọc ra các phẩn tư nhưng thoả mản điều kiện nào đó
// truyền vào 1 callback
// lọc hết tất cả
function arrayWithFilter() {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("- Lọc mảng với filter:  ");
  console.log(users.filter((user) => user.age > 20));
  console.log(
    "----------------------------------------------------------------"
  );
}

arrayWithFilter();

//  hàm find() lọc ra các phẩn tư nhưng thoả mản điều kiện nào đó
// truyền vào 1 callback
// lọc đến chỗ đầu tiên nó tìm thấy hoặc trả về undefined nếu không tìm thấy.
function arrayWithFind() {
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("- Lọc mảng với find:  ");
  console.log(users.find((user) => user.age > 20));
  console.log(
    "----------------------------------------------------------------"
  );
}
arrayWithFind();

// hàm includes() kiểm tra phẩn tử có tồn tại trong mảng.
// nếu có tồn tại thì trả về true ngược lại thì false
function arrayWithIncudes() {
  const KEY = 1;
  const array1 = [1, 2, 3];

  console.log(
    "- Kiểm tra có phần tử trong mảng với includes: " + array1.includes(KEY)
  );
}
arrayWithIncudes();

// hàm map() trả về 1 mảng mới, trong đó các phẩn tử trong mảng là kết quả của
// việc thực thi một logic gì đó lên từng phẩn tử trong mảng.
function arrayWithMap() {
  const array1 = [1, 2, 3, 4];
  //    1 * 1; 2 * 2; 3 * 3; 4 * 4.
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("Array with map: ");
  console.log(
    array1.map((element) => {
      return element * element;
    })
  );
  console.log(
    "----------------------------------------------------------------"
  );
}
arrayWithMap();

console.log("Loading get messages in 1 second...");
