const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { importImages } = require("./images.cjs");
const { createTag } = require("./tags.cjs");
const { createUser } = require("./users.cjs");
const bcrypt = require("bcrypt");

const users = [];
const tags = [];

const restart = async () => {
  await prisma.users.deleteMany({});
  await prisma.tags.deleteMany({});
  await prisma.images.deleteMany({});
};

const addUsers = async () => {
  console.log("FLIP THE SWITCH IGOR!");
  const user1 = {
    email: "bananapancakes@syrup.com",
    password: bcrypt.hashSync("bananas", 10),
  };
  const user2 = {
    email: "pumpkinpancakes@syrup.com",
    password: bcrypt.hashSync("pumpkins", 10),
  };

  users.push(await createUser(user1));
  users.push(await createUser(user2));

  console.log("IT LIVES!");
};

const addTags = async () => {
  const tag1 = {
    tagText: "gold",
  };
  const tag2 = {
    tagText: "gems",
  };
  const tag3 = {
    tagText: "jewels",
  };
  tags.push(await createTag(tag1));
  tags.push(await createTag(tag2));
  tags.push(await createTag(tag3));
};

const importedImages = async () => {
  console.log("PAINT ME LIKE ONE OF YOUR GIRLS");
  const thomasjob = [
    {
      id: "cc0283e0-2086-470a-9140-ff087e0866aa",
      enqueue_time: "2024-03-29T21:32:34.446189+00:00",
      job_type: "v6_virtual_upsample",
      event_type: "diffusion_upsample_v6_virtual",
      parent_grid: 3,
      parent_id: "84eb0c84-8a93-4489-8114-8f7ebe9eddc6",
      full_command: "Ghibli flower white tones, background --tile --s 250",
      batch_size: 1,
      width: 1024,
      height: 1024,
      published: true,
      shown: true,
      rating: null,
    },
    {
      id: "84eb0c84-8a93-4489-8114-8f7ebe9eddc6",
      enqueue_time: "2024-03-29T21:31:47.846682+00:00",
      job_type: "v6_diffusion",
      event_type: "diffusion",
      parent_grid: null,
      parent_id: null,
      full_command: "Ghibli flower white tones, background --tile --s 250",
      batch_size: 4,
      width: 1024,
      height: 1024,
      published: true,
      shown: true,
      rating: null,
    },
  ];

  const imported = await importImages(thomasjob);

  console.log("NOT LIKE THAT :(");

  return imported;
};

const seed = async () => {
  console.log("WATERING SEED");

  await restart();
  await addUsers();
  await addTags();
  await importedImages();

  console.log("A FLOWER HAS BLOOMED");
};

seed();
