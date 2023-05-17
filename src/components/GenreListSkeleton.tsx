import { Skeleton, Image, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Skeleton>
      <Image boxSize="32px" borderRadius={8} />
    </Skeleton>
  );
};

export default GenreListSkeleton;
