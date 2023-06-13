import * as fs from "fs"

enum gitmojiMap {
    feat = "✨",
    fix = "🐛",
    refactor = "♻️",
    perf = "🚀",
    ci = "👷",
    docs = "📝",
    test = "✅",
    chore = "🔧",
}

interface CheckCommitResult {
    isValidStandardCommitType: boolean
    commitType: keyof typeof gitmojiMap | null
    hasGitmojiPrefix: boolean
}

function checkCommitForGitmoji(commitMsg: string): CheckCommitResult {
    const gitmojis = Object.values(gitmojiMap)
    const hasGitmojiPrefix = gitmojis.some((searchedEmoji) => commitMsg.startsWith(searchedEmoji))

    let commitType: keyof typeof gitmojiMap | null = null
    const isValidStandardCommitType = Object.keys(gitmojiMap).some((searchedCommitType) => {
        const matches = commitMsg.startsWith(searchedCommitType)
        if (matches) {
            commitType = searchedCommitType as keyof typeof gitmojiMap
        }
        return matches
    })

    return {
        isValidStandardCommitType,
        commitType,
        hasGitmojiPrefix,
    }
}

type GetFileContent = (path: string) => string
type PutFileContent = (path: string, content: string) => void
type PrependMessage = (
    getFileContent: GetFileContent,
    putFileContent: PutFileContent
) => (path: string, message: string) => void

const prependMessage: PrependMessage = (getFileContent, putFileContent) => (filepath, message: string) => {
    putFileContent(filepath, `${message} ${getFileContent(filepath)}`)
}

const prependMessageToFile = prependMessage(
    (path) => fs.readFileSync(path, { encoding: "utf-8" }),
    (path, fileContent) => fs.writeFileSync(path, fileContent, { encoding: "utf-8" })
)

const isCommitEditMessageFile = (stringToTest: string): boolean => /COMMIT_EDITMSG/g.test(stringToTest)

const main = (commitFile: string): void => {
    if (isCommitEditMessageFile(commitFile)) {
        const commitMsg = fs.readFileSync(commitFile, { encoding: "utf-8" })
        const { commitType, hasGitmojiPrefix, isValidStandardCommitType } = checkCommitForGitmoji(commitMsg)

        if (!hasGitmojiPrefix && isValidStandardCommitType) {
            return prependMessageToFile(commitFile, gitmojiMap[commitType as keyof typeof gitmojiMap])
        }
    }
}

main(process.argv[2])
