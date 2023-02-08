import { PureComponent } from "react";

import "./ProgressBar.style.scss";

export class ProgressBarComponent extends PureComponent {

  render() {
    // Accepts as steps a list of 3 steps
    const { steps, active} = this.props;

    return (
      <div block="ProgressBar">
        <div class="container-fluid">
          <br />
          <ul 
            class="multi-steps"
            style={{
              gridTemplateColumns: `auto repeat(${steps.length - 2}, 300px) auto`
            }}
          >
            {steps.slice(0, -1).map((item) => (
              <li key={item} className={(item === active)? "is-active":""}>
                <div>
                  <strong>{item}</strong>

                </div>
              </li>
            ))}
              <li className={(steps.at(-1) === active)? "is-active":""}>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProgressBarComponent;
