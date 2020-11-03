import React from "react"
import { storiesOf } from "@storybook/react"

import { text, boolean, number } from "@storybook/addon-knobs"
import { Button } from "./Button"

storiesOf("Button", module)
  .add(
    "with background",
    function MyStory() {
      const bgcolor = text("bg color", "palegoldenrod")
      return <Button bg={bgcolor}>Hello world</Button>
    },
    {
      info: {
        text: `
        description of the component

        ~~~js
        const foo = 'bar'
        ~~~
  
        `
      }
    }
  )
  .add("with background 2", () => <Button bg="green">Hello world</Button>)
