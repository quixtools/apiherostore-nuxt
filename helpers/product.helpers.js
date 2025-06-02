export const calculateProductRating = (commentList) => {
  if (!Array.isArray(commentList) || commentList.length === 0) return 0;
  const total = commentList.reduce((sum, review) => sum + (review.rating || 0), 0);
  return parseFloat((total / commentList.length).toFixed(1));
};
