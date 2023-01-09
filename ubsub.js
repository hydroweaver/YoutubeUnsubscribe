// https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
// Returns a Promise that resolves after "ms" Milliseconds
let x = document.getElementsByClassName(
  "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m "
);

// let y = document.getElementsByClassName('yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response').length

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function load() {
  // We need to wrap the loop into an async function for this to work
  for (var i = 0; i < x.length; i++) {
    if (x[i].ariaLabel.substr(0, 16) === "Unsubscribe from") {
      x[i].click();
      await timer(500);
      console.log(
        document.getElementsByClassName(
          "yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m "
        )[0]
      );
      document
        .getElementsByClassName(
          "yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action yt-spec-button-shape-next--size-m "
        )[0]
        .click();
      // document.getElementsByClassName('yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response')[y].click()
      // y -= 1
    } else {
      console.log(`Skipping ${i}`);
    }

    await timer((Math.floor(Math.random() * 6) + 1.5) * 1000); // then the created Promise can be awaited
  }
}

load();
