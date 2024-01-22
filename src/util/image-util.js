export default function getImageURL(image) {
  return new URL(`../img/${image}`, import.meta.url).href;
}
