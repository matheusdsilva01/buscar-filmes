import { getPlaiceholder } from "plaiceholder";

export async function getImageBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    //console.log(`base64: ${base64}`)

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export default async function addBlurredDataUrls(images: string[]) {
  const base46Promises = images.map(async image => {
    const base64 = getImageBase64(image);
    return base64;
  });
  const base64Results = await Promise.all(base46Promises);
  return base64Results;
}
