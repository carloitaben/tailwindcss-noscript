import { test, expect } from "@playwright/test"

test.use({ javaScriptEnabled: true })

test("works with JS enabled", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByTestId("js")).toBeVisible()
  await expect(page.getByTestId("nojs")).not.toBeVisible()
})
