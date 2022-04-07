const StyleDictionary = require('style-dictionary')
const version = require('./package.json').version
const brands = require('./brands')

StyleDictionary.registerFileHeader({
  name: `tokenHeader`,
  fileHeader: () => [
    `AUTO GENERATED DO NOT EDIT DIRECTLY`,
    `Design Tokens - v${version}`
  ]
});

function getStyleDictionaryConfig(brand) {
  return {
    "source": [
      "./tokens/global/**/*.json",
      "./tokens/components/**/*.json",
      `./tokens/brands/${brand}.json`
    ],
    "platforms": {
      "css": {
        "transformGroup": "css",
        "buildPath": `./styles/brands/${brand}/`,
        "options": {
          "fileHeader": `tokenHeader`
        },
        "files": [
          {
            "destination": "tokens.css",
            "format": "css/variables"
          }
        ]
      }
    }
  }
}

// PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS
brands.map((brand) => {
  console.log('\n==============================================')
  console.log(`\nProcessing: [${brand}] design tokens`)

  const StyleDictionaryPackage = StyleDictionary.extend(getStyleDictionaryConfig(brand))

  StyleDictionaryPackage.buildPlatform('css')
})

console.log('\n==============================================')


// const StyleDictionary = require('style-dictionary')

// function getStyleDictionaryConfig() {
//   return {
//     "source": [
//       "./tokens/**/*.json",
//     ],
//     "platforms": {
//       "css": {
//         "transformGroup": "css",
//         "buildPath": `./styles/`,
//         "files": [
//           {
//             "destination": "tokens.css",
//             "format": "css/variables"
//           }
//         ]
//       }
//     }
//   }
// }

// console.log('\n==============================================')
// console.log(`\nProcessing design tokens`)

// const StyleDictionaryPackage = StyleDictionary.extend(getStyleDictionaryConfig())

// StyleDictionaryPackage.buildPlatform('css')

// console.log('\n==============================================')
