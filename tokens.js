const StyleDictionary = require('style-dictionary')

function getStyleDictionaryConfig() {
  return {
    "source": [
      "./tokens/**/*.json",
    ],
    "platforms": {
      "css": {
        "transformGroup": "css",
        "buildPath": `./styles/`,
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

console.log('\n==============================================')
console.log(`\nProcessing design tokens`)

const StyleDictionaryPackage = StyleDictionary.extend(getStyleDictionaryConfig())

StyleDictionaryPackage.buildPlatform('css')

console.log('\n==============================================')
