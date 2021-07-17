/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
    try {
        const api = process.env.VUE_APP_MAIL_ENDPOINT;
        await execa("git", ["checkout", "--orphan", "gh-pages"]);
        // eslint-disable-next-line no-console
        console.log("Building started...");
        console.log(api);
        execa('echo $VUE_APP_MAIL_ENDPOINT', {env: {'VUE_APP_MAIL_ENDPOINT': api}}, function (error, stdout, stderr)
        {
            console.log(stdout, stderr, error);
        });

        await execa(`npm`, ["run", "build"], {env: {'VUE_APP_MAIL_ENDPOINT': api}});
        // await execa("yarn", ["build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        await execa("rm", ["-r", folderName]);
        await execa("git", ["checkout", "-f", "main"]);
        await execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();
