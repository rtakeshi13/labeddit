import { useState, useEffect } from "react";
import { getPostDetail } from "../functions/axios";

const usePostDetail = () => {
  const [postDetail, setPostDetail] = useState();

  const requestPostDetail = async () => {
    const response = await getPostDetail();
    setPostDetail(response);
  };

  useEffect(() => {
    requestPostDetail();
  }, []);

  return [postDetail, requestPostDetail];
};

export default usePostDetail;
