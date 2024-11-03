import React, { useCallback, useRef, useState } from "react";
import useListenFocusTriggers from "../index";
import { Button, Flex } from "../../../components";
import "../../__stories__/general-hooks-stories.scss";

export default {
  title: "Hooks/useListenFocusTriggers"
};

export const Overview = {
  render: () => {
    const [text, setText] = useState<string>("-");
    const ref = useRef<HTMLButtonElement>(null);

    const onFocusByMouse = useCallback((_event: React.FocusEvent<HTMLButtonElement>) => {
      setText("mouse");
    }, []);

    const onFocusByKeyboard = useCallback((_event: React.FocusEvent<HTMLButtonElement>) => {
      setText("keyboard");
    }, []);

    useListenFocusTriggers({
      ref: ref,
      onFocusByMouse: onFocusByMouse,
      onFocusByKeyboard: onFocusByKeyboard
    });

    return (
      <Flex direction="column" gap="medium" align="start">
        <Button ref={ref}>Focus target</Button>
        <div>Received focus by: {text}</div>
      </Flex>
    );
  },

  name: "Overview"
};
