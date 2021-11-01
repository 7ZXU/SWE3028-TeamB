import media1 from "./friend1.jpeg";
import media2 from "./friend2.jpeg";
import media3 from "./friend3.png";

export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];
