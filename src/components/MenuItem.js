function MenuItem(props) {
  let itemClassName = 'group flex items-center py-3 pl-3 rounded-r-md transition-colors cursor-pointer';
  let textClassName = 'text-sm';
  if (props.active) {
    itemClassName += ' bg-secondary';
    textClassName += ' text-primary';
  } else {
    itemClassName += ' text-white hover:bg-secondary';
    textClassName += ' group-hover:text-primary transition-colors';
  }

  return (
    <li className={itemClassName}>
      {props.icon}

      <div className={textClassName}>{props.text}</div>
    </li>
  )
}

export default MenuItem;