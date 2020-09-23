import React from 'react';

// custom cell for the proficiency column
export default function ProficiencyCustomCell(props) {
  let backgroundColor;
  if (props.value < 20) {
      backgroundColor = 'red';
  } else if (props.value < 60) {
      backgroundColor = '#ff9900';
  } else {
      backgroundColor = '#00A000';
  }

  return (
      <div className="div-percent-bar" style={{width: props.value + '%', backgroundColor: backgroundColor}}>
          <div className="div-percent-value">{this.props.value}%</div>
      </div>
  );
}
