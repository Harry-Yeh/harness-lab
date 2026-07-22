function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main(): Promise<void> {
  console.log("Harness-Lab Booting...");

  await sleep(1000);

  console.log("Loading...");

  await sleep(1000);

  console.log("Harness-Lab Ready");
}

main().catch((error) => {
  console.error(error);
});
