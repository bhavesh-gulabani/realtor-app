export default function encodeBase64(imgUrl) {
  return `/_next/image?url=${encodeURIComponent(imgUrl)}&w=8&q=70`;
}
