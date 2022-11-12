import { getImageHistogram } from "../../../../utils/helpers.js";

class GetImageHistogram {
  async execute(image) {
    return await getImageHistogram(image);
  }
}

export default GetImageHistogram;
