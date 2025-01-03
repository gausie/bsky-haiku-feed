import { expect, test } from "vitest";
import { isHaiku } from "./haiku.js";

test.each([
  "An old silent pond... A frog jumps into the pond - splash! Silence again.",
  "Over the wintry forest, winds howl in rage with no more leaves to blow.",
  "305 7200 17000",
])('correctly identifies "%s" as a haiku', (text) => {
  expect(isHaiku(text)).toBe(true);
});

test.each([
  "Ten years in and we bone like we're cheating on each other WITH each other. A decade-plus and her clit/brown/taint-area still pOwns my dick.",
  "I'm a stupid moron with an ugly face and a big butt and my butt smells and I like to kiss my own butt.",
  "",
  "also, shout out to that AMAZING goomba who is 300% here to Square Up.",
  "Then what are you doing here? Go back to the slime from which you emerged."
])('correctly identifies "%s" as not a haiku', (text) => {
  expect(isHaiku(text)).toBe(false);
});
