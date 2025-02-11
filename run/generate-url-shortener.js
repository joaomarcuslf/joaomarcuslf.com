const YAML = require("yaml");
const fs = require("fs");
const axios = require("axios").default;

const configFile = fs.readFileSync("./_config.yml", "utf8");

const parsedConfig = YAML.parse(configFile);

const posts = fs.readdirSync("./_posts");

posts.forEach(async (post) => {
  const oFile = fs.readFileSync(`./_posts/${post}`, "utf8");

  const file = oFile.split("---")[1];

  const ob = file
    .split("\n")
    .map((eln) => [eln.split(": ")[0], eln.split(": ")[1]])
    .reduce(
      (acc, nxt) => {
        if (!nxt[0]) return acc;

        if (nxt[0].includes(":")) {
          return {
            lastKey: nxt[0].replace(":", ""),
            data: {
              ...acc.data,
              [nxt[0].replace(":", "")]: [],
            },
          };
        } else if (nxt[0].includes("  - ")) {
          return {
            lastKey: acc.lastKey,
            data: {
              ...acc.data,
              [acc.lastKey]: [
                ...acc.data[acc.lastKey],
                nxt[0].replace("  - ", ""),
              ],
            },
          };
        } else {
          return {
            lastKey: nxt[0].replace(":", ""),
            data: {
              ...acc.data,
              [nxt[0].replace(":", "")]: nxt[1],
            },
          };
        }
      },
      { lastKey: "", data: {} }
    ).data;

  if (!ob.short_url) {
    if (ob.link.includes("http")) {
      const { data } = await axios.post(
        `https://vast-thicket-55540.herokuapp.com/create-short-url`,
        {
          long_url: ob.link,
        }
      );

      ob.short_url = data.short_url;
    } else {
      const { data } = await axios.post(
        `https://vast-thicket-55540.herokuapp.com/create-short-url`,
        {
          long_url: parsedConfig.url + ob.link,
        }
      );

      ob.short_url = data.short_url;
    }

    const newFile = oFile.replace(
      "tags:",
      "short_url: " + ob.short_url + "\ntags:"
    );

    fs.writeFileSync(`./_posts/${post}`, newFile, "utf8");
  }
});
