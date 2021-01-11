import React from 'react';

export function TeamName(props: any) {
  const [editMode, toggleEditMode] = React.useState(false);

  function handleDoubleClick() {
    toggleEditMode(true);
  }

  function handleChange(event: any) {
    if (event.key === 'Enter') {
      props.onNameChange(event.target.value);
      toggleEditMode(false);
    }
  }

  if (editMode) {
    return (<input autoFocus defaultValue={props.name} onKeyUp={(e: any) => handleChange(e)}/>);
  } else {
    return (<div className="team-name" onDoubleClick={() => handleDoubleClick()}>{props.name}</div>);
  }
}
