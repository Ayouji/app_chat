

const formatFileSize = (fileSizeInBytes) => {

  if (fileSizeInBytes < 1024) {
    return fileSizeInBytes + " B";
  } else if (fileSizeInBytes < 1024 * 1024) {
    var fileSizeInKB = fileSizeInBytes / 1024;
    return fileSizeInKB.toFixed(2) + " KB";
  } else if (fileSizeInBytes < 1024 * 1024 * 1024) {
    var fileSizeInMB = fileSizeInBytes / (1024 * 1024);
    return fileSizeInMB.toFixed(2) + " MB";
  } else {
    var fileSizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
    return fileSizeInGB.toFixed(2) + " GB";
  }
  
  
  };
  export default formatFileSize;