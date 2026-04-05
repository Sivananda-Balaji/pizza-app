import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const description = "super cool pizza";
  const screen = render(
    <Pizza name={name} image={src} description={description} />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
  const name = "My Favorite Pizza";
  const description = "super cool pizza";
  const screen = render(<Pizza name={name} description={description} />);
  const img = screen.getByRole("img");
  expect(img.src).toBe("");
});
