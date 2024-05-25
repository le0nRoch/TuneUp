import { Flex, Heading } from "@chakra-ui/react";
import { CardWrapper } from "./CardWrapper";
import { Pricing } from "./Pricing";

export function EmptyCard() {
  return (
    <CardWrapper>
      <Flex height={"100%"} direction={"column"} gap="inherit">
        <Heading size={"md"}>
          You have used up your swipe credits for today!
        </Heading>
        <Pricing
          title="Premium"
          price="3.99"
          features={["25 swipes a day", "3 songs on the portfolio", "no ads"]}
        />
        <Pricing
          title="Platin"
          price="9.99"
          features={[
            "unlimited swipes a day",
            "10 songs on the portfolio",
            "no ads",
          ]}
        />
      </Flex>
    </CardWrapper>
  );
}
