import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { CountProvider } from "./recursiveButtonContext";
import RecursiveButton from "./RecursiveButton";

test("After button click eight buttons appear", async () => {
  window.HTMLMediaElement.prototype.load = () => {
    /* do nothing */
  };
  window.HTMLMediaElement.prototype.play = (() => {
    /* do nothing */
  }) as any;

  const { getByRole, getAllByRole } = render(
    <CountProvider>
      <RecursiveButton />
    </CountProvider>
  );
  fireEvent.click(getByRole("button"));
  const buttons = await waitForElement(() => getAllByRole("button"));
  expect(buttons.length).toEqual(8);
});
