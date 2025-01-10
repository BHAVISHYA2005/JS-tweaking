function processData(data, callback) {
    setTimeout(() => {
      if (typeof data !== 'string') {
        return callback(new Error("Data must be a string"), null);
      }
  
      const processedData = data.toUpperCase().split(" ");
      callback(null, processedData);
    }, 500);
  }
  
  function handleResult(error, result) {
    if (error) {
      console.error("Error:", error.message);
      return;
    }
  
    console.log("Processed Data:", result);
  }
  
  processData("this is some data", handleResult);
  
  processData(123, handleResult);