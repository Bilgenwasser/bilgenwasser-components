const fs = require("fs-extra")
const { execSync } = require("child_process")

;(async () => {
    // Modify the "main" field in package.json
    const packageJsonPath = "./package.json"
    const packageJson = await fs.readJSON(packageJsonPath)
    const originalMain = packageJson.main
    const newMain = "build/index.js" // Your new entry point value
    packageJson.main = newMain
    await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 })

    try {
        // Run "yalc publish" command
        execSync("yalc publish", { stdio: "inherit" })
    } catch (error) {
        console.error("Failed to publish with yalc:", error)
    }

    try {
        // Run "yalc push" command
        execSync("yalc push", { stdio: "inherit" })
    } catch (error) {
        console.error("Failed to push with yalc:", error)
    }

    // Revert the "main" field change
    packageJson.main = originalMain
    await fs.writeJSON(packageJsonPath, packageJson, { spaces: 2 })

    console.log("Build and publish completed!")
})()
