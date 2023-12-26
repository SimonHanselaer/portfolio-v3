import { Flex } from "@/components";

import { Loader } from "./styles";

export const Loading = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Loader />
    </Flex>
  );
};
