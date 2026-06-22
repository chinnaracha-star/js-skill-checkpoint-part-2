// เริ่มเขียนโค้ดตรงนี้

///  อันนี้ทำแบบทำที่เคยเรียน Basic of Programming เพราะใช้  await ยังไม่คล่อง
// function getUsers(Jsonplaceholder) {
//   return Jsonplaceholder.json();
// }

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(getUsers)
//   .then((data) => {
//     console.log(data);
//     let nameUp17 = data.filter((data) => data.name.length > 17);
//     console.log(nameUp17);
//   });
//-----------------------------------------------------------------------------------------------------
/// อันนี้ทำแบบ ใน ตัวอย่างการใช้งาน
async function getUsers(Jsonplaceholder) {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();
    console.log(data);
    let nameUp17 = data.filter((data) => data.name.length > 17);
    console.log(nameUp17);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

getUsers();
