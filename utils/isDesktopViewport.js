// Function to determine if the test is on a Desktop viewport
export const isDeskTopViewport = (page) => {
  const size = page.viewportSize()
  return size.width >= 600
}
// returns true or false