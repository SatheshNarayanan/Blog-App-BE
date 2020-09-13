require("../dbConfig/dbConfig");
const faker = require("faker");
const Posts = require("../models/posts");
const Author = require("../models/author");

const postSeeder = async () => {
  try {
    const author = await Author.find();
    let authorIds = [];
    author.forEach((element) => {
      authorIds.push(element["_id"]);
    });
    authorIds.forEach(async (element) => {
      for (let i = 0; i < 5; i++) {
        try {
          const postData = {
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            datetime: faker.date.past(),
            author: element
          };

          const newPosts = new Posts(postData);
          const result = await newPosts.save();
          console.log(result);
        } catch (e) {
          console.log(e);
        }
      }
    });
  } catch (e) {}
};

postSeeder();
