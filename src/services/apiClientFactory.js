// post menu, delete menu, post table, delete table

const ApiClientFactory = (client) => {
  const doPost = async ({ url = "", data = null }) => {
    try {
      const response = await client({ url: url, method: "post", data: data });
      return response.data;
    } catch (e) {
      if (e.response) {
        console.log("response error");
      } else if (e.request) {
        console.log("request error");
      } else {
        console.log("Error", e.message);
      }
      throw e;
    }
  };
  const doGet = async ({ url = "" }) => {
    try {
      const response = await client({ url: url, method: "get" });
      return response.data;
    } catch (e) {
      if (e.response) {
        console.log("response error");
      } else if (e.request) {
        console.log("request error");
      } else {
        console.log("Error", e.message);
      }
      throw e;
    }
  };

  const doDel = async ({ url = "" }) => {
    try {
      const response = await client({ url: url, method: "delete" });
      return response.data;
    } catch (e) {
      if (e.response) {
        console.log("response error");
      } else if (e.request) {
        console.log("request error");
      } else {
        console.log("Error", e.message);
      }
      throw e;
    }
  };

  return {
    doPost,
    doGet,
    doDel,
  };
};
export default ApiClientFactory;
