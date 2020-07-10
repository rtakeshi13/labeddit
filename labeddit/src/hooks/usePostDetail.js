import { useState, useEffect } from "react";
import { getPostDetail } from "../functions/axios";

const usePostDetail = (postId) => {
  const [postDetail, setPostDetail] = useState({ comments: [] });

  const requestPostDetail = async (id) => {
    const response = await getPostDetail(id);
    setPostDetail(response);
  };

  useEffect(() => {
    requestPostDetail(postId);
  }, [postId]);

  return [postDetail, requestPostDetail];
};

export default usePostDetail;
