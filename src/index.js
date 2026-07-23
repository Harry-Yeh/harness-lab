function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function main() {
    console.log("Harness-Lab Booting...");
    await sleep(1000);
    console.log("Loading...");
    await sleep(1000);
    console.log("Harness-Lab Ready");
}
main().catch((error) => {
    console.error(error);
});
export {};
//# sourceMappingURL=index.js.map