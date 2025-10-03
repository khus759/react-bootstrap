import { range } from 'lodash';

const usePagination = (data, page, limit) => {
  const totalPages = Math.ceil(data.length / limit);
  const siblings = 1;
  const leftRightPageCount = 5;

  const getData = () => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return data.slice(start, end);
  };

  const getShowingInfo = () => {
    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, data.length);
    return `Showing ${start} to ${end} of ${data.length} records`;
  };

  const getPaginationArray = () => {
    const leftSiblingIndex = Math.max(page - siblings, 1);
    const rightSiblingIndex = Math.min(page + siblings, totalPages);

    if (totalPages <= leftRightPageCount) {
      return range(1, totalPages + 1);
    }

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 1;

    const middleRange = range(leftSiblingIndex, rightSiblingIndex + 1);

    if (showLeftDots && showRightDots) {
      return [1, "...", ...middleRange, "...", totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightRange = range(totalPages - leftRightPageCount + 1, totalPages + 1);
      return [1, "...", ...rightRange];
    }

    if (!showLeftDots && showRightDots) {
      const leftRange = range(1, leftRightPageCount + 1);
      return [...leftRange, "...", totalPages];
    }

    return range(1, totalPages + 1);
  };

  return {
    totalPages,
    getData,
    getPaginationArray,
    getShowingInfo,
  };
};

export default usePagination;