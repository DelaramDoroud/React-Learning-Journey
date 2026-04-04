function DessertsList(props) {
  // Implement the component here.
  const deserts = props.data
    .filter(f => {
      return f.calories < 500
    })
    .sort((a, b) => {
      return a.calories - b.calories
    })
    .map(desert => {
      return (
        <li>
          {desert.name} - {desert.calories} cal
        </li>
      )
    });
  return (
    <div>
      <ul>{deserts}</ul>
    </div>
  )
}

export default DessertsList;
