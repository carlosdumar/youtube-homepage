"use client";

import { Filter } from "@/components/Filter/Filter";
import { VideoList } from "@/components/VideoList/VideoList";
import { Flex, Skeleton } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const q_param = searchParams.get("q") || "";
  const URL_SEARCH_VIDEOS = "https://www.googleapis.com/youtube/v3/search";

  return (
    <Suspense fallback={<Skeleton />}>
      <Flex flexDirection="column" gap="20px">
        <Filter />
        <VideoList url={URL_SEARCH_VIDEOS} q={q_param} type="video" />
      </Flex>
    </Suspense>
  );
}
