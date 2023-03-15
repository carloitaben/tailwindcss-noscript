import { test, expect } from "@playwright/test"

test.use({ javaScriptEnabled: false })

test("works with JS disabled", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByTestId("js")).not.toBeVisible()
  await expect(page.getByTestId("nojs")).toBeVisible()
})
