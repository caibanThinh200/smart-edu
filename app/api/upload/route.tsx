import { writeFile, writeFileSync } from "fs";

export const POST = async (req: Request) => {
  const data = await req?.formData();
  const blob = data.get("blob");
  const buffer = Buffer.from(await (blob as Blob).arrayBuffer());
  writeFile("/tmp/video.webm", buffer, (res) => {
    console.log(res);
  });
  return new Response("oke");
};
