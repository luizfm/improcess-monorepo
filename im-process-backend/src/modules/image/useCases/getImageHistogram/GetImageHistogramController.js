import GetImageHistogram from "./getImageHistogram.js";

class GetImageHistogramController {
  async handle(request, response) {
    const image = request.files[0];
    console.log(image);
    const getImageHistogram = new GetImageHistogram();
    const imageHistogram = await getImageHistogram.execute(image.path);
    return response.status(201).json({ imageHistogram });
  }
}

export default GetImageHistogramController;
