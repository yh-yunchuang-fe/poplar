import * as React from "react";
import * as styles from "./styles.less";

export default class Button extends React.Component<any, any> {
  public render(): React.ReactElement<any> {
    return <div className={styles.container}>hello, world</div>;
  }
}
