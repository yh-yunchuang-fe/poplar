import { configure, setAddon } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"
import { addDecorator } from "@storybook/react"
// import JSXAddon from "storybook-addon-jsx"

const infoConfig = {
  inline: true,
  styles: {
    header: {
      h1: {
        marginRight: "20px",
        fontSize: "25px",
        display: "inline"
      },
      body: {
        paddingTop: 0,
        paddingBottom: 0
      },
      h2: {
        display: "inline",
        color: "#999"
      }
    },
    infoBody: {
      backgroundColor: "#eee",
      color: "rebeccapurple",
      padding: "0px 5px",
      lineHeight: "2"
    }
  }
}
addDecorator(withInfo(infoConfig))
addDecorator(withKnobs)

// setAddon(JSXAddon)
const req = require.context("../src/", true, /.stories.js$/)
function loadStories() {
  require("./welcomeStory")
  req.keys().forEach((file) => req(file))
}
configure(loadStories, module)

// const TableComponent1 = ({ propDefinitions }) => {
//   const props = propDefinitions.map(({ property, propType, required, description, defaultValue }) => {
//     return (
//       <tr key={property}>
//         <td>
//           {property}
//           {required ? <h1 style={{ color: "red" }}>*</h1> : null}
//         </td>
//         <td>{propType.name}</td>
//         <td>{defaultValue}</td>
//         <td>{description}</td>
//       </tr>
//     )
//   })

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>name</th>
//           <th>type</th>
//           <th>default</th>
//           <th>description</th>
//         </tr>
//       </thead>
//       <tbody>{props}</tbody>
//     </table>
//   )
// }
