const ShortVideos = require('../model/dataModel');
const cloudinary = require('cloudinary').v2;

const postShortVideos = async (req, res) => {
  const { userName, description, song } = req.body;
  const file = req.file; // This is where multer stores the uploaded file
  console.log("body", req.body);
  console.log("file", file);
  if (!file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }

  try {
    // Upload video to Cloudinary using the buffer
    const result = await cloudinary.uploader.upload_stream({ resource_type: 'video' }, (error, result) => {
      if (error) {
        throw error;
      }
      return result;
    }).end(file.buffer);

    // Create a new video document with the Cloudinary URL
    const newVideo = new ShortVideos({
      url: result.secure_url,
      userName,
      description,
      song,
      likes: '0',
      shares: '0',
      comments: [],
    });

    // Save the document to MongoDB
    await newVideo.save();

    res.status(200).send({ message: 'Video uploaded successfully', video: newVideo });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to upload video' });
  }
};

const getAllshortVideos = async (req, res) => {
  const videos = await ShortVideos.find({});
  res.send(JSON.stringify(videos));
};

const editStats = async (req, res) => {
  try {
    await ShortVideos.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Data updated successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: 'nhi hua',
    });
  }
};

const getUserVideos = async (req, res) => {
  try {
    const userN = req.body.userName;
    const videos = await ShortVideos.find({ userName: userN });
    res.json(videos);
  } catch (error) {
    console.error("Error fetching user videos:", error);
    res.status(500).send({ message: 'Failed to fetch videos' });
  }
};

module.exports = { editStats, postShortVideos, getAllshortVideos, getUserVideos };

