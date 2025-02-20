let plugins = [
  [
    "postcss-preset-env",
    {
      autoprefixer: {
        flexbox: "no-2009",
        grid: "autoplace",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  ],
  "postcss-flexbugs-fixes",
  [
    "autoprefixer",
    {
      flexbox: "no-2009",
      grid: "autoplace",
    },
  ],
];

if (process.env.NODE_ENV === "production") {
  console.log("Production mode, adding PurgeCSS to PostCSS plugins");
  plugins.push([
    "@fullhuman/postcss-purgecss",
    {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
      ],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: ["html", "body"],
    },
  ]);
}

module.exports = { plugins };
