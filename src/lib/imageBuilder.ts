import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./sanity.client";

const imageBuilder = createImageUrlBuilder(sanityClient);

type SanityImageSource = Parameters<(typeof imageBuilder)["image"]>[0];

export const urlFor = (source: SanityImageSource) => imageBuilder.image(source);
